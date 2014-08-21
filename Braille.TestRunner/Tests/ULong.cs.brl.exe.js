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
    asm.x6000002 = function (o) { return o.constructor; };;
    asm.x6000003 = function (o) { return o.hash || (o.hash = asm0.next_hash++); };;
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
        loc0 = (asm0.x6000003)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000007 = function ToJavaScriptString(arg0)
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
                /* IL_02: ldnull */
                /* IL_04: ceq */
                /* IL_05: ldc.i4.0 */
                /* IL_07: ceq */
                /* IL_08: stloc.1 */
                loc1 = ((((arg0 === null) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_09: ldloc.1 */
                /* IL_0A: brtrue.s IL_19*/
                
                if (loc1){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_0C: ldstr */
                /* IL_11: ldfld Object jsstr*/
                /* IL_16: stloc.0 */
                loc0 = new_string("").jsstr;
                /* IL_17: br.s IL_27*/
                __pos_0__ = 0x27;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: callvirt String ToString()*/
                /* IL_1F: ldfld Object jsstr*/
                /* IL_24: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0)).jsstr;
                case 0x27:
                /* IL_27: ldloc.0 */
                /* IL_28: ret */
                return loc0;
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
        /* IL_02: call Type GetTypeImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000002)(arg0);
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
    asm.x600000e = function get_ValidOn(arg0)
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
    asm.x600000f = function set_ValidOn(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000010 = function get_Inherited(arg0)
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
    asm.x6000011 = function set_Inherited(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x600000d = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        (asm0.x600000f)(arg0,clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000012 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000013 = function ToString(arg0)
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
    asm.x6000021_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
        asm.x6000021 = asm.x6000021_;
    };;
    asm.x6000021 = function (arg0)
    {
        (asm.x6000021_init.apply)(this,arguments);
        return (asm.x6000021.apply)(this,arguments);
    };;
    asm.x6000021_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000022_init = function ()
    {
        (((asm0)["System.Char"])().init)();
        asm.x6000022 = asm.x6000022_;
    };;
    asm.x6000022 = function (arg0)
    {
        (asm.x6000022_init.apply)(this,arguments);
        return (asm.x6000022.apply)(this,arguments);
    };;
    asm.x6000022_ = function ToString(arg0)
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
        loc0 = (asm0.x6000023)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000023 = function(o) { return new_string(String.fromCharCode(o.boxed)); };;
    asm.x6000024 = (function (o) { console.log(o.jsstr); });;
    asm.x6000025 = function WriteLine(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String ToString()*/
        /* IL_07: call Void WriteLineImpl(System.String)*/
        (asm0.x6000024)((((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0)));
        /* IL_0C: nop */
        /* IL_0D: ret */
        return ;
    };;
    asm.x6000026 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000027_init = function ()
    {
        (((asm0)["System.Double"])().init)();
        asm.x6000027 = asm.x6000027_;
    };;
    asm.x6000027 = function (arg0)
    {
        (asm.x6000027_init.apply)(this,arguments);
        return (asm.x6000027.apply)(this,arguments);
    };;
    asm.x6000027_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000028 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000012)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000029 = function get_CurrentManagedThreadId()
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
    asm.x600002a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600002b_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x600002b = asm.x600002b_;
    };;
    asm.x600002b = function (arg0,arg1)
    {
        (asm.x600002b_init.apply)(this,arguments);
        return (asm.x600002b.apply)(this,arguments);
    };;
    asm.x600002b_ = function Combine(arg0,arg1)
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
                throw newobj(t0,asm0.x600004f,[ null,new_string("Incompatible delegate types") ]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x600002e"])())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };
    asm.x600002c_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x600002c = asm.x600002c_;
    };;
    asm.x600002c = function (arg0,arg1)
    {
        (asm.x600002c_init.apply)(this,arguments);
        return (asm.x600002c.apply)(this,arguments);
    };;
    asm.x600002c_ = function Remove(arg0,arg1)
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
                throw newobj(t0,asm0.x600004f,[ null,new_string("Incompatible delegate types") ]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x600002d"])())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };
    asm.x600002d_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x600002d = asm.x600002d_;
    };;
    asm.x600002d = function (arg0,arg1)
    {
        (asm.x600002d_init.apply)(this,arguments);
        return (asm.x600002d.apply)(this,arguments);
    };;
    asm.x600002d_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000053,[ null ]);
    };
    asm.x600002e_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x600002e = asm.x600002e_;
    };;
    asm.x600002e = function (arg0,arg1)
    {
        (asm.x600002e_init.apply)(this,arguments);
        return (asm.x600002e.apply)(this,arguments);
    };;
    asm.x600002e_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x6000053,[ null ]);
    };
    asm.x600002f_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x600002f = asm.x600002f_;
    };;
    asm.x600002f = function (arg0,arg1)
    {
        (asm.x600002f_init.apply)(this,arguments);
        return (asm.x600002f.apply)(this,arguments);
    };;
    asm.x600002f_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x6000030)(arg0,(t0.IsInst)(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000030_init = function ()
    {
        (((asm0)["System.MulticastDelegate"])().init)();
        asm.x6000030 = asm.x6000030_;
    };;
    asm.x6000030 = function (arg0,arg1)
    {
        (asm.x6000030_init.apply)(this,arguments);
        return (asm.x6000030.apply)(this,arguments);
    };;
    asm.x6000030_ = function op_Equality(arg0,arg1)
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
                loc6 = (((loc0._invocationList.jsarr.length | 0) === (loc1._invocationList.jsarr.length | 0)) ? (1) : (0));
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
                loc6 = (asm0.x6000030)(loc3,loc4);
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
                loc2 = (loc2 + (1|0)) | 0;
                case 0xE3:
                /* IL_E3: ldloc.2 */
                /* IL_E4: ldloc.0 */
                /* IL_E5: ldfld Delegate[] _invocationList*/
                /* IL_EA: ldlen */
                /* IL_EB: conv.i4 */
                /* IL_ED: clt */
                /* IL_EE: stloc.s 6*/
                loc6 = ((loc2 < (loc0._invocationList.jsarr.length | 0)) ? (1) : (0));
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
    asm.x6000031 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x6000030)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x6000032 = function GetHashCode(arg0)
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
    asm.x6000033 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000034 = 
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
    asm.x6000035_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000035 = asm.x6000035_;
    };;
    asm.x6000035 = function (arg0,arg1)
    {
        (asm.x6000035_init.apply)(this,arguments);
        return (asm.x6000035.apply)(this,arguments);
    };;
    asm.x6000035_ = function CombineImpl(arg0,arg1)
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
                loc0 = new_array(t0,((arg0._invocationList.jsarr.length | 0) + (1|0)) | 0);
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
                loc1 = (loc1 + (1|0)) | 0;
                case 0x32:
                /* IL_32: ldloc.1 */
                /* IL_33: ldarg.0 */
                /* IL_34: ldfld Delegate[] _invocationList*/
                /* IL_39: ldlen */
                /* IL_3A: conv.i4 */
                /* IL_3C: clt */
                /* IL_3D: stloc.3 */
                loc3 = ((loc1 < (arg0._invocationList.jsarr.length | 0)) ? (1) : (0));
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
                (loc0.jsarr)[((loc0.jsarr.length | 0) - (1|0)) | 0] = arg1;
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
                loc2 = (asm0.x6000034)(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };
    asm.x6000036_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000036 = asm.x6000036_;
    };;
    asm.x6000036 = function (arg0,arg1)
    {
        (asm.x6000036_init.apply)(this,arguments);
        return (asm.x6000036.apply)(this,arguments);
    };;
    asm.x6000036_ = function RemoveImpl(arg0,arg1)
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
                loc5 = (((asm0.x6000030)(arg1,arg0) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000031)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc0 = (loc0 + (1|0)) | 0;
                case 0x56:
                /* IL_56: ldloc.1 */
                /* IL_57: ldc.i4.1 */
                /* IL_58: add */
                /* IL_59: stloc.1 */
                loc1 = (loc1 + (1|0)) | 0;
                case 0x5A:
                /* IL_5A: ldloc.1 */
                /* IL_5B: ldarg.0 */
                /* IL_5C: ldfld Delegate[] _invocationList*/
                /* IL_61: ldlen */
                /* IL_62: conv.i4 */
                /* IL_64: clt */
                /* IL_65: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | 0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000031)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc1 = (loc1 + (1|0)) | 0;
                case 0xB8:
                /* IL_B8: ldloc.1 */
                /* IL_B9: ldarg.0 */
                /* IL_BA: ldfld Delegate[] _invocationList*/
                /* IL_BF: ldlen */
                /* IL_C0: conv.i4 */
                /* IL_C2: clt */
                /* IL_C3: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | 0)) ? (1) : (0));
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
                loc5 = (((asm0.x6000031)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                st_5C = ((st_5A + st_5B) | 0);
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
                loc1 = (loc1 + (1|0)) | 0;
                case 0x100:
                /* IL_100: ldloc.1 */
                /* IL_101: ldarg.0 */
                /* IL_102: ldfld Delegate[] _invocationList*/
                /* IL_107: ldlen */
                /* IL_108: conv.i4 */
                /* IL_10A: clt */
                /* IL_10B: stloc.s 5*/
                loc5 = ((loc1 < (arg0._invocationList.jsarr.length | 0)) ? (1) : (0));
                /* IL_10D: ldloc.s 5*/
                /* IL_10F: brtrue.s IL_D6*/
                
                if (loc5){
                    __pos_0__ = 0xD6;
                    continue;
                }
                /* IL_111: ldloc.2 */
                /* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
                /* IL_117: stloc.s 4*/
                loc4 = (asm0.x6000034)(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };
    asm.x6000037 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000033)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000039 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x6000038 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x600003c_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x600003c = asm.x600003c_;
    };;
    asm.x600003c = function (arg0)
    {
        (asm.x600003c_init.apply)(this,arguments);
        return (asm.x600003c.apply)(this,arguments);
    };;
    asm.x600003c_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600003d_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600003d = asm.x600003d_;
    };;
    asm.x600003d = function (arg0)
    {
        (asm.x600003d_init.apply)(this,arguments);
        return (asm.x600003d.apply)(this,arguments);
    };;
    asm.x600003d_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600003e = function(o) { return new_string(o.boxed.toString()); };;
    asm.x600003f_init = function ()
    {
        (((asm0)["System.IntPtr"])().init)();
        asm.x600003f = asm.x600003f_;
    };;
    asm.x600003f = function (arg0)
    {
        (asm.x600003f_init.apply)(this,arguments);
        return (asm.x600003f.apply)(this,arguments);
    };;
    asm.x600003f_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    asm.x6000040 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000041 = function get_Value(arg0)
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
    asm.x6000042 = function get_Value(arg0)
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
    asm.x6000043_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x6000043 = asm.x6000043_;
    };;
    asm.x6000043 = function (arg0)
    {
        (asm.x6000043_init.apply)(this,arguments);
        return (asm.x6000043.apply)(this,arguments);
    };;
    asm.x6000043_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000044_init = function ()
    {
        (((asm0)["System.Single"])().init)();
        asm.x6000044 = asm.x6000044_;
    };;
    asm.x6000044 = function (arg0)
    {
        (asm.x6000044_init.apply)(this,arguments);
        return (asm.x6000044.apply)(this,arguments);
    };;
    asm.x6000044_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000045 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600004d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000050 = function get_Message(arg0)
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
    asm.x6000051 = function set_Message(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000052 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000050)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600004e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600004f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_Message(System.String)*/
        (asm0.x6000051)(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000053 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600004e)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000054 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(arg0,new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x6000055 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600004f)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x6000059 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600005a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(arg0,new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600005b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(arg0,new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600005c = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600004f)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x600005d_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        asm.x600005d = asm.x600005d_;
    };;
    asm.x600005d = function (arg0)
    {
        (asm.x600005d_init.apply)(this,arguments);
        return (asm.x600005d.apply)(this,arguments);
    };;
    asm.x600005d_ = function ToString(arg0)
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
                loc4 = (asm0.x60000ac)(new_string("-"),((({
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
                loc2 = (asm0.x60000ac)(new_string(loc3[0].toString()),loc2);
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
    asm.x600005e = function Equals(arg0,arg1)
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
    asm.x600005f = function GetHashCode(arg0)
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
    asm.x6000062 = 
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
    asm.XInt64_Addition = asm.x6000062;
    asm.x6000063 = 
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
    asm.XInt64_Subtraction = asm.x6000063;
    asm.x6000064 = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x6000064;
    asm.x6000065 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x6000065;
    asm.x6000066 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x6000066;
    asm.x6000067 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x6000067;
    asm.x6000068 = 
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
    asm.XInt64_LeftShift = asm.x6000068;
    asm.x6000069 = 
            function XInt64_Equality(lhs, rhs)
            {
                return lhs[0] === rhs[0] && lhs[1] === rhs[1];
            }
            ;;
    asm.XInt64_Equality = asm.x6000069;
    asm.x600006a = 
            function XInt64_Inequality(lhs, rhs)
            {
                return lhs[0] !== rhs[0] && lhs[1] !== rhs[1];
            }
            ;;
    asm.XInt64_Inequality = asm.x600006a;
    asm.x600006b = function op_Decrement(arg0)
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
    asm.XInt64_Decrement = asm.x600006b;
    asm.x600006c = function op_Increment(arg0)
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
    asm.XInt64_Increment = asm.x600006c;
    asm.x600006d = 
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
    asm.Int64_RightShift = asm.x600006d;
    asm.x600006e = 
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
    asm.Int64_Division = asm.x600006e;
    asm.x600006f = 
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
    asm.Int64_Modulus = asm.x600006f;
    asm.x6000070 = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x6000070;
    asm.x6000071 = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x6000071;
    asm.x6000072 = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, conv_u8(1));
            };;
    asm.Int64_UnaryNegation = asm.x6000072;
    asm.x6000073 = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x6000073;
    asm.x600007e = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600007f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x6000080 = function InitializeArray(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x6000081 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000082 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x6000083_init = function ()
    {
        (((asm0)["System.EventArgs"])().init)();
        asm.x6000083 = asm.x6000083_;
    };;
    asm.x6000083 = function ()
    {
        (asm.x6000083_init.apply)(this,arguments);
        return (asm.x6000083.apply)(this,arguments);
    };;
    asm.x6000083_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.EventArgs"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = newobj(t0,asm0.x6000082,[ null ]);
        /* IL_0A: ret */
        return ;
    };
    asm.x6000085 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x6000084 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x6000086 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000087)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000087 = function(o) { return o.jsarr.length; };;
    asm.x6000088 = function(o, i) { return box(o.jsarr[i], o.type); };;
    asm.x6000089 = function GetValue(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000088)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x600008a = function GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x600008b"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600008c = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600008e_init = function ()
    {
        (((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
        asm.x600008e = asm.x600008e_;
    };;
    asm.x600008e = function (arg0)
    {
        (asm.x600008e_init.apply)(this,arguments);
        return (asm.x600008e.apply)(this,arguments);
    };;
    asm.x600008e_ = function GetEnumerator(arg0)
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
        loc0 = newobj(t1,asm0.x6000091,[ null,arg0 ]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    asm.x600008f = function GetEnumeratorImpl(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600008e)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000090 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600008c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000092 = function get_Current(arg0)
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
    asm.x6000093 = function MoveNext(arg0)
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
        st_05 = ((st_02 + st_03) | 0);
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
    asm.x6000094 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = box((asm0.x6000092)(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x6000095 = function Reset(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    asm.x6000096 = function Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x6000091 = function _ctor(arg0,arg1)
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
        arg0.length = (asm0.x6000086)(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    asm.x6000097 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000098 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600009a = function get_HasValue(arg0)
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
    asm.x600009b_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        asm.x600009b = asm.x600009b_;
    };;
    asm.x600009b = function (arg0)
    {
        (asm.x600009b_init.apply)(this,arguments);
        return (asm.x600009b.apply)(this,arguments);
    };;
    asm.x600009b_ = function get_Value(arg0)
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
                throw newobj(t0,asm0.x600005c,[ null,new_string("Nullable object must have a value.") ]);
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
    asm.x600009c_init = function ()
    {
        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
        asm.x600009c = asm.x600009c_;
    };;
    asm.x600009c = function (arg0,arg1)
    {
        (asm.x600009c_init.apply)(this,arguments);
        return (asm.x600009c.apply)(this,arguments);
    };;
    asm.x600009c_ = function Equals(arg0,arg1)
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
                loc0 = (asm0.x600009d)(arg0,clone_value(unbox_any(arg1,t1)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    asm.x600009d = function Equals(arg0,arg1)
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
    asm.x600009e = function GetHashCode(arg0)
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
    asm.x600009f = function GetValueOrDefault(arg0)
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
    asm.x60000a0 = function GetValueOrDefault(arg0,arg1)
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
    asm.x60000a1_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000a1 = asm.x60000a1_;
    };;
    asm.x60000a1 = function (arg0)
    {
        (asm.x60000a1_init.apply)(this,arguments);
        return (asm.x60000a1.apply)(this,arguments);
    };;
    asm.x60000a1_ = function ToString(arg0)
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
    asm.x60000a2_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x60000a2 = asm.x60000a2_;
        };
    };;
    asm.x60000a2 = function (T)
    {
        return function (arg0)
        {
            ((asm.x60000a2_init)(T).apply)(this,arguments);
            return ((asm.x60000a2)(T).apply)(this,arguments);
        };
    };;
    asm.x60000a2_ = function (T)
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
            loc0 = newobj(t1,asm0.x6000099,[ null,clone_value(arg0) ]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    asm.x60000a3 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = (asm0.x600009b)({
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
    asm.x60000a4 = function (T)
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
    asm.x60000a5_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x60000a5 = asm.x60000a5_;
        };
    };;
    asm.x60000a5 = function (T)
    {
        return function (arg0)
        {
            ((asm.x60000a5_init)(T).apply)(this,arguments);
            return ((asm.x60000a5)(T).apply)(this,arguments);
        };
    };;
    asm.x60000a5_ = function (T)
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
                    loc0 = newobj(t1,asm0.x6000099,[ null,clone_value(unbox_any(arg0,t0)) ]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    asm.x6000099 = function _ctor(arg0,arg1)
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
    asm.x60000a6 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000a7 = function(o) { return o.jsstr.length; };;
    asm.x60000a8 = function(a, b) { return a.jsstr === b.jsstr; };;
    asm.x60000a9 = function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); };;
    asm.x60000aa = function (s, i) { return s.jsstr.charCodeAt(i); };;
    asm.x60000ab = function get_Chars(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000aa)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000ac_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000ac = asm.x60000ac_;
    };;
    asm.x60000ac = function (arg0,arg1)
    {
        (asm.x60000ac_init.apply)(this,arguments);
        return (asm.x60000ac.apply)(this,arguments);
    };;
    asm.x60000ac_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x60000a9)(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };
    asm.x60000ad_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000ad = asm.x60000ad_;
    };;
    asm.x60000ad = function (arg0,arg1)
    {
        (asm.x60000ad_init.apply)(this,arguments);
        return (asm.x60000ad.apply)(this,arguments);
    };;
    asm.x60000ad_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x60000a9)(loc1);
        /* IL_23: ldloc.0 */
        /* IL_24: ret */
        return loc0;
    };
    asm.x60000ae = function Concat(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000a9)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000af_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x60000af = asm.x60000af_;
    };;
    asm.x60000af = function (arg0)
    {
        (asm.x60000af_init.apply)(this,arguments);
        return (asm.x60000af.apply)(this,arguments);
    };;
    asm.x60000af_ = function Concat(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Exception"])();
        /* IL_00: nop */
        /* IL_01: ldstr Not implemented*/
        /* IL_06: newobj Void .ctor(System.String)*/
        /* IL_0B: throw */
        throw newobj(t0,asm0.x600004f,[ null,new_string("Not implemented") ]);
    };
    asm.x60000b0 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000a7)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000b1 = function ToString(arg0)
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
    asm.x60000b2 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x60000a8)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x60000b3 = function op_Equality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000a8)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000b4 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000a8)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000b5_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000b5 = asm.x60000b5_;
    };;
    asm.x60000b5 = function (arg0,arg1)
    {
        (asm.x60000b5_init.apply)(this,arguments);
        return (asm.x60000b5.apply)(this,arguments);
    };;
    asm.x60000b5_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x60000b4)(arg0,cast_class(arg1,t0));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000b6 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    asm.x60000b7 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000b6)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000b8 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000b9_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x60000b9 = asm.x60000b9_;
    };;
    asm.x60000b9 = function ()
    {
        (asm.x60000b9_init.apply)(this,arguments);
        return (asm.x60000b9.apply)(this,arguments);
    };;
    asm.x60000b9_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = new_string("");
        /* IL_0A: ret */
        return ;
    };
    asm.x60000bb = function get_MemberName(arg0)
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
    asm.x60000ba = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(arg0);
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
    asm.x60000bd = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000be_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x60000be = asm.x60000be_;
    };;
    asm.x60000be = function (arg0)
    {
        (asm.x60000be_init.apply)(this,arguments);
        return (asm.x60000be.apply)(this,arguments);
    };;
    asm.x60000be_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000bf_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x60000bf = asm.x60000bf_;
    };;
    asm.x60000bf = function (arg0)
    {
        (asm.x60000bf_init.apply)(this,arguments);
        return (asm.x60000bf.apply)(this,arguments);
    };;
    asm.x60000bf_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000c0 = function ToString(arg0)
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
                loc2 = (asm0.x60000ac)(new_string(loc3[0].toString()),loc2);
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
    asm.x60000c2 = 
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
    asm.UInt64_RightShift = asm.x60000c2;
    asm.x60000c3 = 
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
    asm.UInt64_Division = asm.x60000c3;
    asm.x60000c4 = 
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
    asm.XInt64_Multiplication = asm.x60000c4;
    asm.x60000c5 = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x60000c5;
    asm.x60000c6 = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x60000c6;
    asm.x60000c7 = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x60000c7;
    asm.x60000c8 = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x60000c8;
    asm.x60000c9 = 
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
    asm.UInt64_Modulus = asm.x60000c9;
    asm.x60000ca = function Equals(arg0,arg1)
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
    asm.x60000cb = function GetHashCode(arg0)
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
    asm.x60000cd_init = function ()
    {
        (((asm0)["System.UIntPtr"])().init)();
        asm.x60000cd = asm.x60000cd_;
    };;
    asm.x60000cd = function (arg0)
    {
        (asm.x60000cd_init.apply)(this,arguments);
        return (asm.x60000cd.apply)(this,arguments);
    };;
    asm.x60000cd_ = function ToString(arg0)
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
        loc0 = (asm0.x600003e)({
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
                $$Boolean.Interfaces = [  ];
                $$Boolean.IsInst = function (t) { return typeof t == 'number'; };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = true;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000013;
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
                Byte.Interfaces = [  ];
                Byte.IsInst = function (t) { return typeof t == 'number'; };
                Byte.IsValueType = true;
                Byte.IsPrimitive = true;
                Byte.IsNullable = false;
                Byte.ArrayType = Uint8Array;
                Byte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000021;
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
                Char.Interfaces = [  ];
                Char.IsInst = function (t) { return typeof t == 'number'; };
                Char.IsValueType = true;
                Char.IsPrimitive = true;
                Char.IsNullable = false;
                Char.ArrayType = Uint16Array;
                Char.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000022;
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
                Double.Interfaces = [  ];
                Double.IsInst = function (t) { return typeof t == 'number'; };
                Double.IsValueType = true;
                Double.IsPrimitive = true;
                Double.IsNullable = false;
                Double.ArrayType = Float64Array;
                Double.prototype.vtable = {
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
            Double.prototype = {
                
            };
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
                Delegate.Interfaces = [  ];
                Delegate.IsInst = function (t) { return t instanceof Delegate ? t : null; };
                Delegate.IsValueType = false;
                Delegate.IsPrimitive = false;
                Delegate.IsNullable = false;
                Delegate.ArrayType = Array;
                Delegate.prototype._methodPtr = null;
                Delegate.prototype._target = null;
                Delegate.prototype.vtable = {
                    'asm0.x600002d': function ()
                    {
                        return asm0.x600002d;
                    },
                    'asm0.x600002e': function ()
                    {
                        return asm0.x600002e;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600002f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000032;
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
                    'asm0.x600002e': function ()
                    {
                        return asm0.x6000035;
                    },
                    'asm0.x600002d': function ()
                    {
                        return asm0.x6000036;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600002f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000032;
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
                    'asm0.x6000039': function ()
                    {
                        return asm0.x6000039;
                    },
                    'asm0.x600002e': function ()
                    {
                        return asm0.x6000035;
                    },
                    'asm0.x600002d': function ()
                    {
                        return asm0.x6000036;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600002f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000032;
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
                ICloneable.Interfaces = [  ];
                ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1 ? t : null; };
                ICloneable.IsValueType = false;
                ICloneable.IsPrimitive = false;
                ICloneable.IsNullable = false;
                ICloneable.ArrayType = Array;
                ICloneable.prototype.vtable = {
                    'asm0.x600003a': function ()
                    {
                        return asm0.x600003a;
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
                IDisposable.Interfaces = [  ];
                IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1 ? t : null; };
                IDisposable.IsValueType = false;
                IDisposable.IsPrimitive = false;
                IDisposable.IsNullable = false;
                IDisposable.ArrayType = Array;
                IDisposable.prototype.vtable = {
                    'asm0.x600003b': function ()
                    {
                        return asm0.x600003b;
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
                Int16.Interfaces = [  ];
                Int16.IsInst = function (t) { return typeof t == 'number'; };
                Int16.IsValueType = true;
                Int16.IsPrimitive = true;
                Int16.IsNullable = false;
                Int16.ArrayType = Int16Array;
                Int16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600003c;
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
                Int32.Interfaces = [  ];
                Int32.IsInst = function (t) { return typeof t == 'number'; };
                Int32.IsValueType = true;
                Int32.IsPrimitive = true;
                Int32.IsNullable = false;
                Int32.ArrayType = Int32Array;
                Int32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600003d;
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
                IntPtr.Interfaces = [  ];
                IntPtr.IsInst = function (t) { return typeof t == 'number'; };
                IntPtr.IsValueType = true;
                IntPtr.IsPrimitive = true;
                IntPtr.IsNullable = false;
                IntPtr.ArrayType = Array;
                IntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600003f;
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
                SByte.Interfaces = [  ];
                SByte.IsInst = function (t) { return typeof t == 'number'; };
                SByte.IsValueType = true;
                SByte.IsPrimitive = true;
                SByte.IsNullable = false;
                SByte.ArrayType = Int8Array;
                SByte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000043;
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
                Single.Interfaces = [  ];
                Single.IsInst = function (t) { return typeof t == 'number'; };
                Single.IsValueType = true;
                Single.IsPrimitive = true;
                Single.IsNullable = false;
                Single.ArrayType = Float32Array;
                Single.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000044;
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
                IEnumerator.Interfaces = [ ((asm0)["System.IDisposable"])() ];
                IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1 ? t : null; };
                IEnumerator.IsValueType = false;
                IEnumerator.IsPrimitive = false;
                IEnumerator.IsNullable = false;
                IEnumerator.ArrayType = Array;
                IEnumerator.prototype.vtable = {
                    'asm0.x6000046': function ()
                    {
                        return asm0.x6000046;
                    },
                    'asm0.x6000047': function ()
                    {
                        return asm0.x6000047;
                    },
                    'asm0.x6000048': function ()
                    {
                        return asm0.x6000048;
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
                IEnumerator_1.Interfaces = [ ((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
                IEnumerator_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator_1) != -1 ? t : null; };
                IEnumerator_1.IsValueType = false;
                IEnumerator_1.IsPrimitive = false;
                IEnumerator_1.IsNullable = false;
                IEnumerator_1.ArrayType = Array;
                IEnumerator_1.GenericArguments = [ T ];
                IEnumerator_1.prototype.vtable = {
                    'asm0.x6000049': function ()
                    {
                        return asm0.x6000049;
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
                IEnumerable.Interfaces = [  ];
                IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1 ? t : null; };
                IEnumerable.IsValueType = false;
                IEnumerable.IsPrimitive = false;
                IEnumerable.IsNullable = false;
                IEnumerable.ArrayType = Array;
                IEnumerable.prototype.vtable = {
                    'asm0.x600004a': function ()
                    {
                        return asm0.x600004a;
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
                IEnumerable_1.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                IEnumerable_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable_1) != -1 ? t : null; };
                IEnumerable_1.IsValueType = false;
                IEnumerable_1.IsPrimitive = false;
                IEnumerable_1.IsNullable = false;
                IEnumerable_1.ArrayType = Array;
                IEnumerable_1.GenericArguments = [ T ];
                IEnumerable_1.prototype.vtable = {
                    'asm0.x600004b': function ()
                    {
                        return asm0.x600004b;
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
                        return asm0.x6000052;
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
                NotImplementedException.Interfaces = [  ];
                NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException ? t : null; };
                NotImplementedException.IsValueType = false;
                NotImplementedException.IsPrimitive = false;
                NotImplementedException.IsNullable = false;
                NotImplementedException.ArrayType = Array;
                NotImplementedException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000052;
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
                NotSupportedException.Interfaces = [  ];
                NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException ? t : null; };
                NotSupportedException.IsValueType = false;
                NotSupportedException.IsPrimitive = false;
                NotSupportedException.IsNullable = false;
                NotSupportedException.ArrayType = Array;
                NotSupportedException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000052;
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
                InvalidCastException.Interfaces = [  ];
                InvalidCastException.IsInst = function (t) { return t instanceof InvalidCastException ? t : null; };
                InvalidCastException.IsValueType = false;
                InvalidCastException.IsPrimitive = false;
                InvalidCastException.IsNullable = false;
                InvalidCastException.ArrayType = Array;
                InvalidCastException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000052;
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
                InvalidOperationException.Interfaces = [  ];
                InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException ? t : null; };
                InvalidOperationException.IsValueType = false;
                InvalidOperationException.IsPrimitive = false;
                InvalidOperationException.IsNullable = false;
                InvalidOperationException.ArrayType = Array;
                InvalidOperationException.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000052;
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
                Int64.Interfaces = [  ];
                Int64.IsInst = function (t) { return typeof t == 'number'; };
                Int64.IsValueType = true;
                Int64.IsPrimitive = true;
                Int64.IsNullable = false;
                Int64.ArrayType = Array;
                Int64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600005d;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600005e;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600005f;
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
                EventArgs.Interfaces = [  ];
                EventArgs.IsInst = function (t) { return t instanceof EventArgs ? t : null; };
                EventArgs.IsValueType = false;
                EventArgs.IsPrimitive = false;
                EventArgs.IsNullable = false;
                EventArgs.ArrayType = Array;
                (asm0.x6000083)();
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
                    'asm0.x6000085': function ()
                    {
                        return asm0.x6000085;
                    },
                    'asm0.x600002e': function ()
                    {
                        return asm0.x6000035;
                    },
                    'asm0.x600002d': function ()
                    {
                        return asm0.x6000036;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600002f;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000032;
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
                Array.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                Array.IsInst = function (t) { return t instanceof Array ? t : null; };
                Array.IsValueType = false;
                Array.IsPrimitive = false;
                Array.IsNullable = false;
                Array.ArrayType = Array;
                Array.prototype.type = null;
                Array.prototype.jsarr = null;
                Array.prototype.vtable = {
                    'asm0.x600008a': function ()
                    {
                        return asm0.x600008a;
                    },
                    'asm0.x600008b': function ()
                    {
                        return asm0.x600008b;
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
                    'x600004a': function ()
                    {
                        return asm0.x600008a;
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
                    'asm0.x600008e': function ()
                    {
                        return asm0.x600008e;
                    },
                    'asm0.x600008b': function ()
                    {
                        return asm0.x600008f;
                    },
                    'asm0.x600008a': function ()
                    {
                        return asm0.x600008a;
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
                    'x600004b': function ()
                    {
                        return asm0.x600008e;
                    }
                };
                (Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = {
                    'x600004a': function ()
                    {
                        return asm0.x600008a;
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
                    'asm0.x6000092': function ()
                    {
                        return asm0.x6000092;
                    },
                    'asm0.x6000093': function ()
                    {
                        return asm0.x6000093;
                    },
                    'asm0.x6000094': function ()
                    {
                        return asm0.x6000094;
                    },
                    'asm0.x6000095': function ()
                    {
                        return asm0.x6000095;
                    },
                    'asm0.x6000096': function ()
                    {
                        return asm0.x6000096;
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
                    'x6000049': function ()
                    {
                        return asm0.x6000092;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.Collections.IEnumerator"])()] = {
                    'x6000046': function ()
                    {
                        return asm0.x6000094;
                    },
                    'x6000047': function ()
                    {
                        return asm0.x6000093;
                    },
                    'x6000048': function ()
                    {
                        return asm0.x6000095;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.IDisposable"])()] = {
                    'x600003b': function ()
                    {
                        return asm0.x6000096;
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
                        return asm0.x600009c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600009e;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a1;
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
                $$String.Interfaces = [  ];
                $$String.IsInst = function (t) { return t instanceof $$String ? t : null; };
                $$String.IsValueType = false;
                $$String.IsPrimitive = false;
                $$String.IsNullable = false;
                $$String.ArrayType = Array;
                (asm0.x60000b9)();
                $$String.prototype.jsstr = null;
                $$String.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000b1;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000b5;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000b7;
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
                Type.Interfaces = [  ];
                Type.IsInst = function (t) { return t instanceof Type ? t : null; };
                Type.IsValueType = false;
                Type.IsPrimitive = false;
                Type.IsNullable = false;
                Type.ArrayType = Array;
                Type.prototype.vtable = {
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
            Type.prototype = new (((asm0)["System.Object"])())();
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
                UInt16.Interfaces = [  ];
                UInt16.IsInst = function (t) { return typeof t == 'number'; };
                UInt16.IsValueType = true;
                UInt16.IsPrimitive = true;
                UInt16.IsNullable = false;
                UInt16.ArrayType = Uint16Array;
                UInt16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000be;
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
                UInt32.Interfaces = [  ];
                UInt32.IsInst = function (t) { return typeof t == 'number'; };
                UInt32.IsValueType = true;
                UInt32.IsPrimitive = true;
                UInt32.IsNullable = false;
                UInt32.ArrayType = Uint32Array;
                UInt32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000bf;
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
                UInt64.Interfaces = [  ];
                UInt64.IsInst = function (t) { return typeof t == 'number'; };
                UInt64.IsValueType = true;
                UInt64.IsPrimitive = true;
                UInt64.IsNullable = false;
                UInt64.ArrayType = Array;
                UInt64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000c0;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000ca;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000cb;
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
                UIntPtr.Interfaces = [  ];
                UIntPtr.IsInst = function (t) { return typeof t == 'number'; };
                UIntPtr.IsValueType = true;
                UIntPtr.IsPrimitive = true;
                UIntPtr.IsNullable = false;
                UIntPtr.ArrayType = Array;
                UIntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000cd;
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
        (((asm0)["System.UInt64"])().init)();
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
        t0 = ((asm0)["System.UInt64"])();
        t1 = ((asm0)["System.Double"])();
        /* IL_00: ldc.i4.1 */
        /* IL_01: conv.i8 */
        /* IL_02: box System.UInt64*/
        /* IL_07: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_0C: ldc.i4.2 */
        /* IL_0D: conv.i8 */
        /* IL_0E: box System.UInt64*/
        /* IL_13: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_18: ldc.i4.3 */
        /* IL_19: conv.i8 */
        /* IL_1A: box System.UInt64*/
        /* IL_1F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((3|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_24: ldc.i4.4 */
        /* IL_25: conv.i8 */
        /* IL_26: box System.UInt64*/
        /* IL_2B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_30: ldc.i4.5 */
        /* IL_31: conv.i8 */
        /* IL_32: box System.UInt64*/
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((5|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3C: ldc.i4.6 */
        /* IL_3D: conv.i8 */
        /* IL_3E: box System.UInt64*/
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((6|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_48: ldc.i4.7 */
        /* IL_49: conv.i8 */
        /* IL_4A: box System.UInt64*/
        /* IL_4F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_54: ldc.i4.8 */
        /* IL_55: conv.i8 */
        /* IL_56: box System.UInt64*/
        /* IL_5B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_60: ldc.i4.s 9*/
        /* IL_62: conv.i8 */
        /* IL_63: box System.UInt64*/
        /* IL_68: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6D: ldc.i4.s 10*/
        /* IL_6F: conv.i8 */
        /* IL_70: box System.UInt64*/
        /* IL_75: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((10|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7A: ldc.i4.s 11*/
        /* IL_7C: conv.i8 */
        /* IL_7D: box System.UInt64*/
        /* IL_82: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((11|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_87: ldc.i4.s 12*/
        /* IL_89: conv.i8 */
        /* IL_8A: box System.UInt64*/
        /* IL_8F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((12|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_94: ldc.i4.s 13*/
        /* IL_96: conv.i8 */
        /* IL_97: box System.UInt64*/
        /* IL_9C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((13|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A1: ldc.i4.s 14*/
        /* IL_A3: conv.i8 */
        /* IL_A4: box System.UInt64*/
        /* IL_A9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((14|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AE: ldc.i4.s 15*/
        /* IL_B0: conv.i8 */
        /* IL_B1: box System.UInt64*/
        /* IL_B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BB: ldc.i4.s 16*/
        /* IL_BD: conv.i8 */
        /* IL_BE: box System.UInt64*/
        /* IL_C3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C8: ldc.i4.s 17*/
        /* IL_CA: conv.i8 */
        /* IL_CB: box System.UInt64*/
        /* IL_D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D5: ldc.i4.s 18*/
        /* IL_D7: conv.i8 */
        /* IL_D8: box System.UInt64*/
        /* IL_DD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((18|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E2: ldc.i4.s 19*/
        /* IL_E4: conv.i8 */
        /* IL_E5: box System.UInt64*/
        /* IL_EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((19|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EF: ldc.i4.s 20*/
        /* IL_F1: conv.i8 */
        /* IL_F2: box System.UInt64*/
        /* IL_F7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((20|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_FC: ldc.i4.s 21*/
        /* IL_FE: conv.i8 */
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((21|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_109: ldc.i4.s 15*/
        /* IL_10B: conv.i8 */
        /* IL_10C: box System.UInt64*/
        /* IL_111: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_116: ldc.i4 255*/
        /* IL_11B: conv.i8 */
        /* IL_11C: box System.UInt64*/
        /* IL_121: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((255|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_126: ldc.i4 4095*/
        /* IL_12B: conv.i8 */
        /* IL_12C: box System.UInt64*/
        /* IL_131: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4095|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_136: ldc.i4 65535*/
        /* IL_13B: conv.i8 */
        /* IL_13C: box System.UInt64*/
        /* IL_141: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65535|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_146: ldc.i4 1048575*/
        /* IL_14B: conv.i8 */
        /* IL_14C: box System.UInt64*/
        /* IL_151: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1048575|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_156: ldc.i4 16777215*/
        /* IL_15B: conv.i8 */
        /* IL_15C: box System.UInt64*/
        /* IL_161: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16777215|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_166: ldc.i4 268435455*/
        /* IL_16B: conv.i8 */
        /* IL_16C: box System.UInt64*/
        /* IL_171: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((268435455|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_176: ldc.i4.m1 */
        /* IL_177: conv.u8 */
        /* IL_178: box System.UInt64*/
        /* IL_17D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_u8((-1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_182: ldc.i8 68719476735*/
        /* IL_18B: box System.UInt64*/
        /* IL_190: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_195: ldc.i8 1099511627775*/
        /* IL_19E: box System.UInt64*/
        /* IL_1A3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1A8: ldc.i8 17592186044415*/
        /* IL_1B1: box System.UInt64*/
        /* IL_1B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1BB: ldc.i8 281474976710655*/
        /* IL_1C4: box System.UInt64*/
        /* IL_1C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1CE: ldc.i8 4503599627370495*/
        /* IL_1D7: box System.UInt64*/
        /* IL_1DC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1E1: ldc.i8 72057594037927935*/
        /* IL_1EA: box System.UInt64*/
        /* IL_1EF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1F4: ldc.i4.0 */
        /* IL_1F5: conv.i8 */
        /* IL_1F6: box System.UInt64*/
        /* IL_1FB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_200: ldc.i4.1 */
        /* IL_201: conv.i8 */
        /* IL_202: box System.UInt64*/
        /* IL_207: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_20C: ldc.i4.s 16*/
        /* IL_20E: conv.i8 */
        /* IL_20F: box System.UInt64*/
        /* IL_214: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_219: ldc.i4 257*/
        /* IL_21E: conv.i8 */
        /* IL_21F: box System.UInt64*/
        /* IL_224: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((257|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_229: ldc.i4 4112*/
        /* IL_22E: conv.i8 */
        /* IL_22F: box System.UInt64*/
        /* IL_234: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((4112|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_239: ldc.i4 65793*/
        /* IL_23E: conv.i8 */
        /* IL_23F: box System.UInt64*/
        /* IL_244: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((65793|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_249: ldc.i4 1052688*/
        /* IL_24E: conv.i8 */
        /* IL_24F: box System.UInt64*/
        /* IL_254: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((1052688|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_259: ldc.i4 16843009*/
        /* IL_25E: conv.i8 */
        /* IL_25F: box System.UInt64*/
        /* IL_264: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((16843009|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_269: ldc.i4 269488144*/
        /* IL_26E: conv.i8 */
        /* IL_26F: box System.UInt64*/
        /* IL_274: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': conv_i8((269488144|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_279: ldc.i8 4311810305*/
        /* IL_282: box System.UInt64*/
        /* IL_287: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x1 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_28C: ldc.i8 68988964880*/
        /* IL_295: box System.UInt64*/
        /* IL_29A: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x10101010,0x10 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_29F: ldc.i8 1103823438081*/
        /* IL_2A8: box System.UInt64*/
        /* IL_2AD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x101 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2B2: ldc.i8 17661175009296*/
        /* IL_2BB: box System.UInt64*/
        /* IL_2C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x10101010,0x1010 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_2C5: ldc.i8 282578800148737*/
        /* IL_2CE: box System.UInt64*/
        /* IL_2D3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': new Uint32Array([ 0x1010101,0x10101 ]),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_389: ldc.i8 68719476735*/
        /* IL_392: ldc.i4.1 */
        /* IL_393: conv.i8 */
        /* IL_394: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_399: box System.UInt64*/
        /* IL_39E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3A3: ldc.i8 1099511627775*/
        /* IL_3AC: ldc.i4.1 */
        /* IL_3AD: conv.i8 */
        /* IL_3AE: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3B3: box System.UInt64*/
        /* IL_3B8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3BD: ldc.i8 17592186044415*/
        /* IL_3C6: ldc.i4.1 */
        /* IL_3C7: conv.i8 */
        /* IL_3C8: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3CD: box System.UInt64*/
        /* IL_3D2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3D7: ldc.i8 281474976710655*/
        /* IL_3E0: ldc.i4.1 */
        /* IL_3E1: conv.i8 */
        /* IL_3E2: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_3E7: box System.UInt64*/
        /* IL_3EC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_3F1: ldc.i8 4503599627370495*/
        /* IL_3FA: ldc.i4.1 */
        /* IL_3FB: conv.i8 */
        /* IL_3FC: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_401: box System.UInt64*/
        /* IL_406: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_40B: ldc.i8 72057594037927935*/
        /* IL_414: ldc.i4.1 */
        /* IL_415: conv.i8 */
        /* IL_416: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_41B: box System.UInt64*/
        /* IL_420: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_4D6: ldc.i8 68719476735*/
        /* IL_4DF: ldc.i4.2 */
        /* IL_4E0: conv.i8 */
        /* IL_4E1: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_4E6: box System.UInt64*/
        /* IL_4EB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_4F0: ldc.i8 1099511627775*/
        /* IL_4F9: ldc.i4.2 */
        /* IL_4FA: conv.i8 */
        /* IL_4FB: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_500: box System.UInt64*/
        /* IL_505: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_50A: ldc.i8 17592186044415*/
        /* IL_513: ldc.i4.2 */
        /* IL_514: conv.i8 */
        /* IL_515: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_51A: box System.UInt64*/
        /* IL_51F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_524: ldc.i8 281474976710655*/
        /* IL_52D: ldc.i4.2 */
        /* IL_52E: conv.i8 */
        /* IL_52F: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_534: box System.UInt64*/
        /* IL_539: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_53E: ldc.i8 4503599627370495*/
        /* IL_547: ldc.i4.2 */
        /* IL_548: conv.i8 */
        /* IL_549: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_54E: box System.UInt64*/
        /* IL_553: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_558: ldc.i8 72057594037927935*/
        /* IL_561: ldc.i4.2 */
        /* IL_562: conv.i8 */
        /* IL_563: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_568: box System.UInt64*/
        /* IL_56D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_638: ldc.i8 68719476735*/
        /* IL_641: ldc.i4 269488144*/
        /* IL_646: conv.i8 */
        /* IL_647: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_64C: box System.UInt64*/
        /* IL_651: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_656: ldc.i8 1099511627775*/
        /* IL_65F: ldc.i8 4311810305*/
        /* IL_668: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_66D: box System.UInt64*/
        /* IL_672: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_677: ldc.i8 17592186044415*/
        /* IL_680: ldc.i8 68988964880*/
        /* IL_689: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_68E: box System.UInt64*/
        /* IL_693: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_698: ldc.i8 281474976710655*/
        /* IL_6A1: ldc.i8 1103823438081*/
        /* IL_6AA: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6AF: box System.UInt64*/
        /* IL_6B4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6B9: ldc.i8 4503599627370495*/
        /* IL_6C2: ldc.i8 17661175009296*/
        /* IL_6CB: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6D0: box System.UInt64*/
        /* IL_6D5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_6DA: ldc.i8 72057594037927935*/
        /* IL_6E3: ldc.i8 282578800148737*/
        /* IL_6EC: call UInt64 Add(System.UInt64, System.UInt64)*/
        /* IL_6F1: box System.UInt64*/
        /* IL_6F6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000e)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_7AC: ldc.i8 68719476735*/
        /* IL_7B5: ldc.i4.1 */
        /* IL_7B6: conv.i8 */
        /* IL_7B7: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7BC: box System.UInt64*/
        /* IL_7C1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7C6: ldc.i8 1099511627775*/
        /* IL_7CF: ldc.i4.1 */
        /* IL_7D0: conv.i8 */
        /* IL_7D1: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7D6: box System.UInt64*/
        /* IL_7DB: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7E0: ldc.i8 17592186044415*/
        /* IL_7E9: ldc.i4.1 */
        /* IL_7EA: conv.i8 */
        /* IL_7EB: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_7F0: box System.UInt64*/
        /* IL_7F5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_7FA: ldc.i8 281474976710655*/
        /* IL_803: ldc.i4.1 */
        /* IL_804: conv.i8 */
        /* IL_805: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_80A: box System.UInt64*/
        /* IL_80F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_814: ldc.i8 4503599627370495*/
        /* IL_81D: ldc.i4.1 */
        /* IL_81E: conv.i8 */
        /* IL_81F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_824: box System.UInt64*/
        /* IL_829: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_82E: ldc.i8 72057594037927935*/
        /* IL_837: ldc.i4.1 */
        /* IL_838: conv.i8 */
        /* IL_839: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_83E: box System.UInt64*/
        /* IL_843: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_8F9: ldc.i8 68719476735*/
        /* IL_902: ldc.i4.2 */
        /* IL_903: conv.i8 */
        /* IL_904: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_909: box System.UInt64*/
        /* IL_90E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_913: ldc.i8 1099511627775*/
        /* IL_91C: ldc.i4.2 */
        /* IL_91D: conv.i8 */
        /* IL_91E: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_923: box System.UInt64*/
        /* IL_928: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_92D: ldc.i8 17592186044415*/
        /* IL_936: ldc.i4.2 */
        /* IL_937: conv.i8 */
        /* IL_938: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_93D: box System.UInt64*/
        /* IL_942: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_947: ldc.i8 281474976710655*/
        /* IL_950: ldc.i4.2 */
        /* IL_951: conv.i8 */
        /* IL_952: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_957: box System.UInt64*/
        /* IL_95C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_961: ldc.i8 4503599627370495*/
        /* IL_96A: ldc.i4.2 */
        /* IL_96B: conv.i8 */
        /* IL_96C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_971: box System.UInt64*/
        /* IL_976: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_97B: ldc.i8 72057594037927935*/
        /* IL_984: ldc.i4.2 */
        /* IL_985: conv.i8 */
        /* IL_986: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_98B: box System.UInt64*/
        /* IL_990: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_A5B: ldc.i8 68719476735*/
        /* IL_A64: ldc.i4 269488144*/
        /* IL_A69: conv.i8 */
        /* IL_A6A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A6F: box System.UInt64*/
        /* IL_A74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A79: ldc.i8 1099511627775*/
        /* IL_A82: ldc.i8 4311810305*/
        /* IL_A8B: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_A90: box System.UInt64*/
        /* IL_A95: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_A9A: ldc.i8 17592186044415*/
        /* IL_AA3: ldc.i8 68988964880*/
        /* IL_AAC: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AB1: box System.UInt64*/
        /* IL_AB6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_ABB: ldc.i8 281474976710655*/
        /* IL_AC4: ldc.i8 1103823438081*/
        /* IL_ACD: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AD2: box System.UInt64*/
        /* IL_AD7: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_ADC: ldc.i8 4503599627370495*/
        /* IL_AE5: ldc.i8 17661175009296*/
        /* IL_AEE: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_AF3: box System.UInt64*/
        /* IL_AF8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AFD: ldc.i8 72057594037927935*/
        /* IL_B06: ldc.i8 282578800148737*/
        /* IL_B0F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        /* IL_B14: box System.UInt64*/
        /* IL_B19: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000f)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_BCF: ldc.i8 68719476735*/
        /* IL_BD8: ldc.i4.1 */
        /* IL_BD9: conv.i8 */
        /* IL_BDA: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BDF: box System.UInt64*/
        /* IL_BE4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_BE9: ldc.i8 1099511627775*/
        /* IL_BF2: ldc.i4.1 */
        /* IL_BF3: conv.i8 */
        /* IL_BF4: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_BF9: box System.UInt64*/
        /* IL_BFE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C03: ldc.i8 17592186044415*/
        /* IL_C0C: ldc.i4.1 */
        /* IL_C0D: conv.i8 */
        /* IL_C0E: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C13: box System.UInt64*/
        /* IL_C18: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C1D: ldc.i8 281474976710655*/
        /* IL_C26: ldc.i4.1 */
        /* IL_C27: conv.i8 */
        /* IL_C28: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C2D: box System.UInt64*/
        /* IL_C32: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C37: ldc.i8 4503599627370495*/
        /* IL_C40: ldc.i4.1 */
        /* IL_C41: conv.i8 */
        /* IL_C42: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C47: box System.UInt64*/
        /* IL_C4C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C51: ldc.i8 72057594037927935*/
        /* IL_C5A: ldc.i4.1 */
        /* IL_C5B: conv.i8 */
        /* IL_C5C: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_C61: box System.UInt64*/
        /* IL_C66: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_D1C: ldc.i8 68719476735*/
        /* IL_D25: ldc.i4.2 */
        /* IL_D26: conv.i8 */
        /* IL_D27: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D2C: box System.UInt64*/
        /* IL_D31: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D36: ldc.i8 1099511627775*/
        /* IL_D3F: ldc.i4.2 */
        /* IL_D40: conv.i8 */
        /* IL_D41: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D46: box System.UInt64*/
        /* IL_D4B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D50: ldc.i8 17592186044415*/
        /* IL_D59: ldc.i4.2 */
        /* IL_D5A: conv.i8 */
        /* IL_D5B: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D60: box System.UInt64*/
        /* IL_D65: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D6A: ldc.i8 281474976710655*/
        /* IL_D73: ldc.i4.2 */
        /* IL_D74: conv.i8 */
        /* IL_D75: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D7A: box System.UInt64*/
        /* IL_D7F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D84: ldc.i8 4503599627370495*/
        /* IL_D8D: ldc.i4.2 */
        /* IL_D8E: conv.i8 */
        /* IL_D8F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_D94: box System.UInt64*/
        /* IL_D99: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D9E: ldc.i8 72057594037927935*/
        /* IL_DA7: ldc.i4.2 */
        /* IL_DA8: conv.i8 */
        /* IL_DA9: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_DAE: box System.UInt64*/
        /* IL_DB3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_E7E: ldc.i8 68719476735*/
        /* IL_E87: ldc.i4 269488144*/
        /* IL_E8C: conv.i8 */
        /* IL_E8D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_E92: box System.UInt64*/
        /* IL_E97: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E9C: ldc.i8 1099511627775*/
        /* IL_EA5: ldc.i8 4311810305*/
        /* IL_EAE: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_EB3: box System.UInt64*/
        /* IL_EB8: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EBD: ldc.i8 17592186044415*/
        /* IL_EC6: ldc.i8 68988964880*/
        /* IL_ECF: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_ED4: box System.UInt64*/
        /* IL_ED9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EDE: ldc.i8 281474976710655*/
        /* IL_EE7: ldc.i8 1103823438081*/
        /* IL_EF0: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_EF5: box System.UInt64*/
        /* IL_EFA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_EFF: ldc.i8 4503599627370495*/
        /* IL_F08: ldc.i8 17661175009296*/
        /* IL_F11: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_F16: box System.UInt64*/
        /* IL_F1B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F20: ldc.i8 72057594037927935*/
        /* IL_F29: ldc.i8 282578800148737*/
        /* IL_F32: call UInt64 Mul(System.UInt64, System.UInt64)*/
        /* IL_F37: box System.UInt64*/
        /* IL_F3C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000010)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_FFC: ldc.i8 68719476735*/
        /* IL_1005: ldc.i4.1 */
        /* IL_1006: conv.i8 */
        /* IL_1007: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_100C: box System.UInt64*/
        /* IL_1011: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1016: ldc.i8 1099511627775*/
        /* IL_101F: ldc.i4.1 */
        /* IL_1020: conv.i8 */
        /* IL_1021: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1026: box System.UInt64*/
        /* IL_102B: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1030: ldc.i8 17592186044415*/
        /* IL_1039: ldc.i4.1 */
        /* IL_103A: conv.i8 */
        /* IL_103B: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1040: box System.UInt64*/
        /* IL_1045: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_104A: ldc.i8 281474976710655*/
        /* IL_1053: ldc.i4.1 */
        /* IL_1054: conv.i8 */
        /* IL_1055: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_105A: box System.UInt64*/
        /* IL_105F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1064: ldc.i8 4503599627370495*/
        /* IL_106D: ldc.i4.1 */
        /* IL_106E: conv.i8 */
        /* IL_106F: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1074: box System.UInt64*/
        /* IL_1079: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_107E: ldc.i8 72057594037927935*/
        /* IL_1087: ldc.i4.1 */
        /* IL_1088: conv.i8 */
        /* IL_1089: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_108E: box System.UInt64*/
        /* IL_1093: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_1153: ldc.i8 68719476735*/
        /* IL_115C: ldc.i4.2 */
        /* IL_115D: conv.i8 */
        /* IL_115E: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1163: box System.UInt64*/
        /* IL_1168: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_116D: ldc.i8 1099511627775*/
        /* IL_1176: ldc.i4.2 */
        /* IL_1177: conv.i8 */
        /* IL_1178: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_117D: box System.UInt64*/
        /* IL_1182: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1187: ldc.i8 17592186044415*/
        /* IL_1190: ldc.i4.2 */
        /* IL_1191: conv.i8 */
        /* IL_1192: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1197: box System.UInt64*/
        /* IL_119C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11A1: ldc.i8 281474976710655*/
        /* IL_11AA: ldc.i4.2 */
        /* IL_11AB: conv.i8 */
        /* IL_11AC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11B1: box System.UInt64*/
        /* IL_11B6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11BB: ldc.i8 4503599627370495*/
        /* IL_11C4: ldc.i4.2 */
        /* IL_11C5: conv.i8 */
        /* IL_11C6: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11CB: box System.UInt64*/
        /* IL_11D0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11D5: ldc.i8 72057594037927935*/
        /* IL_11DE: ldc.i4.2 */
        /* IL_11DF: conv.i8 */
        /* IL_11E0: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_11E5: box System.UInt64*/
        /* IL_11EA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_12AB: ldc.i8 68719476735*/
        /* IL_12B4: ldc.i4 269488144*/
        /* IL_12B9: conv.i8 */
        /* IL_12BA: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_12BF: box System.UInt64*/
        /* IL_12C4: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12C9: ldc.i8 1099511627775*/
        /* IL_12D2: ldc.i8 4311810305*/
        /* IL_12DB: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_12E0: box System.UInt64*/
        /* IL_12E5: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_12EA: ldc.i8 17592186044415*/
        /* IL_12F3: ldc.i8 68988964880*/
        /* IL_12FC: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1301: box System.UInt64*/
        /* IL_1306: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_130B: ldc.i8 281474976710655*/
        /* IL_1314: ldc.i8 1103823438081*/
        /* IL_131D: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1322: box System.UInt64*/
        /* IL_1327: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_132C: ldc.i8 4503599627370495*/
        /* IL_1335: ldc.i8 17661175009296*/
        /* IL_133E: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1343: box System.UInt64*/
        /* IL_1348: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_134D: ldc.i8 72057594037927935*/
        /* IL_1356: ldc.i8 282578800148737*/
        /* IL_135F: call UInt64 Div(System.UInt64, System.UInt64)*/
        /* IL_1364: box System.UInt64*/
        /* IL_1369: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000011)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_1429: ldc.i8 68719476735*/
        /* IL_1432: ldc.i4.1 */
        /* IL_1433: conv.i8 */
        /* IL_1434: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1439: box System.UInt64*/
        /* IL_143E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1443: ldc.i8 1099511627775*/
        /* IL_144C: ldc.i4.1 */
        /* IL_144D: conv.i8 */
        /* IL_144E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1453: box System.UInt64*/
        /* IL_1458: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_145D: ldc.i8 17592186044415*/
        /* IL_1466: ldc.i4.1 */
        /* IL_1467: conv.i8 */
        /* IL_1468: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_146D: box System.UInt64*/
        /* IL_1472: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1477: ldc.i8 281474976710655*/
        /* IL_1480: ldc.i4.1 */
        /* IL_1481: conv.i8 */
        /* IL_1482: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1487: box System.UInt64*/
        /* IL_148C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1491: ldc.i8 4503599627370495*/
        /* IL_149A: ldc.i4.1 */
        /* IL_149B: conv.i8 */
        /* IL_149C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14A1: box System.UInt64*/
        /* IL_14A6: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14AB: ldc.i8 72057594037927935*/
        /* IL_14B4: ldc.i4.1 */
        /* IL_14B5: conv.i8 */
        /* IL_14B6: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_14BB: box System.UInt64*/
        /* IL_14C0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((1|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_1580: ldc.i8 68719476735*/
        /* IL_1589: ldc.i4.2 */
        /* IL_158A: conv.i8 */
        /* IL_158B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1590: box System.UInt64*/
        /* IL_1595: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_159A: ldc.i8 1099511627775*/
        /* IL_15A3: ldc.i4.2 */
        /* IL_15A4: conv.i8 */
        /* IL_15A5: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15AA: box System.UInt64*/
        /* IL_15AF: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15B4: ldc.i8 17592186044415*/
        /* IL_15BD: ldc.i4.2 */
        /* IL_15BE: conv.i8 */
        /* IL_15BF: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15C4: box System.UInt64*/
        /* IL_15C9: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15CE: ldc.i8 281474976710655*/
        /* IL_15D7: ldc.i4.2 */
        /* IL_15D8: conv.i8 */
        /* IL_15D9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15DE: box System.UInt64*/
        /* IL_15E3: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_15E8: ldc.i8 4503599627370495*/
        /* IL_15F1: ldc.i4.2 */
        /* IL_15F2: conv.i8 */
        /* IL_15F3: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_15F8: box System.UInt64*/
        /* IL_15FD: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1602: ldc.i8 72057594037927935*/
        /* IL_160B: ldc.i4.2 */
        /* IL_160C: conv.i8 */
        /* IL_160D: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1612: box System.UInt64*/
        /* IL_1617: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),conv_i8((2|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
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
            'vtable': t0.prototype.vtable
        });
        /* IL_16D8: ldc.i8 68719476735*/
        /* IL_16E1: ldc.i4 269488144*/
        /* IL_16E6: conv.i8 */
        /* IL_16E7: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_16EC: box System.UInt64*/
        /* IL_16F1: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xF ]),conv_i8((269488144|0))),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_16F6: ldc.i8 1099511627775*/
        /* IL_16FF: ldc.i8 4311810305*/
        /* IL_1708: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_170D: box System.UInt64*/
        /* IL_1712: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFF ]),new Uint32Array([ 0x1010101,0x1 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1717: ldc.i8 17592186044415*/
        /* IL_1720: ldc.i8 68988964880*/
        /* IL_1729: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_172E: box System.UInt64*/
        /* IL_1733: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFF ]),new Uint32Array([ 0x10101010,0x10 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1738: ldc.i8 281474976710655*/
        /* IL_1741: ldc.i8 1103823438081*/
        /* IL_174A: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_174F: box System.UInt64*/
        /* IL_1754: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFF ]),new Uint32Array([ 0x1010101,0x101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_1759: ldc.i8 4503599627370495*/
        /* IL_1762: ldc.i8 17661175009296*/
        /* IL_176B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1770: box System.UInt64*/
        /* IL_1775: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]),new Uint32Array([ 0x10101010,0x1010 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_177A: ldc.i8 72057594037927935*/
        /* IL_1783: ldc.i8 282578800148737*/
        /* IL_178C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        /* IL_1791: box System.UInt64*/
        /* IL_1796: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000012)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]),new Uint32Array([ 0x1010101,0x10101 ])),
            'type': t0,
            'vtable': t0.prototype.vtable
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
        (asm1.x6000013)(new Uint32Array([ 0x1010101,0x10101 ]));
        /* IL_17C2: ldc.i8 4503599627370496*/
        /* IL_17CB: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(new Uint32Array([ 0x0,0x100000 ]));
        /* IL_17D0: ldc.i8 72057594037927935*/
        /* IL_17D9: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]));
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
        (asm1.x6000014)(new Uint32Array([ 0x1010101,0x10101 ]));
        /* IL_1805: ldc.i8 4503599627370496*/
        /* IL_180E: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(new Uint32Array([ 0x0,0x100000 ]));
        /* IL_1813: ldc.i8 72057594037927935*/
        /* IL_181C: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]));
        /* IL_1821: ldc.i4 255*/
        /* IL_1826: conv.i8 */
        /* IL_1827: call Double Double(System.UInt64)*/
        /* IL_182C: box System.Double*/
        /* IL_1831: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(conv_i8((255|0))),
            'type': t1,
            'vtable': t1.prototype.vtable
        });
        /* IL_1836: ldc.i8 17592186044415*/
        /* IL_183F: call Double Double(System.UInt64)*/
        /* IL_1844: box System.Double*/
        /* IL_1849: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x600000d)(new Uint32Array([ 0xFFFFFFFF,0xFFF ])),
            'type': t1,
            'vtable': t1.prototype.vtable
        });
        /* IL_184E: ret */
        return ;
    };
    asm.x600000d = function Double(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: conv.r.un */
        /* IL_02: conv.r8 */
        /* IL_03: ret */
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
        /* IL_02: div.un */
        /* IL_03: ret */
        return (asm0.UInt64_Division)(arg0,arg1);
    };;
    asm.x6000012 = function Mod(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: rem.un */
        /* IL_03: ret */
        return (asm0.UInt64_Modulus)(arg0,arg1);
    };;
    asm.x6000013_init = function ()
    {
        (((asm0)["System.UInt64"])().init)();
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
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_07: box System.UInt64*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_18: box System.UInt64*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22: ldarg.0 */
        /* IL_23: ldc.i4.2 */
        /* IL_24: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_29: box System.UInt64*/
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_33: ldarg.0 */
        /* IL_34: ldc.i4.7 */
        /* IL_35: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_3A: box System.UInt64*/
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_44: ldarg.0 */
        /* IL_45: ldc.i4.8 */
        /* IL_46: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_4B: box System.UInt64*/
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_55: ldarg.0 */
        /* IL_56: ldc.i4.s 9*/
        /* IL_58: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_5D: box System.UInt64*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_67: ldarg.0 */
        /* IL_68: ldc.i4.s 15*/
        /* IL_6A: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_6F: box System.UInt64*/
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_79: ldarg.0 */
        /* IL_7A: ldc.i4.s 16*/
        /* IL_7C: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_81: box System.UInt64*/
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8B: ldarg.0 */
        /* IL_8C: ldc.i4.s 17*/
        /* IL_8E: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_93: box System.UInt64*/
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9D: ldarg.0 */
        /* IL_9E: ldc.i4.s 23*/
        /* IL_A0: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_A5: box System.UInt64*/
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AF: ldarg.0 */
        /* IL_B0: ldc.i4.s 24*/
        /* IL_B2: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_B7: box System.UInt64*/
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C1: ldarg.0 */
        /* IL_C2: ldc.i4.s 25*/
        /* IL_C4: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_C9: box System.UInt64*/
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D3: ldarg.0 */
        /* IL_D4: ldc.i4.s 31*/
        /* IL_D6: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_DB: box System.UInt64*/
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E5: ldarg.0 */
        /* IL_E6: ldc.i4.s 32*/
        /* IL_E8: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_ED: box System.UInt64*/
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F7: ldarg.0 */
        /* IL_F8: ldc.i4.s 33*/
        /* IL_FA: call UInt64 RightShift(System.UInt64, System.Int32)*/
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000015)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_109: ret */
        return ;
    };
    asm.x6000014_init = function ()
    {
        (((asm0)["System.UInt64"])().init)();
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
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.0 */
        /* IL_02: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_07: box System.UInt64*/
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(0|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_11: ldarg.0 */
        /* IL_12: ldc.i4.1 */
        /* IL_13: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_18: box System.UInt64*/
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(1|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_22: ldarg.0 */
        /* IL_23: ldc.i4.2 */
        /* IL_24: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_29: box System.UInt64*/
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(2|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_33: ldarg.0 */
        /* IL_34: ldc.i4.7 */
        /* IL_35: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_3A: box System.UInt64*/
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(7|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_44: ldarg.0 */
        /* IL_45: ldc.i4.8 */
        /* IL_46: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_4B: box System.UInt64*/
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(8|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_55: ldarg.0 */
        /* IL_56: ldc.i4.s 9*/
        /* IL_58: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_5D: box System.UInt64*/
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(9|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_67: ldarg.0 */
        /* IL_68: ldc.i4.s 15*/
        /* IL_6A: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_6F: box System.UInt64*/
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(15|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_79: ldarg.0 */
        /* IL_7A: ldc.i4.s 16*/
        /* IL_7C: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_81: box System.UInt64*/
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(16|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_8B: ldarg.0 */
        /* IL_8C: ldc.i4.s 17*/
        /* IL_8E: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_93: box System.UInt64*/
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(17|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_9D: ldarg.0 */
        /* IL_9E: ldc.i4.s 23*/
        /* IL_A0: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_A5: box System.UInt64*/
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(23|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_AF: ldarg.0 */
        /* IL_B0: ldc.i4.s 24*/
        /* IL_B2: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_B7: box System.UInt64*/
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(24|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_C1: ldarg.0 */
        /* IL_C2: ldc.i4.s 25*/
        /* IL_C4: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_C9: box System.UInt64*/
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(25|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_D3: ldarg.0 */
        /* IL_D4: ldc.i4.s 31*/
        /* IL_D6: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_DB: box System.UInt64*/
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(31|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_E5: ldarg.0 */
        /* IL_E6: ldc.i4.s 32*/
        /* IL_E8: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_ED: box System.UInt64*/
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(32|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_F7: ldarg.0 */
        /* IL_F8: ldc.i4.s 33*/
        /* IL_FA: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        /* IL_FF: box System.UInt64*/
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (asm1.x6000016)(arg0,(33|0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_109: ret */
        return ;
    };
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
