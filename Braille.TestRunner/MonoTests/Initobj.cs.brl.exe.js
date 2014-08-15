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
        var st_00;
        var st_01;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldstr System.Object*/
        st_00 = new_string("System.Object");
        /* IL_06: stloc.0 */
        loc0 = st_00;
        /* IL_09: ldloc.0 */
        st_01 = loc0;
        /* IL_0A: ret */
        return st_01;
    };;
    asm.x6000006 = function GetHashCode(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Int32 GetHashCode(System.Object)*/
        st_01 = (asm0.x6000003)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x6000007 = function ToJavaScriptString(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                st_00 = arg0;
                /* IL_02: ldnull */
                st_01 = null;
                /* IL_04: ceq */
                st_02 = (st_00 === st_01) ? (1) : (0);
                /* IL_05: ldc.i4.0 */
                st_03 = (0|0);
                /* IL_07: ceq */
                st_04 = (st_02 === st_03) ? (1) : (0);
                /* IL_08: stloc.1 */
                loc1 = st_04;
                /* IL_09: ldloc.1 */
                st_05 = loc1;
                /* IL_0A: brtrue.s IL_19*/
                
                if (st_05){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_0C: ldstr */
                st_06 = new_string("");
                /* IL_11: ldfld Object jsstr*/
                st_07 = st_06.jsstr;
                /* IL_16: stloc.0 */
                loc0 = st_07;
                /* IL_17: br.s IL_27*/
                __pos_0__ = 0x27;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                st_08 = arg0;
                /* IL_1A: callvirt String ToString()*/
                st_09 = (((st_08.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(st_08));
                /* IL_1F: ldfld Object jsstr*/
                st_0A = st_09.jsstr;
                /* IL_24: stloc.0 */
                loc0 = st_0A;
                case 0x27:
                /* IL_27: ldloc.0 */
                st_0B = loc0;
                /* IL_28: ret */
                return st_0B;
            }
        }
    };;
    asm.ToJavaScriptString = asm.x6000007;
    asm.x6000008 = function ReferenceEquals(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean ReferenceEqualsImpl(System.Object, System.Object)*/
        st_02 = (asm0.x6000001)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
    };;
    asm.x6000009 = function Equals(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean ReferenceEquals(System.Object, System.Object)*/
        st_02 = (asm0.x6000008)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
    };;
    asm.x600000a = function GetType(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Type GetTypeImpl(System.Object)*/
        st_01 = (asm0.x6000002)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x600000b = function _ctor(arg0)
    {
        var __pos_0__;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: br.s IL_02*/
                __pos_0__ = 0x2;
                continue;
                case 0x2:
                /* IL_02: ret */
                return ;
            }
        }
    };;
    asm.x600000c = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000e = function get_ValidOn(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldfld AttributeTargets <ValidOn>k__BackingField*/
        st_01 = (st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"];
        /* IL_06: stloc.0 */
        loc0 = st_01;
        /* IL_09: ldloc.0 */
        st_02 = loc0;
        /* IL_0A: ret */
        return st_02;
    };;
    asm.x600000f = function set_ValidOn(arg0,arg1)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (st_00)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = st_01;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000010 = function get_Inherited(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldfld Boolean <Inherited>k__BackingField*/
        st_01 = (st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"];
        /* IL_06: stloc.0 */
        loc0 = st_01;
        /* IL_09: ldloc.0 */
        st_02 = loc0;
        /* IL_0A: ret */
        return st_02;
    };;
    asm.x6000011 = function set_Inherited(arg0,arg1)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (st_00)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = st_01;
        /* IL_07: ret */
        return ;
    };;
    asm.x600000d = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        st_01 = arg0;
        /* IL_09: ldarg.1 */
        st_02 = arg1;
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        (asm0.x600000f)(st_01,clone_value(st_02));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000012 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000013 = function ToString(arg0)
    {
        var st_00;
        var st_01;
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
                st_00 = arg0;
                /* IL_02: ldind.i1 */
                st_01 = (st_00.r)();
                /* IL_03: brtrue.s IL_0C*/
                
                if (st_01){
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
                st_03 = loc0;
                /* IL_16: ret */
                return st_03;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.u1 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Byte*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Char"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.u2 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Char*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String ToStringImpl(System.Object)*/
        st_03 = (asm0.x6000023)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
    };
    asm.x6000023 = function(o) { return new_string(String.fromCharCode(o.boxed)); };;
    asm.x6000024 = (function (o) { console.log(o.jsstr); });;
    asm.x6000025 = function WriteLine(arg0)
    {
        var st_00;
        var st_01;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: callvirt String ToString()*/
        st_01 = (((st_00.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(st_00));
        /* IL_07: call Void WriteLineImpl(System.String)*/
        (asm0.x6000024)(st_01);
        /* IL_0C: nop */
        /* IL_0D: ret */
        return ;
    };;
    asm.x6000026 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Double"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.r8 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Double*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
    };
    asm.x6000028 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x6000012)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000029 = function get_CurrentManagedThreadId()
    {
        var st_00;
        var st_01;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldc.i4.0 */
        st_00 = (0|0);
        /* IL_02: stloc.0 */
        loc0 = st_00;
        /* IL_05: ldloc.0 */
        st_01 = loc0;
        /* IL_06: ret */
        return st_01;
    };;
    asm.x600002a = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_20;
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
                st_00 = arg0;
                /* IL_02: ldnull */
                st_01 = null;
                /* IL_04: ceq */
                st_02 = (st_00 === st_01) ? (1) : (0);
                /* IL_05: ldc.i4.0 */
                st_03 = (0|0);
                /* IL_07: ceq */
                st_04 = (st_02 === st_03) ? (1) : (0);
                /* IL_08: stloc.1 */
                loc1 = st_04;
                /* IL_09: ldloc.1 */
                st_05 = loc1;
                /* IL_0A: brtrue.s IL_20*/
                
                if (st_05){
                    __pos_0__ = 0x20;
                    continue;
                }
                /* IL_0C: nop */
                
                /* IL_0D: ldarg.1 */
                st_06 = arg1;
                /* IL_0E: ldnull */
                st_07 = null;
                /* IL_10: ceq */
                st_08 = (st_06 === st_07) ? (1) : (0);
                /* IL_11: ldc.i4.0 */
                st_09 = (0|0);
                /* IL_13: ceq */
                st_0A = (st_08 === st_09) ? (1) : (0);
                /* IL_14: stloc.1 */
                loc1 = st_0A;
                /* IL_15: ldloc.1 */
                st_0B = loc1;
                /* IL_16: brtrue.s IL_1C*/
                
                if (st_0B){
                    __pos_0__ = 0x1C;
                    continue;
                }
                /* IL_18: ldnull */
                st_0C = null;
                /* IL_19: stloc.0 */
                loc0 = st_0C;
                /* IL_1A: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x1C:
                /* IL_1C: ldarg.1 */
                st_0D = arg1;
                /* IL_1D: stloc.0 */
                loc0 = st_0D;
                /* IL_1E: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x20:
                /* IL_20: ldarg.1 */
                st_0E = arg1;
                /* IL_21: ldnull */
                st_0F = null;
                /* IL_23: ceq */
                st_10 = (st_0E === st_0F) ? (1) : (0);
                /* IL_24: ldc.i4.0 */
                st_11 = (0|0);
                /* IL_26: ceq */
                st_12 = (st_10 === st_11) ? (1) : (0);
                /* IL_27: stloc.1 */
                loc1 = st_12;
                /* IL_28: ldloc.1 */
                st_13 = loc1;
                /* IL_29: brtrue.s IL_2F*/
                
                if (st_13){
                    __pos_0__ = 0x2F;
                    continue;
                }
                /* IL_2B: ldarg.0 */
                st_14 = arg0;
                /* IL_2C: stloc.0 */
                loc0 = st_14;
                /* IL_2D: br.s IL_56*/
                __pos_0__ = 0x56;
                continue;
                case 0x2F:
                /* IL_2F: ldarg.0 */
                st_15 = arg0;
                /* IL_30: callvirt Type GetType()*/
                st_17 = (asm0.x600000a)(st_15);
                /* IL_35: ldarg.1 */
                st_16 = arg1;
                /* IL_36: callvirt Type GetType()*/
                st_18 = (asm0.x600000a)(st_16);
                /* IL_3C: ceq */
                st_19 = (st_17 === st_18) ? (1) : (0);
                /* IL_3D: stloc.1 */
                loc1 = st_19;
                /* IL_3E: ldloc.1 */
                st_1A = loc1;
                /* IL_3F: brtrue.s IL_4C*/
                
                if (st_1A){
                    __pos_0__ = 0x4C;
                    continue;
                }
                /* IL_41: ldstr Incompatible delegate types*/
                st_1B = new_string("Incompatible delegate types");
                /* IL_46: newobj Void .ctor(System.String)*/
                st_1C = newobj(t0,asm0.x600004f,[ null,st_1B ]);
                /* IL_4B: throw */
                throw st_1C;
                case 0x4C:
                /* IL_4C: ldarg.0 */
                st_1D = arg0;
                /* IL_4D: ldarg.1 */
                st_1E = arg1;
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                st_1F = (((st_1D.vtable)["asm0.x600002e"])())(st_1D,st_1E);
                /* IL_53: stloc.0 */
                loc0 = st_1F;
                case 0x56:
                /* IL_56: ldloc.0 */
                st_20 = loc0;
                /* IL_57: ret */
                return st_20;
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
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
                st_00 = arg1;
                /* IL_02: ldnull */
                st_01 = null;
                /* IL_04: ceq */
                st_02 = (st_00 === st_01) ? (1) : (0);
                /* IL_05: ldc.i4.0 */
                st_03 = (0|0);
                /* IL_07: ceq */
                st_04 = (st_02 === st_03) ? (1) : (0);
                /* IL_08: stloc.1 */
                loc1 = st_04;
                /* IL_09: ldloc.1 */
                st_05 = loc1;
                /* IL_0A: brtrue.s IL_10*/
                
                if (st_05){
                    __pos_0__ = 0x10;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                st_06 = arg0;
                /* IL_0D: stloc.0 */
                loc0 = st_06;
                /* IL_0E: br.s IL_37*/
                __pos_0__ = 0x37;
                continue;
                case 0x10:
                /* IL_10: ldarg.0 */
                st_07 = arg0;
                /* IL_11: callvirt Type GetType()*/
                st_09 = (asm0.x600000a)(st_07);
                /* IL_16: ldarg.1 */
                st_08 = arg1;
                /* IL_17: callvirt Type GetType()*/
                st_0A = (asm0.x600000a)(st_08);
                /* IL_1D: ceq */
                st_0B = (st_09 === st_0A) ? (1) : (0);
                /* IL_1E: stloc.1 */
                loc1 = st_0B;
                /* IL_1F: ldloc.1 */
                st_0C = loc1;
                /* IL_20: brtrue.s IL_2D*/
                
                if (st_0C){
                    __pos_0__ = 0x2D;
                    continue;
                }
                /* IL_22: ldstr Incompatible delegate types*/
                st_0D = new_string("Incompatible delegate types");
                /* IL_27: newobj Void .ctor(System.String)*/
                st_0E = newobj(t0,asm0.x600004f,[ null,st_0D ]);
                /* IL_2C: throw */
                throw st_0E;
                case 0x2D:
                /* IL_2D: ldarg.0 */
                st_0F = arg0;
                /* IL_2E: ldarg.1 */
                st_10 = arg1;
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                st_11 = (((st_0F.vtable)["asm0.x600002d"])())(st_0F,st_10);
                /* IL_34: stloc.0 */
                loc0 = st_11;
                case 0x37:
                /* IL_37: ldloc.0 */
                st_12 = loc0;
                /* IL_38: ret */
                return st_12;
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
        var st_00;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        st_00 = newobj(t0,asm0.x6000053,[ null ]);
        /* IL_06: throw */
        throw st_00;
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
        var st_00;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        st_00 = newobj(t0,asm0.x6000053,[ null ]);
        /* IL_06: throw */
        throw st_00;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Delegate"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_01 = arg0;
        /* IL_02: ldarg.1 */
        st_00 = arg1;
        /* IL_03: isinst System.Delegate*/
        st_02 = (t0.IsInst)(st_00);
        /* IL_08: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        st_03 = (asm0.x6000030)(st_01,st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
        var st_23;
        var st_24;
        var st_25;
        var st_26;
        var st_27;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_2C;
        var st_2D;
        var st_2E;
        var st_2F;
        var st_30;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_35;
        var st_36;
        var st_37;
        var st_38;
        var st_39;
        var st_3A;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_3E;
        var st_3F;
        var st_40;
        var st_41;
        var st_42;
        var st_43;
        var st_44;
        var st_45;
        var st_46;
        var st_47;
        var st_48;
        var st_49;
        var st_4A;
        var st_4B;
        var st_4C;
        var st_4D;
        var st_4E;
        var st_4F;
        var st_50;
        var st_51;
        var st_52;
        var st_53;
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
                st_00 = arg0;
                /* IL_02: castclass System.MulticastDelegate*/
                st_01 = st_00;
                /* IL_07: stloc.0 */
                loc0 = st_01;
                /* IL_08: ldarg.1 */
                st_02 = arg1;
                /* IL_09: castclass System.MulticastDelegate*/
                st_03 = st_02;
                /* IL_0E: stloc.1 */
                loc1 = st_03;
                /* IL_0F: ldloc.0 */
                st_04 = loc0;
                /* IL_10: ldnull */
                st_05 = null;
                /* IL_12: ceq */
                st_06 = (st_04 === st_05) ? (1) : (0);
                /* IL_13: ldc.i4.0 */
                st_07 = (0|0);
                /* IL_15: ceq */
                st_08 = (st_06 === st_07) ? (1) : (0);
                /* IL_16: stloc.s 6*/
                loc6 = st_08;
                /* IL_18: ldloc.s 6*/
                st_09 = loc6;
                /* IL_1A: brtrue.s IL_27*/
                
                if (st_09){
                    __pos_0__ = 0x27;
                    continue;
                }
                /* IL_1C: ldloc.1 */
                st_0A = loc1;
                /* IL_1D: ldnull */
                st_0B = null;
                /* IL_1F: ceq */
                st_0C = (st_0A === st_0B) ? (1) : (0);
                /* IL_20: stloc.s 5*/
                loc5 = st_0C;
                /* IL_22: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x27:
                /* IL_27: ldloc.1 */
                st_0D = loc1;
                /* IL_28: ldnull */
                st_0E = null;
                /* IL_2A: ceq */
                st_0F = (st_0D === st_0E) ? (1) : (0);
                /* IL_2B: ldc.i4.0 */
                st_10 = (0|0);
                /* IL_2D: ceq */
                st_11 = (st_0F === st_10) ? (1) : (0);
                /* IL_2E: stloc.s 6*/
                loc6 = st_11;
                /* IL_30: ldloc.s 6*/
                st_12 = loc6;
                /* IL_32: brtrue.s IL_3C*/
                
                if (st_12){
                    __pos_0__ = 0x3C;
                    continue;
                }
                /* IL_34: ldc.i4.0 */
                st_13 = (0|0);
                /* IL_35: stloc.s 5*/
                loc5 = st_13;
                /* IL_37: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x3C:
                /* IL_3C: ldloc.0 */
                st_14 = loc0;
                /* IL_3D: ldfld Object _methodPtr*/
                st_16 = st_14._methodPtr;
                /* IL_42: ldloc.1 */
                st_15 = loc1;
                /* IL_43: ldfld Object _methodPtr*/
                st_17 = st_15._methodPtr;
                /* IL_48: call Boolean ReferenceEquals(System.Object, System.Object)*/
                st_18 = (asm0.x6000008)(st_16,st_17);
                /* IL_4D: stloc.s 6*/
                loc6 = st_18;
                /* IL_4F: ldloc.s 6*/
                st_19 = loc6;
                /* IL_51: brtrue.s IL_5B*/
                
                if (st_19){
                    __pos_0__ = 0x5B;
                    continue;
                }
                /* IL_53: ldc.i4.0 */
                st_1A = (0|0);
                /* IL_54: stloc.s 5*/
                loc5 = st_1A;
                /* IL_56: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x5B:
                /* IL_5B: ldloc.0 */
                st_1B = loc0;
                /* IL_5C: ldfld Object _target*/
                st_1D = st_1B._target;
                /* IL_61: ldloc.1 */
                st_1C = loc1;
                /* IL_62: ldfld Object _target*/
                st_1E = st_1C._target;
                /* IL_67: call Boolean ReferenceEquals(System.Object, System.Object)*/
                st_1F = (asm0.x6000008)(st_1D,st_1E);
                /* IL_6C: stloc.s 6*/
                loc6 = st_1F;
                /* IL_6E: ldloc.s 6*/
                st_20 = loc6;
                /* IL_70: brtrue.s IL_7A*/
                
                if (st_20){
                    __pos_0__ = 0x7A;
                    continue;
                }
                /* IL_72: ldc.i4.0 */
                st_21 = (0|0);
                /* IL_73: stloc.s 5*/
                loc5 = st_21;
                /* IL_75: br IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0x7A:
                /* IL_7A: ldloc.0 */
                st_22 = loc0;
                /* IL_7B: ldfld Delegate[] _invocationList*/
                st_23 = st_22._invocationList;
                /* IL_80: brfalse.s IL_8D*/
                
                if ((!st_23)){
                    __pos_0__ = 0x8D;
                    continue;
                }
                /* IL_82: ldloc.1 */
                st_24 = loc1;
                /* IL_83: ldfld Delegate[] _invocationList*/
                st_25 = st_24._invocationList;
                /* IL_88: ldnull */
                st_26 = null;
                /* IL_8A: ceq */
                st_27 = (st_25 === st_26) ? (1) : (0);
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
                st_28 = loc6;
                /* IL_93: brtrue.s IL_F9*/
                
                if (st_28){
                    __pos_0__ = 0xF9;
                    continue;
                }
                /* IL_95: nop */
                
                /* IL_96: ldloc.0 */
                st_29 = loc0;
                /* IL_97: ldfld Delegate[] _invocationList*/
                st_2A = st_29._invocationList;
                /* IL_9C: ldlen */
                st_2B = st_2A.jsarr.length;
                /* IL_9D: conv.i4 */
                st_2F = (st_2B | 0);
                /* IL_9E: ldloc.1 */
                st_2C = loc1;
                /* IL_9F: ldfld Delegate[] _invocationList*/
                st_2D = st_2C._invocationList;
                /* IL_A4: ldlen */
                st_2E = st_2D.jsarr.length;
                /* IL_A5: conv.i4 */
                st_30 = (st_2E | 0);
                /* IL_A7: ceq */
                st_31 = (st_2F === st_30) ? (1) : (0);
                /* IL_A8: stloc.s 6*/
                loc6 = st_31;
                /* IL_AA: ldloc.s 6*/
                st_32 = loc6;
                /* IL_AC: brtrue.s IL_B3*/
                
                if (st_32){
                    __pos_0__ = 0xB3;
                    continue;
                }
                /* IL_AE: ldc.i4.0 */
                st_33 = (0|0);
                /* IL_AF: stloc.s 5*/
                loc5 = st_33;
                /* IL_B1: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xB3:
                /* IL_B3: ldc.i4.0 */
                st_34 = (0|0);
                /* IL_B4: stloc.2 */
                loc2 = st_34;
                /* IL_B5: br.s IL_E3*/
                __pos_0__ = 0xE3;
                continue;
                case 0xB7:
                /* IL_B7: nop */
                
                /* IL_B8: ldloc.0 */
                st_35 = loc0;
                /* IL_B9: ldfld Delegate[] _invocationList*/
                st_36 = st_35._invocationList;
                /* IL_BE: ldloc.2 */
                st_37 = loc2;
                /* IL_BF: ldelem.ref */
                st_38 = (st_36.jsarr)[st_37];
                /* IL_C0: stloc.3 */
                loc3 = st_38;
                /* IL_C1: ldloc.1 */
                st_39 = loc1;
                /* IL_C2: ldfld Delegate[] _invocationList*/
                st_3A = st_39._invocationList;
                /* IL_C7: ldloc.2 */
                st_3B = loc2;
                /* IL_C8: ldelem.ref */
                st_3C = (st_3A.jsarr)[st_3B];
                /* IL_C9: stloc.s 4*/
                loc4 = st_3C;
                /* IL_CB: ldloc.3 */
                st_3D = loc3;
                /* IL_CC: ldloc.s 4*/
                st_3E = loc4;
                /* IL_CE: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                st_3F = (asm0.x6000030)(st_3D,st_3E);
                /* IL_D3: stloc.s 6*/
                loc6 = st_3F;
                /* IL_D5: ldloc.s 6*/
                st_40 = loc6;
                /* IL_D7: brtrue.s IL_DE*/
                
                if (st_40){
                    __pos_0__ = 0xDE;
                    continue;
                }
                /* IL_D9: ldc.i4.0 */
                st_41 = (0|0);
                /* IL_DA: stloc.s 5*/
                loc5 = st_41;
                /* IL_DC: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xDE:
                /* IL_DE: nop */
                
                /* IL_DF: ldloc.2 */
                st_42 = loc2;
                /* IL_E0: ldc.i4.1 */
                st_43 = (1|0);
                /* IL_E1: add */
                st_44 = ((st_42 + st_43) | 0);
                /* IL_E2: stloc.2 */
                loc2 = st_44;
                case 0xE3:
                /* IL_E3: ldloc.2 */
                st_48 = loc2;
                /* IL_E4: ldloc.0 */
                st_45 = loc0;
                /* IL_E5: ldfld Delegate[] _invocationList*/
                st_46 = st_45._invocationList;
                /* IL_EA: ldlen */
                st_47 = st_46.jsarr.length;
                /* IL_EB: conv.i4 */
                st_49 = (st_47 | 0);
                /* IL_ED: clt */
                st_4A = (st_48 < st_49) ? (1) : (0);
                /* IL_EE: stloc.s 6*/
                loc6 = st_4A;
                /* IL_F0: ldloc.s 6*/
                st_4B = loc6;
                /* IL_F2: brtrue.s IL_B7*/
                
                if (st_4B){
                    __pos_0__ = 0xB7;
                    continue;
                }
                /* IL_F4: ldc.i4.1 */
                st_4C = (1|0);
                /* IL_F5: stloc.s 5*/
                loc5 = st_4C;
                /* IL_F7: br.s IL_112*/
                __pos_0__ = 0x112;
                continue;
                case 0xF9:
                /* IL_F9: ldloc.0 */
                st_4D = loc0;
                /* IL_FA: ldfld Delegate[] _invocationList*/
                st_4E = st_4D._invocationList;
                /* IL_FF: brtrue.s IL_10C*/
                
                if (st_4E){
                    __pos_0__ = 0x10C;
                    continue;
                }
                /* IL_101: ldloc.1 */
                st_4F = loc1;
                /* IL_102: ldfld Delegate[] _invocationList*/
                st_50 = st_4F._invocationList;
                /* IL_107: ldnull */
                st_51 = null;
                /* IL_109: ceq */
                st_52 = (st_50 === st_51) ? (1) : (0);
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
                st_53 = loc5;
                /* IL_114: ret */
                return st_53;
            }
        }
    };
    asm.x6000031 = function op_Inequality(arg0,arg1)
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
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        st_02 = (asm0.x6000030)(st_00,st_01);
        /* IL_08: ldc.i4.0 */
        st_03 = (0|0);
        /* IL_0A: ceq */
        st_04 = (st_02 === st_03) ? (1) : (0);
        /* IL_0B: stloc.0 */
        loc0 = st_04;
        /* IL_0E: ldloc.0 */
        st_05 = loc0;
        /* IL_0F: ret */
        return st_05;
    };;
    asm.x6000032 = function GetHashCode(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Int32 GetHashCode()*/
        st_01 = (asm0.x6000006)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x6000033 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
        var st_23;
        var st_24;
        var st_25;
        var st_26;
        var st_27;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_2C;
        var st_2D;
        var st_2E;
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
                st_00 = arg0;
                /* IL_02: ldfld Delegate[] _invocationList*/
                st_01 = st_00._invocationList;
                /* IL_07: ldnull */
                st_02 = null;
                /* IL_09: ceq */
                st_03 = (st_01 === st_02) ? (1) : (0);
                /* IL_0A: stloc.3 */
                loc3 = st_03;
                /* IL_0B: ldloc.3 */
                st_04 = loc3;
                /* IL_0C: brtrue.s IL_4C*/
                
                if (st_04){
                    __pos_0__ = 0x4C;
                    continue;
                }
                /* IL_0E: nop */
                
                /* IL_0F: ldarg.0 */
                st_05 = arg0;
                /* IL_10: ldfld Delegate[] _invocationList*/
                st_06 = st_05._invocationList;
                /* IL_15: ldlen */
                st_07 = st_06.jsarr.length;
                /* IL_16: conv.i4 */
                st_08 = (st_07 | 0);
                /* IL_17: ldc.i4.1 */
                st_09 = (1|0);
                /* IL_18: add */
                st_0A = ((st_08 + st_09) | 0);
                /* IL_19: newarr System.Delegate*/
                st_0B = new_array(t0,st_0A);
                /* IL_1E: stloc.0 */
                loc0 = st_0B;
                /* IL_1F: ldc.i4.0 */
                st_0C = (0|0);
                /* IL_20: stloc.1 */
                loc1 = st_0C;
                /* IL_21: br.s IL_32*/
                __pos_0__ = 0x32;
                continue;
                case 0x23:
                /* IL_23: ldloc.0 */
                st_10 = loc0;
                /* IL_24: ldloc.1 */
                st_11 = loc1;
                /* IL_25: ldarg.0 */
                st_0D = arg0;
                /* IL_26: ldfld Delegate[] _invocationList*/
                st_0E = st_0D._invocationList;
                /* IL_2B: ldloc.1 */
                st_0F = loc1;
                /* IL_2C: ldelem.ref */
                st_12 = (st_0E.jsarr)[st_0F];
                /* IL_2D: stelem.ref */
                (st_10.jsarr)[st_11] = st_12;
                /* IL_2E: ldloc.1 */
                st_13 = loc1;
                /* IL_2F: ldc.i4.1 */
                st_14 = (1|0);
                /* IL_30: add */
                st_15 = ((st_13 + st_14) | 0);
                /* IL_31: stloc.1 */
                loc1 = st_15;
                case 0x32:
                /* IL_32: ldloc.1 */
                st_19 = loc1;
                /* IL_33: ldarg.0 */
                st_16 = arg0;
                /* IL_34: ldfld Delegate[] _invocationList*/
                st_17 = st_16._invocationList;
                /* IL_39: ldlen */
                st_18 = st_17.jsarr.length;
                /* IL_3A: conv.i4 */
                st_1A = (st_18 | 0);
                /* IL_3C: clt */
                st_1B = (st_19 < st_1A) ? (1) : (0);
                /* IL_3D: stloc.3 */
                loc3 = st_1B;
                /* IL_3E: ldloc.3 */
                st_1C = loc3;
                /* IL_3F: brtrue.s IL_23*/
                
                if (st_1C){
                    __pos_0__ = 0x23;
                    continue;
                }
                /* IL_41: ldloc.0 */
                st_21 = loc0;
                /* IL_42: ldloc.0 */
                st_1D = loc0;
                /* IL_43: ldlen */
                st_1E = st_1D.jsarr.length;
                /* IL_44: conv.i4 */
                st_1F = (st_1E | 0);
                /* IL_45: ldc.i4.1 */
                st_20 = (1|0);
                /* IL_46: sub */
                st_22 = ((st_1F - st_20) | 0);
                /* IL_47: ldarg.1 */
                st_23 = arg1;
                /* IL_48: stelem.ref */
                (st_21.jsarr)[st_22] = st_23;
                /* IL_49: nop */
                
                /* IL_4A: br.s IL_5D*/
                __pos_0__ = 0x5D;
                continue;
                case 0x4C:
                /* IL_4C: nop */
                
                /* IL_4D: ldc.i4.2 */
                st_24 = (2|0);
                /* IL_4E: newarr System.Delegate*/
                st_25 = new_array(t0,st_24);
                /* IL_53: stloc.0 */
                loc0 = st_25;
                /* IL_54: ldloc.0 */
                st_26 = loc0;
                /* IL_55: ldc.i4.0 */
                st_27 = (0|0);
                /* IL_56: ldarg.0 */
                st_28 = arg0;
                /* IL_57: stelem.ref */
                (st_26.jsarr)[st_27] = st_28;
                /* IL_58: ldloc.0 */
                st_29 = loc0;
                /* IL_59: ldc.i4.1 */
                st_2A = (1|0);
                /* IL_5A: ldarg.1 */
                st_2B = arg1;
                /* IL_5B: stelem.ref */
                (st_29.jsarr)[st_2A] = st_2B;
                /* IL_5C: nop */
                
                case 0x5D:
                /* IL_5D: ldloc.0 */
                st_2C = loc0;
                /* IL_5E: call Delegate CreateMulticast(System.Delegate[])*/
                st_2D = (asm0.x6000034)(st_2C);
                /* IL_63: stloc.2 */
                loc2 = st_2D;
                /* IL_66: ldloc.2 */
                st_2E = loc2;
                /* IL_67: ret */
                return st_2E;
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
        var st_23;
        var st_24;
        var st_25;
        var st_26;
        var st_27;
        var st_28;
        var st_29;
        var st_2A;
        var st_2B;
        var st_2C;
        var st_2D;
        var st_2E;
        var st_2F;
        var st_30;
        var st_31;
        var st_32;
        var st_33;
        var st_34;
        var st_35;
        var st_36;
        var st_37;
        var st_38;
        var st_39;
        var st_3A;
        var st_3B;
        var st_3C;
        var st_3D;
        var st_3E;
        var st_3F;
        var st_40;
        var st_41;
        var st_42;
        var st_43;
        var st_44;
        var st_45;
        var st_46;
        var st_47;
        var st_48;
        var st_49;
        var st_4A;
        var st_4B;
        var st_4C;
        var st_4D;
        var st_4E;
        var st_4F;
        var st_50;
        var st_51;
        var st_52;
        var st_53;
        var st_54;
        var st_55;
        var st_56;
        var st_57;
        var st_58;
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
        var st_63;
        var st_64;
        var st_65;
        var st_66;
        var st_67;
        var st_68;
        var st_69;
        var st_6A;
        var st_6B;
        var st_6C;
        var st_6D;
        var st_6E;
        var st_6F;
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
                st_00 = arg0;
                /* IL_02: ldfld Delegate[] _invocationList*/
                st_01 = st_00._invocationList;
                /* IL_07: ldnull */
                st_02 = null;
                /* IL_09: ceq */
                st_03 = (st_01 === st_02) ? (1) : (0);
                /* IL_0A: ldc.i4.0 */
                st_04 = (0|0);
                /* IL_0C: ceq */
                st_05 = (st_03 === st_04) ? (1) : (0);
                /* IL_0D: stloc.s 5*/
                loc5 = st_05;
                /* IL_0F: ldloc.s 5*/
                st_06 = loc5;
                /* IL_11: brtrue.s IL_34*/
                
                if (st_06){
                    __pos_0__ = 0x34;
                    continue;
                }
                /* IL_13: nop */
                
                /* IL_14: ldarg.1 */
                st_07 = arg1;
                /* IL_15: ldarg.0 */
                st_08 = arg0;
                /* IL_16: call Boolean op_Equality(System.Delegate, System.Delegate)*/
                st_09 = (asm0.x6000030)(st_07,st_08);
                /* IL_1B: ldc.i4.0 */
                st_0A = (0|0);
                /* IL_1D: ceq */
                st_0B = (st_09 === st_0A) ? (1) : (0);
                /* IL_1E: stloc.s 5*/
                loc5 = st_0B;
                /* IL_20: ldloc.s 5*/
                st_0C = loc5;
                /* IL_22: brtrue.s IL_2C*/
                
                if (st_0C){
                    __pos_0__ = 0x2C;
                    continue;
                }
                /* IL_24: ldnull */
                st_0D = null;
                /* IL_25: stloc.s 4*/
                loc4 = st_0D;
                /* IL_27: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x2C:
                /* IL_2C: ldarg.0 */
                st_0E = arg0;
                /* IL_2D: stloc.s 4*/
                loc4 = st_0E;
                /* IL_2F: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x34:
                /* IL_34: nop */
                
                /* IL_35: ldc.i4.0 */
                st_0F = (0|0);
                /* IL_36: stloc.0 */
                loc0 = st_0F;
                /* IL_37: ldc.i4.0 */
                st_10 = (0|0);
                /* IL_38: stloc.1 */
                loc1 = st_10;
                /* IL_39: br.s IL_5A*/
                __pos_0__ = 0x5A;
                continue;
                case 0x3B:
                /* IL_3B: ldarg.0 */
                st_11 = arg0;
                /* IL_3C: ldfld Delegate[] _invocationList*/
                st_12 = st_11._invocationList;
                /* IL_41: ldloc.1 */
                st_13 = loc1;
                /* IL_42: ldelem.ref */
                st_14 = (st_12.jsarr)[st_13];
                /* IL_43: ldarg.1 */
                st_15 = arg1;
                /* IL_44: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                st_16 = (asm0.x6000031)(st_14,st_15);
                /* IL_49: ldc.i4.0 */
                st_17 = (0|0);
                /* IL_4B: ceq */
                st_18 = (st_16 === st_17) ? (1) : (0);
                /* IL_4C: stloc.s 5*/
                loc5 = st_18;
                /* IL_4E: ldloc.s 5*/
                st_19 = loc5;
                /* IL_50: brtrue.s IL_56*/
                
                if (st_19){
                    __pos_0__ = 0x56;
                    continue;
                }
                /* IL_52: ldloc.0 */
                st_1A = loc0;
                /* IL_53: ldc.i4.1 */
                st_1B = (1|0);
                /* IL_54: add */
                st_1C = ((st_1A + st_1B) | 0);
                /* IL_55: stloc.0 */
                loc0 = st_1C;
                case 0x56:
                /* IL_56: ldloc.1 */
                st_1D = loc1;
                /* IL_57: ldc.i4.1 */
                st_1E = (1|0);
                /* IL_58: add */
                st_1F = ((st_1D + st_1E) | 0);
                /* IL_59: stloc.1 */
                loc1 = st_1F;
                case 0x5A:
                /* IL_5A: ldloc.1 */
                st_23 = loc1;
                /* IL_5B: ldarg.0 */
                st_20 = arg0;
                /* IL_5C: ldfld Delegate[] _invocationList*/
                st_21 = st_20._invocationList;
                /* IL_61: ldlen */
                st_22 = st_21.jsarr.length;
                /* IL_62: conv.i4 */
                st_24 = (st_22 | 0);
                /* IL_64: clt */
                st_25 = (st_23 < st_24) ? (1) : (0);
                /* IL_65: stloc.s 5*/
                loc5 = st_25;
                /* IL_67: ldloc.s 5*/
                st_26 = loc5;
                /* IL_69: brtrue.s IL_3B*/
                
                if (st_26){
                    __pos_0__ = 0x3B;
                    continue;
                }
                /* IL_6B: ldloc.0 */
                st_27 = loc0;
                /* IL_6C: ldc.i4.0 */
                st_28 = (0|0);
                /* IL_6E: ceq */
                st_29 = (st_27 === st_28) ? (1) : (0);
                /* IL_6F: ldc.i4.0 */
                st_2A = (0|0);
                /* IL_71: ceq */
                st_2B = (st_29 === st_2A) ? (1) : (0);
                /* IL_72: stloc.s 5*/
                loc5 = st_2B;
                /* IL_74: ldloc.s 5*/
                st_2C = loc5;
                /* IL_76: brtrue.s IL_80*/
                
                if (st_2C){
                    __pos_0__ = 0x80;
                    continue;
                }
                /* IL_78: ldnull */
                st_2D = null;
                /* IL_79: stloc.s 4*/
                loc4 = st_2D;
                /* IL_7B: br IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0x80:
                /* IL_80: ldloc.0 */
                st_2E = loc0;
                /* IL_81: ldc.i4.1 */
                st_2F = (1|0);
                /* IL_83: ceq */
                st_30 = (st_2E === st_2F) ? (1) : (0);
                /* IL_84: ldc.i4.0 */
                st_31 = (0|0);
                /* IL_86: ceq */
                st_32 = (st_30 === st_31) ? (1) : (0);
                /* IL_87: stloc.s 5*/
                loc5 = st_32;
                /* IL_89: ldloc.s 5*/
                st_33 = loc5;
                /* IL_8B: brtrue.s IL_C9*/
                
                if (st_33){
                    __pos_0__ = 0xC9;
                    continue;
                }
                /* IL_8D: ldc.i4.0 */
                st_34 = (0|0);
                /* IL_8E: stloc.1 */
                loc1 = st_34;
                /* IL_8F: br.s IL_B8*/
                __pos_0__ = 0xB8;
                continue;
                case 0x91:
                /* IL_91: ldarg.0 */
                st_35 = arg0;
                /* IL_92: ldfld Delegate[] _invocationList*/
                st_36 = st_35._invocationList;
                /* IL_97: ldloc.1 */
                st_37 = loc1;
                /* IL_98: ldelem.ref */
                st_38 = (st_36.jsarr)[st_37];
                /* IL_99: ldarg.1 */
                st_39 = arg1;
                /* IL_9A: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                st_3A = (asm0.x6000031)(st_38,st_39);
                /* IL_9F: ldc.i4.0 */
                st_3B = (0|0);
                /* IL_A1: ceq */
                st_3C = (st_3A === st_3B) ? (1) : (0);
                /* IL_A2: stloc.s 5*/
                loc5 = st_3C;
                /* IL_A4: ldloc.s 5*/
                st_3D = loc5;
                /* IL_A6: brtrue.s IL_B4*/
                
                if (st_3D){
                    __pos_0__ = 0xB4;
                    continue;
                }
                /* IL_A8: ldarg.0 */
                st_3E = arg0;
                /* IL_A9: ldfld Delegate[] _invocationList*/
                st_3F = st_3E._invocationList;
                /* IL_AE: ldloc.1 */
                st_40 = loc1;
                /* IL_AF: ldelem.ref */
                st_41 = (st_3F.jsarr)[st_40];
                /* IL_B0: stloc.s 4*/
                loc4 = st_41;
                /* IL_B2: br.s IL_11B*/
                __pos_0__ = 0x11B;
                continue;
                case 0xB4:
                /* IL_B4: ldloc.1 */
                st_42 = loc1;
                /* IL_B5: ldc.i4.1 */
                st_43 = (1|0);
                /* IL_B6: add */
                st_44 = ((st_42 + st_43) | 0);
                /* IL_B7: stloc.1 */
                loc1 = st_44;
                case 0xB8:
                /* IL_B8: ldloc.1 */
                st_48 = loc1;
                /* IL_B9: ldarg.0 */
                st_45 = arg0;
                /* IL_BA: ldfld Delegate[] _invocationList*/
                st_46 = st_45._invocationList;
                /* IL_BF: ldlen */
                st_47 = st_46.jsarr.length;
                /* IL_C0: conv.i4 */
                st_49 = (st_47 | 0);
                /* IL_C2: clt */
                st_4A = (st_48 < st_49) ? (1) : (0);
                /* IL_C3: stloc.s 5*/
                loc5 = st_4A;
                /* IL_C5: ldloc.s 5*/
                st_4B = loc5;
                /* IL_C7: brtrue.s IL_91*/
                
                if (st_4B){
                    __pos_0__ = 0x91;
                    continue;
                }
                case 0xC9:
                /* IL_C9: ldloc.0 */
                st_4C = loc0;
                /* IL_CA: newarr System.Delegate*/
                st_4D = new_array(t0,st_4C);
                /* IL_CF: stloc.2 */
                loc2 = st_4D;
                /* IL_D0: ldc.i4.0 */
                st_4E = (0|0);
                /* IL_D1: stloc.1 */
                loc1 = st_4E;
                /* IL_D2: ldc.i4.0 */
                st_4F = (0|0);
                /* IL_D3: stloc.3 */
                loc3 = st_4F;
                /* IL_D4: br.s IL_100*/
                __pos_0__ = 0x100;
                continue;
                case 0xD6:
                /* IL_D6: ldarg.0 */
                st_50 = arg0;
                /* IL_D7: ldfld Delegate[] _invocationList*/
                st_51 = st_50._invocationList;
                /* IL_DC: ldloc.1 */
                st_52 = loc1;
                /* IL_DD: ldelem.ref */
                st_53 = (st_51.jsarr)[st_52];
                /* IL_DE: ldarg.1 */
                st_54 = arg1;
                /* IL_DF: call Boolean op_Inequality(System.Delegate, System.Delegate)*/
                st_55 = (asm0.x6000031)(st_53,st_54);
                /* IL_E4: ldc.i4.0 */
                st_56 = (0|0);
                /* IL_E6: ceq */
                st_57 = (st_55 === st_56) ? (1) : (0);
                /* IL_E7: stloc.s 5*/
                loc5 = st_57;
                /* IL_E9: ldloc.s 5*/
                st_58 = loc5;
                /* IL_EB: brtrue.s IL_FC*/
                
                if (st_58){
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
                st_63 = loc1;
                /* IL_FD: ldc.i4.1 */
                st_64 = (1|0);
                /* IL_FE: add */
                st_65 = ((st_63 + st_64) | 0);
                /* IL_FF: stloc.1 */
                loc1 = st_65;
                case 0x100:
                /* IL_100: ldloc.1 */
                st_69 = loc1;
                /* IL_101: ldarg.0 */
                st_66 = arg0;
                /* IL_102: ldfld Delegate[] _invocationList*/
                st_67 = st_66._invocationList;
                /* IL_107: ldlen */
                st_68 = st_67.jsarr.length;
                /* IL_108: conv.i4 */
                st_6A = (st_68 | 0);
                /* IL_10A: clt */
                st_6B = (st_69 < st_6A) ? (1) : (0);
                /* IL_10B: stloc.s 5*/
                loc5 = st_6B;
                /* IL_10D: ldloc.s 5*/
                st_6C = loc5;
                /* IL_10F: brtrue.s IL_D6*/
                
                if (st_6C){
                    __pos_0__ = 0xD6;
                    continue;
                }
                /* IL_111: ldloc.2 */
                st_6D = loc2;
                /* IL_112: call Delegate CreateMulticast(System.Delegate[])*/
                st_6E = (asm0.x6000034)(st_6D);
                /* IL_117: stloc.s 4*/
                loc4 = st_6E;
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                st_6F = loc4;
                /* IL_11D: ret */
                return st_6F;
            }
        }
    };
    asm.x6000037 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x6000033)(st_00);
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Int16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.i2 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Int16*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.i4 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Int32*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.IntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldobj System.IntPtr*/
        st_01 = st_00;
        /* IL_07: box System.IntPtr*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_0C: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_11: stloc.0 */
        loc0 = st_03;
        /* IL_14: ldloc.0 */
        st_04 = loc0;
        /* IL_15: ret */
        return st_04;
    };
    asm.x6000040 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000041 = function get_Value(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldfld Object value*/
        st_01 = (st_00.r)().value;
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x6000042 = function get_Value(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldfld Object value*/
        st_01 = (st_00.r)().value;
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.SByte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.i1 */
        st_01 = (st_00.r)();
        /* IL_03: box System.SByte*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.Single"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.r4 */
        st_01 = (st_00.r)();
        /* IL_03: box System.Single*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
    };
    asm.x6000045 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x600004d = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000050 = function get_Message(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldfld String <Message>k__BackingField*/
        st_01 = (st_00)["SystemException<Message>k__BackingField"];
        /* IL_06: stloc.0 */
        loc0 = st_01;
        /* IL_09: ldloc.0 */
        st_02 = loc0;
        /* IL_0A: ret */
        return st_02;
    };;
    asm.x6000051 = function set_Message(arg0,arg1)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: stfld String <Message>k__BackingField*/
        (st_00)["SystemException<Message>k__BackingField"] = st_01;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000052 = function ToString(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call String get_Message()*/
        st_01 = (asm0.x6000050)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x600004e = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600004f = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        st_01 = arg0;
        /* IL_09: ldarg.1 */
        st_02 = arg1;
        /* IL_0A: call Void set_Message(System.String)*/
        (asm0.x6000051)(st_01,st_02);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000053 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600004e)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000054 = function _ctor(arg0)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldstr Operation not supported*/
        st_01 = new_string("Operation not supported");
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(st_00,st_01);
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x6000055 = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600004f)(st_00,st_01);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x6000059 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600005a = function _ctor(arg0)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        st_01 = new_string("Cannot cast from source type to destination type.");
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(st_00,st_01);
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600005b = function _ctor(arg0)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        st_01 = new_string("Operation is not valid due to the current state of the object");
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600004f)(st_00,st_01);
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x600005c = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600004f)(st_00,st_01);
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
        var st_16;
        var st_17;
        var st_18;
        var st_19;
        var st_1A;
        var st_1B;
        var st_1C;
        var st_1D;
        var st_1E;
        var st_1F;
        var st_20;
        var st_21;
        var st_22;
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
                st_00 = arg0;
                /* IL_02: ldind.i8 */
                st_01 = (st_00.r)();
                /* IL_03: stloc.0 */
                loc0 = st_01;
                /* IL_04: ldc.i4.s 10*/
                st_02 = (10|0);
                /* IL_06: conv.i8 */
                st_03 = conv_i8(st_02);
                /* IL_07: stloc.1 */
                loc1 = st_03;
                /* IL_08: ldstr */
                st_04 = new_string("");
                /* IL_0D: stloc.2 */
                loc2 = st_04;
                /* IL_0E: ldloc.0 */
                st_06 = loc0;
                /* IL_0F: ldc.i4.0 */
                st_05 = (0|0);
                /* IL_10: conv.i8 */
                st_07 = conv_i8(st_05);
                /* IL_12: clt */
                st_08 = (asm0.Int64_LessThan)(st_06,st_07);
                /* IL_13: ldc.i4.0 */
                st_09 = (0|0);
                /* IL_15: ceq */
                st_0A = (st_08 === st_09) ? (1) : (0);
                /* IL_16: stloc.s 5*/
                loc5 = st_0A;
                /* IL_18: ldloc.s 5*/
                st_0B = loc5;
                /* IL_1A: brtrue.s IL_37*/
                
                if (st_0B){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_1C: nop */
                
                /* IL_1D: ldstr -*/
                st_0F = new_string("-");
                /* IL_22: ldloc.0 */
                st_0C = loc0;
                /* IL_23: neg */
                st_0D = (asm0.Int64_UnaryNegation)(st_0C);
                /* IL_24: box System.Int64*/
                st_0E = {
                    'boxed': st_0D,
                    'type': t0,
                    'vtable': t0.prototype.vtable
                };
                /* IL_29: callvirt String ToString()*/
                st_10 = (((st_0E.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(st_0E));
                /* IL_2E: call String Concat(System.String, System.String)*/
                st_11 = (asm0.x60000ac)(st_0F,st_10);
                /* IL_33: stloc.s 4*/
                loc4 = st_11;
                /* IL_35: br.s IL_5E*/
                __pos_0__ = 0x5E;
                continue;
                case 0x37:
                /* IL_37: nop */
                
                /* IL_38: ldloc.0 */
                st_12 = loc0;
                /* IL_39: ldloc.1 */
                st_13 = loc1;
                /* IL_3A: rem */
                st_14 = (asm0.Int64_Modulus)(st_12,st_13);
                /* IL_3B: stloc.3 */
                loc3 = st_14;
                /* IL_3C: ldloc.3 */
                st_15 = loc3;
                /* IL_3D: call String GetLowString(System.Int64)*/
                st_16 = new_string(st_15[0].toString());
                /* IL_42: ldloc.2 */
                st_17 = loc2;
                /* IL_43: call String Concat(System.String, System.String)*/
                st_18 = (asm0.x60000ac)(st_16,st_17);
                /* IL_48: stloc.2 */
                loc2 = st_18;
                /* IL_49: ldloc.0 */
                st_19 = loc0;
                /* IL_4A: ldloc.1 */
                st_1A = loc1;
                /* IL_4B: div */
                st_1B = (asm0.Int64_Division)(st_19,st_1A);
                /* IL_4C: stloc.0 */
                loc0 = st_1B;
                /* IL_4D: nop */
                
                /* IL_4E: ldloc.0 */
                st_1D = loc0;
                /* IL_4F: ldc.i4.0 */
                st_1C = (0|0);
                /* IL_50: conv.i8 */
                st_1E = conv_i8(st_1C);
                /* IL_52: cgt */
                st_1F = (asm0.Int64_GreaterThan)(st_1D,st_1E);
                /* IL_53: stloc.s 5*/
                loc5 = st_1F;
                /* IL_55: ldloc.s 5*/
                st_20 = loc5;
                /* IL_57: brtrue.s IL_37*/
                
                if (st_20){
                    __pos_0__ = 0x37;
                    continue;
                }
                /* IL_59: ldloc.2 */
                st_21 = loc2;
                /* IL_5A: stloc.s 4*/
                loc4 = st_21;
                case 0x5E:
                /* IL_5E: ldloc.s 4*/
                st_22 = loc4;
                /* IL_60: ret */
                return st_22;
            }
        }
    };
    asm.x600005e = function Equals(arg0,arg1)
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
        /* IL_02: ldind.i8 */
        st_02 = (st_00.r)();
        /* IL_03: ldarg.1 */
        st_01 = arg1;
        /* IL_04: unbox.any System.Int64*/
        st_03 = unbox_any(st_01,((asm0)["System.Int64"])());
        /* IL_0A: ceq */
        st_04 = (st_02 === st_03) ? (1) : (0);
        /* IL_0B: stloc.0 */
        loc0 = st_04;
        /* IL_0E: ldloc.0 */
        st_05 = loc0;
        /* IL_0F: ret */
        return st_05;
    };;
    asm.x600005f = function GetHashCode(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.i8 */
        st_01 = (st_00.r)();
        /* IL_03: call Int32 GetLow(System.Int64)*/
        st_02 = st_01[0];
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_01 = arg0;
        /* IL_02: ldc.i4.1 */
        st_00 = (1|0);
        /* IL_03: conv.i8 */
        st_02 = conv_i8(st_00);
        /* IL_04: sub */
        st_03 = (asm0.XInt64_Subtraction)(st_01,st_02);
        /* IL_05: stloc.0 */
        loc0 = st_03;
        /* IL_08: ldloc.0 */
        st_04 = loc0;
        /* IL_09: ret */
        return st_04;
    };;
    asm.XInt64_Decrement = asm.x600006b;
    asm.x600006c = function op_Increment(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_01 = arg0;
        /* IL_02: ldc.i4.1 */
        st_00 = (1|0);
        /* IL_03: conv.i8 */
        st_02 = conv_i8(st_00);
        /* IL_04: add */
        st_03 = (asm0.XInt64_Addition)(st_01,st_02);
        /* IL_05: stloc.0 */
        loc0 = st_03;
        /* IL_08: ldloc.0 */
        st_04 = loc0;
        /* IL_09: ret */
        return st_04;
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
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x600007f = function _ctor(arg0,arg1)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
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
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000082 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        t0 = ((asm0)["System.EventArgs"])();
        /* IL_00: newobj Void .ctor()*/
        st_00 = newobj(t0,asm0.x6000082,[ null ]);
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = st_00;
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
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        st_01 = (asm0.x6000087)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x6000087 = function(o) { return o.jsarr.length; };;
    asm.x6000088 = function(o, i) { return box(o.jsarr[i], o.type); };;
    asm.x6000089 = function GetValue(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        st_02 = (asm0.x6000088)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
    };;
    asm.x600008a = function GetEnumerator(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        st_01 = (((st_00.vtable)["asm0.x600008b"])())(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x600008c = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        t1 = ((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]);
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: newobj Void .ctor(System.Array`1[T])*/
        st_01 = newobj(t1,asm0.x6000091,[ null,st_00 ]);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };
    asm.x600008f = function GetEnumeratorImpl(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        st_01 = (asm0.x600008e)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x6000090 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600008c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000092 = function get_Current(arg0)
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
        /* IL_02: ldfld Array`1 source*/
        st_02 = st_00.source;
        /* IL_07: ldarg.0 */
        st_01 = arg0;
        /* IL_08: ldfld Int32 index*/
        st_03 = st_01.index;
        /* IL_0D: callvirt T GetTypedValue(System.Int32)*/
        st_04 = st_02.jsarr[st_03];
        /* IL_12: stloc.0 */
        loc0 = st_04;
        /* IL_15: ldloc.0 */
        st_05 = loc0;
        /* IL_16: ret */
        return st_05;
    };;
    asm.x6000093 = function MoveNext(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var st_0B;
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
        st_06 = arg0;
        /* IL_10: ldfld Int32 index*/
        st_08 = st_06.index;
        /* IL_15: ldarg.0 */
        st_07 = arg0;
        /* IL_16: ldfld Int32 length*/
        st_09 = st_07.length;
        /* IL_1C: clt */
        st_0A = (st_08 < st_09) ? (1) : (0);
        /* IL_1D: stloc.0 */
        loc0 = st_0A;
        /* IL_20: ldloc.0 */
        st_0B = loc0;
        /* IL_21: ret */
        return st_0B;
    };;
    asm.x6000094 = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call T get_Current()*/
        st_01 = (asm0.x6000092)(st_00);
        /* IL_07: box T*/
        st_02 = box(st_01,t0);
        /* IL_0C: stloc.0 */
        loc0 = st_02;
        /* IL_0F: ldloc.0 */
        st_03 = loc0;
        /* IL_10: ret */
        return st_03;
    };;
    asm.x6000095 = function Reset(arg0)
    {
        var st_00;
        var st_01;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldc.i4.m1 */
        st_01 = (-1|0);
        /* IL_03: stfld Int32 index*/
        st_00.index = st_01;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        st_01 = arg0;
        /* IL_09: ldarg.1 */
        st_02 = arg1;
        /* IL_0A: stfld Array`1 source*/
        st_01.source = st_02;
        /* IL_0F: ldarg.0 */
        st_03 = arg0;
        /* IL_10: ldc.i4.m1 */
        st_04 = (-1|0);
        /* IL_11: stfld Int32 index*/
        st_03.index = st_04;
        /* IL_16: ldarg.0 */
        st_06 = arg0;
        /* IL_17: ldarg.1 */
        st_05 = arg1;
        /* IL_18: callvirt Int32 get_Length()*/
        st_07 = (asm0.x6000086)(st_05);
        /* IL_1D: stfld Int32 length*/
        st_06.length = st_07;
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    asm.x6000097 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000098 = function _ctor(arg0,arg1)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600009a = function get_HasValue(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldfld Boolean has_value*/
        st_01 = (st_00.r)().has_value;
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
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
                st_00 = arg0;
                /* IL_02: ldfld Boolean has_value*/
                st_01 = (st_00.r)().has_value;
                /* IL_07: stloc.1 */
                loc1 = st_01;
                /* IL_08: ldloc.1 */
                st_02 = loc1;
                /* IL_09: brtrue.s IL_16*/
                
                if (st_02){
                    __pos_0__ = 0x16;
                    continue;
                }
                /* IL_0B: ldstr Nullable object must have a value.*/
                st_03 = new_string("Nullable object must have a value.");
                /* IL_10: newobj Void .ctor(System.String)*/
                st_04 = newobj(t0,asm0.x600005c,[ null,st_03 ]);
                /* IL_15: throw */
                throw st_04;
                case 0x16:
                /* IL_16: ldarg.0 */
                st_05 = arg0;
                /* IL_17: ldfld T value*/
                st_06 = (st_05.r)().value;
                /* IL_1C: stloc.0 */
                loc0 = st_06;
                /* IL_1F: ldloc.0 */
                st_07 = loc0;
                /* IL_20: ret */
                return st_07;
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
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
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
                st_00 = arg1;
                /* IL_02: ldnull */
                st_01 = null;
                /* IL_04: ceq */
                st_02 = (st_00 === st_01) ? (1) : (0);
                /* IL_05: ldc.i4.0 */
                st_03 = (0|0);
                /* IL_07: ceq */
                st_04 = (st_02 === st_03) ? (1) : (0);
                /* IL_08: stloc.1 */
                loc1 = st_04;
                /* IL_09: ldloc.1 */
                st_05 = loc1;
                /* IL_0A: brtrue.s IL_18*/
                
                if (st_05){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_0C: ldarg.0 */
                st_06 = arg0;
                /* IL_0D: ldfld Boolean has_value*/
                st_07 = (st_06.r)().has_value;
                /* IL_12: ldc.i4.0 */
                st_08 = (0|0);
                /* IL_14: ceq */
                st_09 = (st_07 === st_08) ? (1) : (0);
                /* IL_15: stloc.0 */
                loc0 = st_09;
                /* IL_16: br.s IL_38*/
                __pos_0__ = 0x38;
                continue;
                case 0x18:
                /* IL_18: ldarg.1 */
                st_0A = arg1;
                /* IL_19: isinst System.Nullable`1[T]*/
                st_0B = (t1.IsInst)(st_0A);
                /* IL_1E: ldnull */
                st_0C = null;
                /* IL_20: cgt.un */
                st_0D = (st_0B > st_0C) ? (1) : (0);
                /* IL_21: stloc.1 */
                loc1 = st_0D;
                /* IL_22: ldloc.1 */
                st_0E = loc1;
                /* IL_23: brtrue.s IL_29*/
                
                if (st_0E){
                    __pos_0__ = 0x29;
                    continue;
                }
                /* IL_25: ldc.i4.0 */
                st_0F = (0|0);
                /* IL_26: stloc.0 */
                loc0 = st_0F;
                /* IL_27: br.s IL_38*/
                __pos_0__ = 0x38;
                continue;
                case 0x29:
                /* IL_29: ldarg.0 */
                st_11 = arg0;
                /* IL_2A: ldarg.1 */
                st_10 = arg1;
                /* IL_2B: unbox.any System.Nullable`1[T]*/
                st_12 = unbox_any(st_10,t1);
                /* IL_30: call Boolean Equals(System.Nullable`1[T])*/
                st_13 = (asm0.x600009d)(st_11,clone_value(st_12));
                /* IL_35: stloc.0 */
                loc0 = st_13;
                case 0x38:
                /* IL_38: ldloc.0 */
                st_14 = loc0;
                /* IL_39: ret */
                return st_14;
            }
        }
    };
    asm.x600009d = function Equals(arg0,arg1)
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
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
                st_00 = {
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                };
                /* IL_03: ldfld Boolean has_value*/
                st_02 = (st_00.r)().has_value;
                /* IL_08: ldarg.0 */
                st_01 = arg0;
                /* IL_09: ldfld Boolean has_value*/
                st_03 = (st_01.r)().has_value;
                /* IL_0F: ceq */
                st_04 = (st_02 === st_03) ? (1) : (0);
                /* IL_10: stloc.1 */
                loc1 = st_04;
                /* IL_11: ldloc.1 */
                st_05 = loc1;
                /* IL_12: brtrue.s IL_18*/
                
                if (st_05){
                    __pos_0__ = 0x18;
                    continue;
                }
                /* IL_14: ldc.i4.0 */
                st_06 = (0|0);
                /* IL_15: stloc.0 */
                loc0 = st_06;
                /* IL_16: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x18:
                /* IL_18: ldarg.0 */
                st_07 = arg0;
                /* IL_19: ldfld Boolean has_value*/
                st_08 = (st_07.r)().has_value;
                /* IL_1E: stloc.1 */
                loc1 = st_08;
                /* IL_1F: ldloc.1 */
                st_09 = loc1;
                /* IL_20: brtrue.s IL_26*/
                
                if (st_09){
                    __pos_0__ = 0x26;
                    continue;
                }
                /* IL_22: ldc.i4.1 */
                st_0A = (1|0);
                /* IL_23: stloc.0 */
                loc0 = st_0A;
                /* IL_24: br.s IL_46*/
                __pos_0__ = 0x46;
                continue;
                case 0x26:
                /* IL_26: ldarga.s 1*/
                st_0B = {
                    'w': function ()
                    {
                        arg1 = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return arg1;
                    }
                };
                /* IL_28: ldflda T value*/
                st_0E = {
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                };
                /* IL_2D: ldarg.0 */
                st_0C = arg0;
                /* IL_2E: ldfld T value*/
                st_0D = (st_0C.r)().value;
                /* IL_33: box T*/
                st_0F = box(st_0D,t0);
                /* IL_3E: callvirt Boolean Equals(System.Object)*/
                /* ignoring prefixes constrained.*/
                st_10 = (((st_0E.vtable)["asm0.x6000009"])())(st_0E,st_0F);
                /* IL_43: stloc.0 */
                loc0 = st_10;
                case 0x46:
                /* IL_46: ldloc.0 */
                st_11 = loc0;
                /* IL_47: ret */
                return st_11;
            }
        }
    };;
    asm.x600009e = function GetHashCode(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var __pos_0__;
        var loc1;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                st_00 = arg0;
                /* IL_02: ldfld Boolean has_value*/
                st_01 = (st_00.r)().has_value;
                /* IL_07: stloc.1 */
                loc1 = st_01;
                /* IL_08: ldloc.1 */
                st_02 = loc1;
                /* IL_09: brtrue.s IL_0F*/
                
                if (st_02){
                    __pos_0__ = 0xF;
                    continue;
                }
                /* IL_0B: ldc.i4.0 */
                st_03 = (0|0);
                /* IL_0C: stloc.0 */
                loc0 = st_03;
                /* IL_0D: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0xF:
                /* IL_0F: ldarg.0 */
                st_04 = arg0;
                /* IL_10: ldflda T value*/
                st_05 = {
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                };
                /* IL_1B: callvirt Int32 GetHashCode()*/
                /* ignoring prefixes constrained.*/
                st_06 = (((st_05.vtable)["asm0.x6000006"])())(st_05);
                /* IL_20: stloc.0 */
                loc0 = st_06;
                case 0x23:
                /* IL_23: ldloc.0 */
                st_07 = loc0;
                /* IL_24: ret */
                return st_07;
            }
        }
    };;
    asm.x600009f = function GetValueOrDefault(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldfld T value*/
        st_01 = (st_00.r)().value;
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x60000a0 = function GetValueOrDefault(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var __pos_0__;
        var loc0;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                st_00 = arg0;
                /* IL_02: ldfld Boolean has_value*/
                st_01 = (st_00.r)().has_value;
                /* IL_07: brtrue.s IL_0C*/
                
                if (st_01){
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
                st_04 = loc0;
                /* IL_17: ret */
                return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
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
                st_00 = arg0;
                /* IL_02: ldfld Boolean has_value*/
                st_01 = (st_00.r)().has_value;
                /* IL_07: ldc.i4.0 */
                st_02 = (0|0);
                /* IL_09: ceq */
                st_03 = (st_01 === st_02) ? (1) : (0);
                /* IL_0A: stloc.1 */
                loc1 = st_03;
                /* IL_0B: ldloc.1 */
                st_04 = loc1;
                /* IL_0C: brtrue.s IL_22*/
                
                if (st_04){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_0E: ldarg.0 */
                st_05 = arg0;
                /* IL_0F: ldflda T value*/
                st_06 = {
                    'w': function ()
                    {
                        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"] = (arguments)[0];
                    },
                    'r': function ()
                    {
                        return (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]))["value"];
                    }
                };
                /* IL_1A: callvirt String ToString()*/
                /* ignoring prefixes constrained.*/
                st_07 = (((st_06.vtable)["asm0.x6000005"])())(st_06);
                /* IL_1F: stloc.0 */
                loc0 = st_07;
                /* IL_20: br.s IL_2A*/
                __pos_0__ = 0x2A;
                continue;
                case 0x22:
                /* IL_22: ldsfld String Empty*/
                st_08 = t0.Empty;
                /* IL_27: stloc.0 */
                loc0 = st_08;
                case 0x2A:
                /* IL_2A: ldloc.0 */
                st_09 = loc0;
                /* IL_2B: ret */
                return st_09;
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
            var st_00;
            var st_01;
            var st_02;
            var loc0;
            t0 = T;
            t1 = ((asm0)["System.Nullable`1"])(T);
            /* IL_00: nop */
            /* IL_01: ldarg.0 */
            st_00 = arg0;
            /* IL_02: newobj Void .ctor(T)*/
            st_01 = newobj(t1,asm0.x6000099,[ null,clone_value(st_00) ]);
            /* IL_07: stloc.0 */
            loc0 = st_01;
            /* IL_0A: ldloc.0 */
            st_02 = loc0;
            /* IL_0B: ret */
            return st_02;
        };
    };
    asm.x60000a3 = function (T)
    {
        return function op_Explicit(arg0)
        {
            var st_00;
            var st_01;
            var st_02;
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            st_00 = {
                'w': function ()
                {
                    arg0 = (arguments)[0];
                },
                'r': function ()
                {
                    return arg0;
                }
            };
            /* IL_03: call T get_Value()*/
            st_01 = (asm0.x600009b)(st_00);
            /* IL_08: stloc.0 */
            loc0 = st_01;
            /* IL_0B: ldloc.0 */
            st_02 = loc0;
            /* IL_0C: ret */
            return st_02;
        };
    };;
    asm.x60000a4 = function (T)
    {
        return function Box(arg0)
        {
            var t0;
            var st_00;
            var st_01;
            var st_02;
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
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
                    st_00 = {
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    };
                    /* IL_03: ldfld Boolean has_value*/
                    st_01 = (st_00.r)().has_value;
                    /* IL_08: stloc.1 */
                    loc1 = st_01;
                    /* IL_09: ldloc.1 */
                    st_02 = loc1;
                    /* IL_0A: brtrue.s IL_10*/
                    
                    if (st_02){
                        __pos_0__ = 0x10;
                        continue;
                    }
                    /* IL_0C: ldnull */
                    st_03 = null;
                    /* IL_0D: stloc.0 */
                    loc0 = st_03;
                    /* IL_0E: br.s IL_1F*/
                    __pos_0__ = 0x1F;
                    continue;
                    case 0x10:
                    /* IL_10: ldarga.s 0*/
                    st_04 = {
                        'w': function ()
                        {
                            arg0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return arg0;
                        }
                    };
                    /* IL_12: ldfld T value*/
                    st_05 = (st_04.r)().value;
                    /* IL_17: box T*/
                    st_06 = box(st_05,t0);
                    /* IL_1C: stloc.0 */
                    loc0 = st_06;
                    case 0x1F:
                    /* IL_1F: ldloc.0 */
                    st_07 = loc0;
                    /* IL_20: ret */
                    return st_07;
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
            var st_00;
            var st_01;
            var st_02;
            var st_03;
            var st_04;
            var st_05;
            var st_06;
            var st_07;
            var st_08;
            var st_09;
            var st_0A;
            var st_0B;
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
                    st_00 = arg0;
                    /* IL_02: ldnull */
                    st_01 = null;
                    /* IL_04: ceq */
                    st_02 = (st_00 === st_01) ? (1) : (0);
                    /* IL_05: ldc.i4.0 */
                    st_03 = (0|0);
                    /* IL_07: ceq */
                    st_04 = (st_02 === st_03) ? (1) : (0);
                    /* IL_08: stloc.1 */
                    loc1 = st_04;
                    /* IL_09: ldloc.1 */
                    st_05 = loc1;
                    /* IL_0A: brtrue.s IL_18*/
                    
                    if (st_05){
                        __pos_0__ = 0x18;
                        continue;
                    }
                    /* IL_0C: ldloca.s 2*/
                    st_06 = {
                        'w': function ()
                        {
                            loc2 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc2;
                        }
                    };
                    /* IL_0F: initobj System.Nullable`1[T]*/
                    (t1.IsValueType) ? ((st_06.w)(new t1())) : (null);
                    /* IL_14: ldloc.2 */
                    st_07 = loc2;
                    /* IL_15: stloc.0 */
                    loc0 = st_07;
                    /* IL_16: br.s IL_26*/
                    __pos_0__ = 0x26;
                    continue;
                    case 0x18:
                    /* IL_18: ldarg.0 */
                    st_08 = arg0;
                    /* IL_19: unbox.any T*/
                    st_09 = unbox_any(st_08,t0);
                    /* IL_1E: newobj Void .ctor(T)*/
                    st_0A = newobj(t1,asm0.x6000099,[ null,clone_value(st_09) ]);
                    /* IL_23: stloc.0 */
                    loc0 = st_0A;
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    st_0B = loc0;
                    /* IL_27: ret */
                    return st_0B;
                }
            }
        };
    };
    asm.x6000099 = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldc.i4.1 */
        st_01 = (1|0);
        /* IL_03: stfld Boolean has_value*/
        (st_00.r)().has_value = st_01;
        /* IL_08: ldarg.0 */
        st_02 = arg0;
        /* IL_09: ldarg.1 */
        st_03 = arg1;
        /* IL_0A: stfld T value*/
        (st_02.r)().value = st_03;
        /* IL_0F: ret */
        return ;
    };;
    asm.x60000a6 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000a7 = function(o) { return o.jsstr.length; };;
    asm.x60000a8 = function(a, b) { return a.jsstr === b.jsstr; };;
    asm.x60000a9 = function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); };;
    asm.x60000aa = function (s, i) { return s.jsstr.charCodeAt(i); };;
    asm.x60000ab = function get_Chars(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        st_02 = (asm0.x60000aa)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var st_05;
        var st_06;
        var st_07;
        var st_08;
        var st_09;
        var st_0A;
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        st_00 = (2|0);
        /* IL_02: newarr System.String*/
        st_01 = new_array(t0,st_00);
        /* IL_07: stloc.1 */
        loc1 = st_01;
        /* IL_08: ldloc.1 */
        st_02 = loc1;
        /* IL_09: ldc.i4.0 */
        st_03 = (0|0);
        /* IL_0A: ldarg.0 */
        st_04 = arg0;
        /* IL_0B: stelem.ref */
        (st_02.jsarr)[st_03] = st_04;
        /* IL_0C: ldloc.1 */
        st_05 = loc1;
        /* IL_0D: ldc.i4.1 */
        st_06 = (1|0);
        /* IL_0E: ldarg.1 */
        st_07 = arg1;
        /* IL_0F: stelem.ref */
        (st_05.jsarr)[st_06] = st_07;
        /* IL_10: ldloc.1 */
        st_08 = loc1;
        /* IL_11: call String ConcatImpl(System.String[])*/
        st_09 = (asm0.x60000a9)(st_08);
        /* IL_16: stloc.0 */
        loc0 = st_09;
        /* IL_19: ldloc.0 */
        st_0A = loc0;
        /* IL_1A: ret */
        return st_0A;
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
        var st_00;
        var st_01;
        var st_02;
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
        var loc1;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldc.i4.2 */
        st_00 = (2|0);
        /* IL_02: newarr System.String*/
        st_01 = new_array(t0,st_00);
        /* IL_07: stloc.1 */
        loc1 = st_01;
        /* IL_08: ldloc.1 */
        st_03 = loc1;
        /* IL_09: ldc.i4.0 */
        st_04 = (0|0);
        /* IL_0A: ldarg.0 */
        st_02 = arg0;
        /* IL_0B: callvirt String ToString()*/
        st_05 = (((st_02.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(st_02));
        /* IL_10: stelem.ref */
        (st_03.jsarr)[st_04] = st_05;
        /* IL_11: ldloc.1 */
        st_07 = loc1;
        /* IL_12: ldc.i4.1 */
        st_08 = (1|0);
        /* IL_13: ldarg.1 */
        st_06 = arg1;
        /* IL_14: callvirt String ToString()*/
        st_09 = (((st_06.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(st_06));
        /* IL_19: stelem.ref */
        (st_07.jsarr)[st_08] = st_09;
        /* IL_1A: ldloc.1 */
        st_0A = loc1;
        /* IL_1B: call String ConcatImpl(System.String[])*/
        st_0B = (asm0.x60000a9)(st_0A);
        /* IL_20: stloc.0 */
        loc0 = st_0B;
        /* IL_23: ldloc.0 */
        st_0C = loc0;
        /* IL_24: ret */
        return st_0C;
    };
    asm.x60000ae = function Concat(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call String ConcatImpl(System.String[])*/
        st_01 = (asm0.x60000a9)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
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
        var st_00;
        var st_01;
        t0 = ((asm0)["System.Exception"])();
        /* IL_00: nop */
        /* IL_01: ldstr Not implemented*/
        st_00 = new_string("Not implemented");
        /* IL_06: newobj Void .ctor(System.String)*/
        st_01 = newobj(t0,asm0.x600004f,[ null,st_00 ]);
        /* IL_0B: throw */
        throw st_01;
    };
    asm.x60000b0 = function get_Length(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        st_01 = (asm0.x60000a7)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x60000b1 = function ToString(arg0)
    {
        var st_00;
        var st_01;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: stloc.0 */
        loc0 = st_00;
        /* IL_05: ldloc.0 */
        st_01 = loc0;
        /* IL_06: ret */
        return st_01;
    };;
    asm.x60000b2 = function op_Inequality(arg0,arg1)
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
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        st_02 = (asm0.x60000a8)(st_00,st_01);
        /* IL_08: ldc.i4.0 */
        st_03 = (0|0);
        /* IL_0A: ceq */
        st_04 = (st_02 === st_03) ? (1) : (0);
        /* IL_0B: stloc.0 */
        loc0 = st_04;
        /* IL_0E: ldloc.0 */
        st_05 = loc0;
        /* IL_0F: ret */
        return st_05;
    };;
    asm.x60000b3 = function op_Equality(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        st_02 = (asm0.x60000a8)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
    };;
    asm.x60000b4 = function Equals(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldarg.1 */
        st_01 = arg1;
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        st_02 = (asm0.x60000a8)(st_00,st_01);
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_01 = arg0;
        /* IL_02: ldarg.1 */
        st_00 = arg1;
        /* IL_03: castclass System.String*/
        st_02 = cast_class(st_00,t0);
        /* IL_08: call Boolean Equals(System.String)*/
        st_03 = (asm0.x60000b4)(st_01,st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        st_01 = (asm0.x60000b6)(st_00);
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x60000b8 = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        t0 = ((asm0)["System.String"])();
        /* IL_00: ldstr */
        st_00 = new_string("");
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = st_00;
        /* IL_0A: ret */
        return ;
    };
    asm.x60000bb = function get_MemberName(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldfld String member_name*/
        st_01 = st_00.System_ReflectionDefaultMemberAttributemember_name;
        /* IL_07: stloc.0 */
        loc0 = st_01;
        /* IL_0A: ldloc.0 */
        st_02 = loc0;
        /* IL_0B: ret */
        return st_02;
    };;
    asm.x60000ba = function _ctor(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        (asm0.x600000c)(st_00);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        st_01 = arg0;
        /* IL_09: ldarg.1 */
        st_02 = arg1;
        /* IL_0A: stfld String member_name*/
        st_01.System_ReflectionDefaultMemberAttributemember_name = st_02;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    asm.x60000bd = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.UInt16"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.u2 */
        st_01 = (st_00.r)();
        /* IL_03: box System.UInt16*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.UInt32"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.u4 */
        st_01 = (st_00.r)();
        /* IL_03: box System.UInt32*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_08: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_0D: stloc.0 */
        loc0 = st_03;
        /* IL_10: ldloc.0 */
        st_04 = loc0;
        /* IL_11: ret */
        return st_04;
    };
    asm.x60000c0 = function ToString(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
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
        var st_0E;
        var st_0F;
        var st_10;
        var st_11;
        var st_12;
        var st_13;
        var st_14;
        var st_15;
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
                st_00 = arg0;
                /* IL_02: ldind.i8 */
                st_01 = (st_00.r)();
                /* IL_03: stloc.0 */
                loc0 = st_01;
                /* IL_04: ldc.i4.s 10*/
                st_02 = (10|0);
                /* IL_06: conv.i8 */
                st_03 = conv_i8(st_02);
                /* IL_07: stloc.1 */
                loc1 = st_03;
                /* IL_08: ldstr */
                st_04 = new_string("");
                /* IL_0D: stloc.2 */
                loc2 = st_04;
                case 0xE:
                /* IL_0E: nop */
                
                /* IL_0F: ldloc.0 */
                st_05 = loc0;
                /* IL_10: ldloc.1 */
                st_06 = loc1;
                /* IL_11: rem.un */
                st_07 = (asm0.UInt64_Modulus)(st_05,st_06);
                /* IL_12: stloc.3 */
                loc3 = st_07;
                /* IL_13: ldloc.3 */
                st_08 = loc3;
                /* IL_14: call String GetLowString(System.UInt64)*/
                st_09 = new_string(st_08[0].toString());
                /* IL_19: ldloc.2 */
                st_0A = loc2;
                /* IL_1A: call String Concat(System.String, System.String)*/
                st_0B = (asm0.x60000ac)(st_09,st_0A);
                /* IL_1F: stloc.2 */
                loc2 = st_0B;
                /* IL_20: ldloc.0 */
                st_0C = loc0;
                /* IL_21: ldloc.1 */
                st_0D = loc1;
                /* IL_22: div.un */
                st_0E = (asm0.UInt64_Division)(st_0C,st_0D);
                /* IL_23: stloc.0 */
                loc0 = st_0E;
                /* IL_24: nop */
                
                /* IL_25: ldloc.0 */
                st_10 = loc0;
                /* IL_26: ldc.i4.0 */
                st_0F = (0|0);
                /* IL_27: conv.i8 */
                st_11 = conv_i8(st_0F);
                /* IL_29: cgt.un */
                st_12 = (asm0.UInt64_GreaterThan)(st_10,st_11);
                /* IL_2A: stloc.s 5*/
                loc5 = st_12;
                /* IL_2C: ldloc.s 5*/
                st_13 = loc5;
                /* IL_2E: brtrue.s IL_0E*/
                
                if (st_13){
                    __pos_0__ = 0xE;
                    continue;
                }
                /* IL_30: ldloc.2 */
                st_14 = loc2;
                /* IL_31: stloc.s 4*/
                loc4 = st_14;
                /* IL_35: ldloc.s 4*/
                st_15 = loc4;
                /* IL_37: ret */
                return st_15;
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
        /* IL_02: ldind.i8 */
        st_02 = (st_00.r)();
        /* IL_03: ldarg.1 */
        st_01 = arg1;
        /* IL_04: unbox.any System.UInt64*/
        st_03 = unbox_any(st_01,((asm0)["System.UInt64"])());
        /* IL_0A: ceq */
        st_04 = (st_02 === st_03) ? (1) : (0);
        /* IL_0B: stloc.0 */
        loc0 = st_04;
        /* IL_0E: ldloc.0 */
        st_05 = loc0;
        /* IL_0F: ret */
        return st_05;
    };;
    asm.x60000cb = function GetHashCode(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldind.i8 */
        st_01 = (st_00.r)();
        /* IL_03: call Int32 GetLow(System.UInt64)*/
        st_02 = st_01[0];
        /* IL_08: stloc.0 */
        loc0 = st_02;
        /* IL_0B: ldloc.0 */
        st_03 = loc0;
        /* IL_0C: ret */
        return st_03;
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
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        var loc0;
        t0 = ((asm0)["System.UIntPtr"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        st_00 = arg0;
        /* IL_02: ldobj System.UIntPtr*/
        st_01 = st_00;
        /* IL_07: box System.UIntPtr*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_0C: call String NumberStructToString(System.Object)*/
        st_03 = (asm0.x600003e)(st_02);
        /* IL_11: stloc.0 */
        loc0 = st_03;
        /* IL_14: ldloc.0 */
        st_04 = loc0;
        /* IL_15: ret */
        return st_04;
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
                Nullable_1.prototype.value = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
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
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000b = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000c = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600000d = function (T)
    {
        return function CreateDefault()
        {
            var t0;
            var loc0;
            var st_00;
            var st_01;
            t0 = T;
            loc0 = (T.IsValueType) ? ((T.IsPrimitive) ? (0) : (new T())) : (null);
            /* IL_00: ldloca.s 0*/
            st_00 = {
                'w': function ()
                {
                    loc0 = (arguments)[0];
                },
                'r': function ()
                {
                    return loc0;
                }
            };
            /* IL_03: initobj T*/
            (t0.IsValueType) ? ((st_00.w)(new t0())) : (null);
            /* IL_08: ldloc.0 */
            st_01 = loc0;
            /* IL_09: ret */
            return st_01;
        };
    };;
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function ()
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e.apply)(this,arguments);
    };;
    asm.x600000e_ = function Main()
    {
        var t0;
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldc.i4.0 */
        st_00 = (0|0);
        /* IL_01: box System.Int32*/
        st_01 = {
            'boxed': st_00,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_06: call Void Log(System.Object)*/
        (asm1.x6000001)(st_01);
        /* IL_0B: ldnull */
        st_02 = null;
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_02);
        /* IL_11: ldnull */
        st_03 = null;
        /* IL_12: call Void Log(System.Object)*/
        (asm1.x6000001)(st_03);
        /* IL_17: ret */
        return ;
    };
    asm.x600000f = function _ctor(arg0)
    {
        var st_00;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
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
                A.Interfaces = [  ];
                A.IsInst = function (t) { return t instanceof A ? t : null; };
                A.IsValueType = false;
                A.IsPrimitive = false;
                A.IsNullable = false;
                A.ArrayType = Array;
                A.prototype.vtable = {
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
            A.prototype = new (((asm0)["System.Object"])())();
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
    asm.entryPoint = asm.x600000e;
})(asm1 || (asm1 = {}));
