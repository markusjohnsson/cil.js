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
        var st_70;
        var st_71;
        var st_72;
        var st_73;
        var st_74;
        var st_75;
        var st_76;
        var st_77;
        var st_78;
        var st_79;
        var st_7A;
        var st_7B;
        var st_7C;
        var st_7D;
        var st_7E;
        var st_7F;
        var st_80;
        var st_81;
        var st_82;
        var st_83;
        var st_84;
        var st_85;
        var st_86;
        var st_87;
        var st_88;
        var st_89;
        var st_8A;
        var st_8B;
        var st_8C;
        var st_8D;
        var st_8E;
        var st_8F;
        var st_90;
        var st_91;
        var st_92;
        var st_93;
        var st_94;
        var st_95;
        var st_96;
        var st_97;
        var st_98;
        var st_99;
        var st_9A;
        var st_9B;
        var st_9C;
        var st_9D;
        var st_9E;
        var st_9F;
        var st_A0;
        var st_A1;
        var st_A2;
        var st_A3;
        var st_A4;
        var st_A5;
        var st_A6;
        var st_A7;
        var st_A8;
        var st_A9;
        var st_AA;
        var st_AB;
        var st_AC;
        var st_AD;
        var st_AE;
        var st_AF;
        var st_B0;
        var st_B1;
        var st_B2;
        var st_B3;
        var st_B4;
        var st_B5;
        var st_B6;
        var st_B7;
        var st_B8;
        var st_B9;
        var st_BA;
        var st_BB;
        var st_BC;
        var st_BD;
        var st_BE;
        var st_BF;
        var st_C0;
        var st_C1;
        var st_C2;
        var st_C3;
        var st_C4;
        var st_C5;
        var st_C6;
        var st_C7;
        var st_C8;
        var st_C9;
        var st_CA;
        var st_CB;
        var st_CC;
        var st_CD;
        var st_CE;
        var st_CF;
        var st_D0;
        var st_D1;
        var st_D2;
        var st_D3;
        var st_D4;
        var st_D5;
        var st_D6;
        var st_D7;
        var st_D8;
        var st_D9;
        var st_DA;
        var st_DB;
        var st_DC;
        var st_DD;
        var st_DE;
        var st_DF;
        var st_E0;
        var st_E1;
        var st_E2;
        var st_E3;
        var st_E4;
        var st_E5;
        var st_E6;
        var st_E7;
        var st_E8;
        var st_E9;
        var st_EA;
        var st_EB;
        var st_EC;
        var st_ED;
        var st_EE;
        var st_EF;
        var st_F0;
        var st_F1;
        var st_F2;
        var st_F3;
        var st_F4;
        var st_F5;
        var st_F6;
        var st_F7;
        var st_F8;
        var st_F9;
        var st_FA;
        var st_FB;
        var st_FC;
        var st_FD;
        var st_FE;
        var st_FF;
        var st_100;
        var st_101;
        var st_102;
        var st_103;
        var st_104;
        var st_105;
        var st_106;
        var st_107;
        var st_108;
        var st_109;
        var st_10A;
        var st_10B;
        var st_10C;
        var st_10D;
        var st_10E;
        var st_10F;
        var st_110;
        var st_111;
        var st_112;
        var st_113;
        var st_114;
        var st_115;
        var st_116;
        var st_117;
        var st_118;
        var st_119;
        var st_11A;
        var st_11B;
        var st_11C;
        var st_11D;
        var st_11E;
        var st_11F;
        var st_120;
        var st_121;
        var st_122;
        var st_123;
        var st_124;
        var st_125;
        var st_126;
        var st_127;
        var st_128;
        var st_129;
        var st_12A;
        var st_12B;
        var st_12C;
        var st_12D;
        var st_12E;
        var st_12F;
        var st_130;
        var st_131;
        var st_132;
        var st_133;
        var st_134;
        var st_135;
        var st_136;
        var st_137;
        var st_138;
        var st_139;
        var st_13A;
        var st_13B;
        var st_13C;
        var st_13D;
        var st_13E;
        var st_13F;
        var st_140;
        var st_141;
        var st_142;
        var st_143;
        var st_144;
        var st_145;
        var st_146;
        var st_147;
        var st_148;
        var st_149;
        var st_14A;
        var st_14B;
        var st_14C;
        var st_14D;
        var st_14E;
        var st_14F;
        var st_150;
        var st_151;
        var st_152;
        var st_153;
        var st_154;
        var st_155;
        var st_156;
        var st_157;
        var st_158;
        var st_159;
        var st_15A;
        var st_15B;
        var st_15C;
        var st_15D;
        var st_15E;
        var st_15F;
        var st_160;
        var st_161;
        var st_162;
        var st_163;
        var st_164;
        var st_165;
        var st_166;
        var st_167;
        var st_168;
        var st_169;
        var st_16A;
        var st_16B;
        var st_16C;
        var st_16D;
        var st_16E;
        var st_16F;
        var st_170;
        var st_171;
        var st_172;
        var st_173;
        var st_174;
        var st_175;
        var st_176;
        var st_177;
        var st_178;
        var st_179;
        var st_17A;
        var st_17B;
        var st_17C;
        var st_17D;
        var st_17E;
        var st_17F;
        var st_180;
        var st_181;
        var st_182;
        var st_183;
        var st_184;
        var st_185;
        var st_186;
        var st_187;
        var st_188;
        var st_189;
        var st_18A;
        var st_18B;
        var st_18C;
        var st_18D;
        var st_18E;
        var st_18F;
        var st_190;
        var st_191;
        var st_192;
        var st_193;
        var st_194;
        var st_195;
        var st_196;
        var st_197;
        var st_198;
        var st_199;
        var st_19A;
        var st_19B;
        var st_19C;
        var st_19D;
        var st_19E;
        var st_19F;
        var st_1A0;
        var st_1A1;
        var st_1A2;
        var st_1A3;
        var st_1A4;
        var st_1A5;
        var st_1A6;
        var st_1A7;
        var st_1A8;
        var st_1A9;
        var st_1AA;
        var st_1AB;
        var st_1AC;
        var st_1AD;
        var st_1AE;
        var st_1AF;
        var st_1B0;
        var st_1B1;
        var st_1B2;
        var st_1B3;
        var st_1B4;
        var st_1B5;
        var st_1B6;
        var st_1B7;
        var st_1B8;
        var st_1B9;
        var st_1BA;
        var st_1BB;
        var st_1BC;
        var st_1BD;
        var st_1BE;
        var st_1BF;
        var st_1C0;
        var st_1C1;
        var st_1C2;
        var st_1C3;
        var st_1C4;
        var st_1C5;
        var st_1C6;
        var st_1C7;
        var st_1C8;
        var st_1C9;
        var st_1CA;
        var st_1CB;
        var st_1CC;
        var st_1CD;
        var st_1CE;
        var st_1CF;
        var st_1D0;
        var st_1D1;
        var st_1D2;
        var st_1D3;
        var st_1D4;
        var st_1D5;
        var st_1D6;
        var st_1D7;
        var st_1D8;
        var st_1D9;
        var st_1DA;
        var st_1DB;
        var st_1DC;
        var st_1DD;
        var st_1DE;
        var st_1DF;
        var st_1E0;
        var st_1E1;
        var st_1E2;
        var st_1E3;
        var st_1E4;
        var st_1E5;
        var st_1E6;
        var st_1E7;
        var st_1E8;
        var st_1E9;
        var st_1EA;
        var st_1EB;
        var st_1EC;
        var st_1ED;
        var st_1EE;
        var st_1EF;
        var st_1F0;
        var st_1F1;
        var st_1F2;
        var st_1F3;
        var st_1F4;
        var st_1F5;
        var st_1F6;
        var st_1F7;
        var st_1F8;
        var st_1F9;
        var st_1FA;
        var st_1FB;
        var st_1FC;
        var st_1FD;
        var st_1FE;
        var st_1FF;
        var st_200;
        var st_201;
        var st_202;
        var st_203;
        var st_204;
        var st_205;
        var st_206;
        var st_207;
        var st_208;
        var st_209;
        var st_20A;
        var st_20B;
        var st_20C;
        var st_20D;
        var st_20E;
        var st_20F;
        var st_210;
        var st_211;
        var st_212;
        var st_213;
        var st_214;
        var st_215;
        var st_216;
        var st_217;
        var st_218;
        var st_219;
        var st_21A;
        var st_21B;
        var st_21C;
        var st_21D;
        var st_21E;
        var st_21F;
        var st_220;
        var st_221;
        var st_222;
        var st_223;
        var st_224;
        var st_225;
        var st_226;
        var st_227;
        var st_228;
        var st_229;
        var st_22A;
        var st_22B;
        var st_22C;
        var st_22D;
        var st_22E;
        var st_22F;
        var st_230;
        var st_231;
        var st_232;
        var st_233;
        var st_234;
        var st_235;
        var st_236;
        var st_237;
        var st_238;
        var st_239;
        var st_23A;
        var st_23B;
        var st_23C;
        var st_23D;
        var st_23E;
        var st_23F;
        var st_240;
        var st_241;
        var st_242;
        var st_243;
        var st_244;
        var st_245;
        var st_246;
        var st_247;
        var st_248;
        var st_249;
        var st_24A;
        var st_24B;
        var st_24C;
        var st_24D;
        var st_24E;
        var st_24F;
        var st_250;
        var st_251;
        var st_252;
        var st_253;
        var st_254;
        var st_255;
        var st_256;
        var st_257;
        var st_258;
        var st_259;
        var st_25A;
        var st_25B;
        var st_25C;
        var st_25D;
        var st_25E;
        var st_25F;
        var st_260;
        var st_261;
        var st_262;
        var st_263;
        var st_264;
        var st_265;
        var st_266;
        var st_267;
        var st_268;
        var st_269;
        var st_26A;
        var st_26B;
        var st_26C;
        var st_26D;
        var st_26E;
        var st_26F;
        var st_270;
        var st_271;
        var st_272;
        var st_273;
        var st_274;
        var st_275;
        var st_276;
        var st_277;
        var st_278;
        var st_279;
        var st_27A;
        var st_27B;
        var st_27C;
        var st_27D;
        var st_27E;
        var st_27F;
        var st_280;
        var st_281;
        var st_282;
        var st_283;
        var st_284;
        var st_285;
        var st_286;
        var st_287;
        var st_288;
        var st_289;
        var st_28A;
        var st_28B;
        var st_28C;
        var st_28D;
        var st_28E;
        var st_28F;
        var st_290;
        var st_291;
        var st_292;
        var st_293;
        var st_294;
        var st_295;
        var st_296;
        var st_297;
        var st_298;
        var st_299;
        var st_29A;
        var st_29B;
        var st_29C;
        var st_29D;
        var st_29E;
        var st_29F;
        var st_2A0;
        var st_2A1;
        var st_2A2;
        var st_2A3;
        var st_2A4;
        var st_2A5;
        var st_2A6;
        var st_2A7;
        var st_2A8;
        var st_2A9;
        var st_2AA;
        var st_2AB;
        var st_2AC;
        var st_2AD;
        var st_2AE;
        var st_2AF;
        var st_2B0;
        var st_2B1;
        var st_2B2;
        var st_2B3;
        var st_2B4;
        var st_2B5;
        var st_2B6;
        var st_2B7;
        var st_2B8;
        var st_2B9;
        var st_2BA;
        var st_2BB;
        var st_2BC;
        var st_2BD;
        var st_2BE;
        var st_2BF;
        var st_2C0;
        var st_2C1;
        var st_2C2;
        var st_2C3;
        var st_2C4;
        var st_2C5;
        var st_2C6;
        var st_2C7;
        var st_2C8;
        var st_2C9;
        var st_2CA;
        var st_2CB;
        var st_2CC;
        var st_2CD;
        var st_2CE;
        var st_2CF;
        var st_2D0;
        var st_2D1;
        var st_2D2;
        var st_2D3;
        var st_2D4;
        var st_2D5;
        var st_2D6;
        var st_2D7;
        var st_2D8;
        var st_2D9;
        var st_2DA;
        var st_2DB;
        var st_2DC;
        var st_2DD;
        var st_2DE;
        var st_2DF;
        var st_2E0;
        var st_2E1;
        var st_2E2;
        var st_2E3;
        var st_2E4;
        var st_2E5;
        var st_2E6;
        var st_2E7;
        var st_2E8;
        var st_2E9;
        var st_2EA;
        var st_2EB;
        var st_2EC;
        var st_2ED;
        var st_2EE;
        var st_2EF;
        var st_2F0;
        var st_2F1;
        var st_2F2;
        var st_2F3;
        var st_2F4;
        var st_2F5;
        var st_2F6;
        var st_2F7;
        var st_2F8;
        var st_2F9;
        var st_2FA;
        var st_2FB;
        var st_2FC;
        var st_2FD;
        var st_2FE;
        var st_2FF;
        var st_300;
        var st_301;
        var st_302;
        var st_303;
        var st_304;
        var st_305;
        var st_306;
        var st_307;
        var st_308;
        var st_309;
        var st_30A;
        var st_30B;
        var st_30C;
        var st_30D;
        var st_30E;
        var st_30F;
        var st_310;
        var st_311;
        var st_312;
        var st_313;
        var st_314;
        var st_315;
        var st_316;
        var st_317;
        var st_318;
        var st_319;
        var st_31A;
        var st_31B;
        var st_31C;
        var st_31D;
        var st_31E;
        var st_31F;
        var st_320;
        var st_321;
        var st_322;
        var st_323;
        var st_324;
        var st_325;
        var st_326;
        var st_327;
        var st_328;
        var st_329;
        var st_32A;
        var st_32B;
        var st_32C;
        var st_32D;
        var st_32E;
        var st_32F;
        var st_330;
        var st_331;
        var st_332;
        var st_333;
        var st_334;
        var st_335;
        var st_336;
        var st_337;
        var st_338;
        var st_339;
        var st_33A;
        var st_33B;
        var st_33C;
        var st_33D;
        var st_33E;
        var st_33F;
        var st_340;
        var st_341;
        var st_342;
        var st_343;
        var st_344;
        var st_345;
        var st_346;
        var st_347;
        var st_348;
        var st_349;
        var st_34A;
        var st_34B;
        var st_34C;
        var st_34D;
        var st_34E;
        var st_34F;
        var st_350;
        var st_351;
        var st_352;
        var st_353;
        var st_354;
        var st_355;
        var st_356;
        var st_357;
        var st_358;
        var st_359;
        var st_35A;
        var st_35B;
        var st_35C;
        var st_35D;
        var st_35E;
        var st_35F;
        var st_360;
        var st_361;
        var st_362;
        var st_363;
        var st_364;
        var st_365;
        var st_366;
        var st_367;
        var st_368;
        var st_369;
        var st_36A;
        var st_36B;
        var st_36C;
        var st_36D;
        var st_36E;
        var st_36F;
        var st_370;
        var st_371;
        var st_372;
        var st_373;
        var st_374;
        var st_375;
        var st_376;
        var st_377;
        var st_378;
        var st_379;
        var st_37A;
        var st_37B;
        var st_37C;
        var st_37D;
        var st_37E;
        var st_37F;
        var st_380;
        var st_381;
        var st_382;
        var st_383;
        var st_384;
        var st_385;
        var st_386;
        var st_387;
        var st_388;
        var st_389;
        var st_38A;
        var st_38B;
        var st_38C;
        var st_38D;
        var st_38E;
        var st_38F;
        var st_390;
        var st_391;
        var st_392;
        var st_393;
        var st_394;
        var st_395;
        var st_396;
        var st_397;
        var st_398;
        var st_399;
        var st_39A;
        var st_39B;
        var st_39C;
        var st_39D;
        var st_39E;
        var st_39F;
        var st_3A0;
        var st_3A1;
        var st_3A2;
        var st_3A3;
        var st_3A4;
        var st_3A5;
        var st_3A6;
        var st_3A7;
        var st_3A8;
        var st_3A9;
        var st_3AA;
        var st_3AB;
        var st_3AC;
        var st_3AD;
        var st_3AE;
        var st_3AF;
        var st_3B0;
        var st_3B1;
        var st_3B2;
        var st_3B3;
        var st_3B4;
        var st_3B5;
        var st_3B6;
        var st_3B7;
        var st_3B8;
        var st_3B9;
        var st_3BA;
        var st_3BB;
        var st_3BC;
        var st_3BD;
        var st_3BE;
        var st_3BF;
        var st_3C0;
        var st_3C1;
        var st_3C2;
        var st_3C3;
        var st_3C4;
        var st_3C5;
        var st_3C6;
        var st_3C7;
        var st_3C8;
        var st_3C9;
        var st_3CA;
        var st_3CB;
        var st_3CC;
        var st_3CD;
        var st_3CE;
        var st_3CF;
        var st_3D0;
        var st_3D1;
        var st_3D2;
        var st_3D3;
        var st_3D4;
        var st_3D5;
        var st_3D6;
        var st_3D7;
        var st_3D8;
        var st_3D9;
        var st_3DA;
        var st_3DB;
        var st_3DC;
        var st_3DD;
        var st_3DE;
        var st_3DF;
        var st_3E0;
        var st_3E1;
        var st_3E2;
        var st_3E3;
        var st_3E4;
        var st_3E5;
        var st_3E6;
        var st_3E7;
        var st_3E8;
        var st_3E9;
        var st_3EA;
        var st_3EB;
        var st_3EC;
        var st_3ED;
        var st_3EE;
        var st_3EF;
        var st_3F0;
        var st_3F1;
        var st_3F2;
        var st_3F3;
        var st_3F4;
        var st_3F5;
        var st_3F6;
        var st_3F7;
        var st_3F8;
        var st_3F9;
        var st_3FA;
        var st_3FB;
        var st_3FC;
        var st_3FD;
        var st_3FE;
        var st_3FF;
        var st_400;
        var st_401;
        var st_402;
        var st_403;
        var st_404;
        var st_405;
        var st_406;
        var st_407;
        var st_408;
        var st_409;
        var st_40A;
        var st_40B;
        var st_40C;
        var st_40D;
        var st_40E;
        var st_40F;
        var st_410;
        var st_411;
        var st_412;
        var st_413;
        var st_414;
        var st_415;
        var st_416;
        var st_417;
        var st_418;
        var st_419;
        var st_41A;
        var st_41B;
        var st_41C;
        var st_41D;
        var st_41E;
        var st_41F;
        var st_420;
        var st_421;
        var st_422;
        var st_423;
        var st_424;
        var st_425;
        var st_426;
        var st_427;
        var st_428;
        var st_429;
        var st_42A;
        var st_42B;
        var st_42C;
        var st_42D;
        var st_42E;
        var st_42F;
        var st_430;
        var st_431;
        var st_432;
        var st_433;
        var st_434;
        var st_435;
        var st_436;
        var st_437;
        var st_438;
        var st_439;
        var st_43A;
        var st_43B;
        var st_43C;
        var st_43D;
        var st_43E;
        var st_43F;
        var st_440;
        var st_441;
        var st_442;
        var st_443;
        var st_444;
        var st_445;
        var st_446;
        var st_447;
        var st_448;
        var st_449;
        var st_44A;
        var st_44B;
        var st_44C;
        var st_44D;
        var st_44E;
        var st_44F;
        var st_450;
        var st_451;
        var st_452;
        var st_453;
        var st_454;
        var st_455;
        var st_456;
        var st_457;
        var st_458;
        var st_459;
        var st_45A;
        var st_45B;
        var st_45C;
        var st_45D;
        var st_45E;
        var st_45F;
        var st_460;
        var st_461;
        var st_462;
        var st_463;
        var st_464;
        var st_465;
        var st_466;
        var st_467;
        var st_468;
        var st_469;
        var st_46A;
        var st_46B;
        var st_46C;
        var st_46D;
        var st_46E;
        var st_46F;
        var st_470;
        var st_471;
        var st_472;
        var st_473;
        var st_474;
        var st_475;
        var st_476;
        var st_477;
        var st_478;
        var st_479;
        var st_47A;
        var st_47B;
        var st_47C;
        var st_47D;
        var st_47E;
        var st_47F;
        var st_480;
        var st_481;
        var st_482;
        var st_483;
        var st_484;
        var st_485;
        var st_486;
        var st_487;
        var st_488;
        var st_489;
        var st_48A;
        var st_48B;
        var st_48C;
        var st_48D;
        var st_48E;
        var st_48F;
        var st_490;
        var st_491;
        var st_492;
        var st_493;
        var st_494;
        var st_495;
        var st_496;
        var st_497;
        var st_498;
        var st_499;
        var st_49A;
        var st_49B;
        var st_49C;
        var st_49D;
        var st_49E;
        var st_49F;
        var st_4A0;
        var st_4A1;
        var st_4A2;
        var st_4A3;
        var st_4A4;
        var st_4A5;
        var st_4A6;
        var st_4A7;
        var st_4A8;
        var st_4A9;
        var st_4AA;
        var st_4AB;
        var st_4AC;
        var st_4AD;
        var st_4AE;
        var st_4AF;
        var st_4B0;
        var st_4B1;
        var st_4B2;
        var st_4B3;
        var st_4B4;
        var st_4B5;
        var st_4B6;
        var st_4B7;
        var st_4B8;
        var st_4B9;
        var st_4BA;
        var st_4BB;
        var st_4BC;
        var st_4BD;
        var st_4BE;
        var st_4BF;
        var st_4C0;
        var st_4C1;
        var st_4C2;
        var st_4C3;
        var st_4C4;
        var st_4C5;
        var st_4C6;
        var st_4C7;
        var st_4C8;
        var st_4C9;
        var st_4CA;
        var st_4CB;
        var st_4CC;
        var st_4CD;
        var st_4CE;
        var st_4CF;
        var st_4D0;
        var st_4D1;
        var st_4D2;
        var st_4D3;
        var st_4D4;
        var st_4D5;
        var st_4D6;
        var st_4D7;
        var st_4D8;
        var st_4D9;
        var st_4DA;
        var st_4DB;
        var st_4DC;
        var st_4DD;
        var st_4DE;
        var st_4DF;
        var st_4E0;
        var st_4E1;
        var st_4E2;
        var st_4E3;
        var st_4E4;
        var st_4E5;
        var st_4E6;
        var st_4E7;
        var st_4E8;
        var st_4E9;
        var st_4EA;
        var st_4EB;
        var st_4EC;
        var st_4ED;
        var st_4EE;
        var st_4EF;
        var st_4F0;
        var st_4F1;
        var st_4F2;
        var st_4F3;
        var st_4F4;
        var st_4F5;
        var st_4F6;
        var st_4F7;
        var st_4F8;
        var st_4F9;
        var st_4FA;
        var st_4FB;
        var st_4FC;
        var st_4FD;
        var st_4FE;
        var st_4FF;
        var st_500;
        var st_501;
        var st_502;
        var st_503;
        var st_504;
        var st_505;
        var st_506;
        var st_507;
        var st_508;
        var st_509;
        var st_50A;
        var st_50B;
        var st_50C;
        var st_50D;
        var st_50E;
        var st_50F;
        var st_510;
        var st_511;
        var st_512;
        var st_513;
        t0 = ((asm0)["System.UInt64"])();
        t1 = ((asm0)["System.Double"])();
        /* IL_00: ldc.i4.1 */
        st_00 = (1|0);
        /* IL_01: conv.i8 */
        st_01 = conv_i8(st_00);
        /* IL_02: box System.UInt64*/
        st_02 = {
            'boxed': st_01,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_07: call Void Log(System.Object)*/
        (asm1.x6000001)(st_02);
        /* IL_0C: ldc.i4.2 */
        st_03 = (2|0);
        /* IL_0D: conv.i8 */
        st_04 = conv_i8(st_03);
        /* IL_0E: box System.UInt64*/
        st_05 = {
            'boxed': st_04,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_13: call Void Log(System.Object)*/
        (asm1.x6000001)(st_05);
        /* IL_18: ldc.i4.3 */
        st_06 = (3|0);
        /* IL_19: conv.i8 */
        st_07 = conv_i8(st_06);
        /* IL_1A: box System.UInt64*/
        st_08 = {
            'boxed': st_07,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_08);
        /* IL_24: ldc.i4.4 */
        st_09 = (4|0);
        /* IL_25: conv.i8 */
        st_0A = conv_i8(st_09);
        /* IL_26: box System.UInt64*/
        st_0B = {
            'boxed': st_0A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0B);
        /* IL_30: ldc.i4.5 */
        st_0C = (5|0);
        /* IL_31: conv.i8 */
        st_0D = conv_i8(st_0C);
        /* IL_32: box System.UInt64*/
        st_0E = {
            'boxed': st_0D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_37: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0E);
        /* IL_3C: ldc.i4.6 */
        st_0F = (6|0);
        /* IL_3D: conv.i8 */
        st_10 = conv_i8(st_0F);
        /* IL_3E: box System.UInt64*/
        st_11 = {
            'boxed': st_10,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_43: call Void Log(System.Object)*/
        (asm1.x6000001)(st_11);
        /* IL_48: ldc.i4.7 */
        st_12 = (7|0);
        /* IL_49: conv.i8 */
        st_13 = conv_i8(st_12);
        /* IL_4A: box System.UInt64*/
        st_14 = {
            'boxed': st_13,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_4F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_14);
        /* IL_54: ldc.i4.8 */
        st_15 = (8|0);
        /* IL_55: conv.i8 */
        st_16 = conv_i8(st_15);
        /* IL_56: box System.UInt64*/
        st_17 = {
            'boxed': st_16,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_5B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_17);
        /* IL_60: ldc.i4.s 9*/
        st_18 = (9|0);
        /* IL_62: conv.i8 */
        st_19 = conv_i8(st_18);
        /* IL_63: box System.UInt64*/
        st_1A = {
            'boxed': st_19,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_68: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1A);
        /* IL_6D: ldc.i4.s 10*/
        st_1B = (10|0);
        /* IL_6F: conv.i8 */
        st_1C = conv_i8(st_1B);
        /* IL_70: box System.UInt64*/
        st_1D = {
            'boxed': st_1C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_75: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1D);
        /* IL_7A: ldc.i4.s 11*/
        st_1E = (11|0);
        /* IL_7C: conv.i8 */
        st_1F = conv_i8(st_1E);
        /* IL_7D: box System.UInt64*/
        st_20 = {
            'boxed': st_1F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_82: call Void Log(System.Object)*/
        (asm1.x6000001)(st_20);
        /* IL_87: ldc.i4.s 12*/
        st_21 = (12|0);
        /* IL_89: conv.i8 */
        st_22 = conv_i8(st_21);
        /* IL_8A: box System.UInt64*/
        st_23 = {
            'boxed': st_22,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_8F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_23);
        /* IL_94: ldc.i4.s 13*/
        st_24 = (13|0);
        /* IL_96: conv.i8 */
        st_25 = conv_i8(st_24);
        /* IL_97: box System.UInt64*/
        st_26 = {
            'boxed': st_25,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_9C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_26);
        /* IL_A1: ldc.i4.s 14*/
        st_27 = (14|0);
        /* IL_A3: conv.i8 */
        st_28 = conv_i8(st_27);
        /* IL_A4: box System.UInt64*/
        st_29 = {
            'boxed': st_28,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A9: call Void Log(System.Object)*/
        (asm1.x6000001)(st_29);
        /* IL_AE: ldc.i4.s 15*/
        st_2A = (15|0);
        /* IL_B0: conv.i8 */
        st_2B = conv_i8(st_2A);
        /* IL_B1: box System.UInt64*/
        st_2C = {
            'boxed': st_2B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2C);
        /* IL_BB: ldc.i4.s 16*/
        st_2D = (16|0);
        /* IL_BD: conv.i8 */
        st_2E = conv_i8(st_2D);
        /* IL_BE: box System.UInt64*/
        st_2F = {
            'boxed': st_2E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2F);
        /* IL_C8: ldc.i4.s 17*/
        st_30 = (17|0);
        /* IL_CA: conv.i8 */
        st_31 = conv_i8(st_30);
        /* IL_CB: box System.UInt64*/
        st_32 = {
            'boxed': st_31,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_32);
        /* IL_D5: ldc.i4.s 18*/
        st_33 = (18|0);
        /* IL_D7: conv.i8 */
        st_34 = conv_i8(st_33);
        /* IL_D8: box System.UInt64*/
        st_35 = {
            'boxed': st_34,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_DD: call Void Log(System.Object)*/
        (asm1.x6000001)(st_35);
        /* IL_E2: ldc.i4.s 19*/
        st_36 = (19|0);
        /* IL_E4: conv.i8 */
        st_37 = conv_i8(st_36);
        /* IL_E5: box System.UInt64*/
        st_38 = {
            'boxed': st_37,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_EA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_38);
        /* IL_EF: ldc.i4.s 20*/
        st_39 = (20|0);
        /* IL_F1: conv.i8 */
        st_3A = conv_i8(st_39);
        /* IL_F2: box System.UInt64*/
        st_3B = {
            'boxed': st_3A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3B);
        /* IL_FC: ldc.i4.s 21*/
        st_3C = (21|0);
        /* IL_FE: conv.i8 */
        st_3D = conv_i8(st_3C);
        /* IL_FF: box System.UInt64*/
        st_3E = {
            'boxed': st_3D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3E);
        /* IL_109: ldc.i4.s 15*/
        st_3F = (15|0);
        /* IL_10B: conv.i8 */
        st_40 = conv_i8(st_3F);
        /* IL_10C: box System.UInt64*/
        st_41 = {
            'boxed': st_40,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_111: call Void Log(System.Object)*/
        (asm1.x6000001)(st_41);
        /* IL_116: ldc.i4 255*/
        st_42 = (255|0);
        /* IL_11B: conv.i8 */
        st_43 = conv_i8(st_42);
        /* IL_11C: box System.UInt64*/
        st_44 = {
            'boxed': st_43,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_121: call Void Log(System.Object)*/
        (asm1.x6000001)(st_44);
        /* IL_126: ldc.i4 4095*/
        st_45 = (4095|0);
        /* IL_12B: conv.i8 */
        st_46 = conv_i8(st_45);
        /* IL_12C: box System.UInt64*/
        st_47 = {
            'boxed': st_46,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_131: call Void Log(System.Object)*/
        (asm1.x6000001)(st_47);
        /* IL_136: ldc.i4 65535*/
        st_48 = (65535|0);
        /* IL_13B: conv.i8 */
        st_49 = conv_i8(st_48);
        /* IL_13C: box System.UInt64*/
        st_4A = {
            'boxed': st_49,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_141: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4A);
        /* IL_146: ldc.i4 1048575*/
        st_4B = (1048575|0);
        /* IL_14B: conv.i8 */
        st_4C = conv_i8(st_4B);
        /* IL_14C: box System.UInt64*/
        st_4D = {
            'boxed': st_4C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_151: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4D);
        /* IL_156: ldc.i4 16777215*/
        st_4E = (16777215|0);
        /* IL_15B: conv.i8 */
        st_4F = conv_i8(st_4E);
        /* IL_15C: box System.UInt64*/
        st_50 = {
            'boxed': st_4F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_161: call Void Log(System.Object)*/
        (asm1.x6000001)(st_50);
        /* IL_166: ldc.i4 268435455*/
        st_51 = (268435455|0);
        /* IL_16B: conv.i8 */
        st_52 = conv_i8(st_51);
        /* IL_16C: box System.UInt64*/
        st_53 = {
            'boxed': st_52,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_171: call Void Log(System.Object)*/
        (asm1.x6000001)(st_53);
        /* IL_176: ldc.i4.m1 */
        st_54 = (-1|0);
        /* IL_177: conv.u8 */
        st_55 = conv_u8(st_54);
        /* IL_178: box System.UInt64*/
        st_56 = {
            'boxed': st_55,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_17D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_56);
        /* IL_182: ldc.i8 68719476735*/
        st_57 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_18B: box System.UInt64*/
        st_58 = {
            'boxed': st_57,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_190: call Void Log(System.Object)*/
        (asm1.x6000001)(st_58);
        /* IL_195: ldc.i8 1099511627775*/
        st_59 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_19E: box System.UInt64*/
        st_5A = {
            'boxed': st_59,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1A3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_5A);
        /* IL_1A8: ldc.i8 17592186044415*/
        st_5B = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_1B1: box System.UInt64*/
        st_5C = {
            'boxed': st_5B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1B6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_5C);
        /* IL_1BB: ldc.i8 281474976710655*/
        st_5D = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_1C4: box System.UInt64*/
        st_5E = {
            'boxed': st_5D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1C9: call Void Log(System.Object)*/
        (asm1.x6000001)(st_5E);
        /* IL_1CE: ldc.i8 4503599627370495*/
        st_5F = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_1D7: box System.UInt64*/
        st_60 = {
            'boxed': st_5F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1DC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_60);
        /* IL_1E1: ldc.i8 72057594037927935*/
        st_61 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_1EA: box System.UInt64*/
        st_62 = {
            'boxed': st_61,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1EF: call Void Log(System.Object)*/
        (asm1.x6000001)(st_62);
        /* IL_1F4: ldc.i4.0 */
        st_63 = (0|0);
        /* IL_1F5: conv.i8 */
        st_64 = conv_i8(st_63);
        /* IL_1F6: box System.UInt64*/
        st_65 = {
            'boxed': st_64,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1FB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_65);
        /* IL_200: ldc.i4.1 */
        st_66 = (1|0);
        /* IL_201: conv.i8 */
        st_67 = conv_i8(st_66);
        /* IL_202: box System.UInt64*/
        st_68 = {
            'boxed': st_67,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_207: call Void Log(System.Object)*/
        (asm1.x6000001)(st_68);
        /* IL_20C: ldc.i4.s 16*/
        st_69 = (16|0);
        /* IL_20E: conv.i8 */
        st_6A = conv_i8(st_69);
        /* IL_20F: box System.UInt64*/
        st_6B = {
            'boxed': st_6A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_214: call Void Log(System.Object)*/
        (asm1.x6000001)(st_6B);
        /* IL_219: ldc.i4 257*/
        st_6C = (257|0);
        /* IL_21E: conv.i8 */
        st_6D = conv_i8(st_6C);
        /* IL_21F: box System.UInt64*/
        st_6E = {
            'boxed': st_6D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_224: call Void Log(System.Object)*/
        (asm1.x6000001)(st_6E);
        /* IL_229: ldc.i4 4112*/
        st_6F = (4112|0);
        /* IL_22E: conv.i8 */
        st_70 = conv_i8(st_6F);
        /* IL_22F: box System.UInt64*/
        st_71 = {
            'boxed': st_70,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_234: call Void Log(System.Object)*/
        (asm1.x6000001)(st_71);
        /* IL_239: ldc.i4 65793*/
        st_72 = (65793|0);
        /* IL_23E: conv.i8 */
        st_73 = conv_i8(st_72);
        /* IL_23F: box System.UInt64*/
        st_74 = {
            'boxed': st_73,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_244: call Void Log(System.Object)*/
        (asm1.x6000001)(st_74);
        /* IL_249: ldc.i4 1052688*/
        st_75 = (1052688|0);
        /* IL_24E: conv.i8 */
        st_76 = conv_i8(st_75);
        /* IL_24F: box System.UInt64*/
        st_77 = {
            'boxed': st_76,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_254: call Void Log(System.Object)*/
        (asm1.x6000001)(st_77);
        /* IL_259: ldc.i4 16843009*/
        st_78 = (16843009|0);
        /* IL_25E: conv.i8 */
        st_79 = conv_i8(st_78);
        /* IL_25F: box System.UInt64*/
        st_7A = {
            'boxed': st_79,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_264: call Void Log(System.Object)*/
        (asm1.x6000001)(st_7A);
        /* IL_269: ldc.i4 269488144*/
        st_7B = (269488144|0);
        /* IL_26E: conv.i8 */
        st_7C = conv_i8(st_7B);
        /* IL_26F: box System.UInt64*/
        st_7D = {
            'boxed': st_7C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_274: call Void Log(System.Object)*/
        (asm1.x6000001)(st_7D);
        /* IL_279: ldc.i8 4311810305*/
        st_7E = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_282: box System.UInt64*/
        st_7F = {
            'boxed': st_7E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_287: call Void Log(System.Object)*/
        (asm1.x6000001)(st_7F);
        /* IL_28C: ldc.i8 68988964880*/
        st_80 = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_295: box System.UInt64*/
        st_81 = {
            'boxed': st_80,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_29A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_81);
        /* IL_29F: ldc.i8 1103823438081*/
        st_82 = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_2A8: box System.UInt64*/
        st_83 = {
            'boxed': st_82,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2AD: call Void Log(System.Object)*/
        (asm1.x6000001)(st_83);
        /* IL_2B2: ldc.i8 17661175009296*/
        st_84 = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_2BB: box System.UInt64*/
        st_85 = {
            'boxed': st_84,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2C0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_85);
        /* IL_2C5: ldc.i8 282578800148737*/
        st_86 = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_2CE: box System.UInt64*/
        st_87 = {
            'boxed': st_86,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2D3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_87);
        /* IL_2D8: ldc.i4.s 15*/
        st_88 = (15|0);
        /* IL_2DA: conv.i8 */
        st_8A = conv_i8(st_88);
        /* IL_2DB: ldc.i4.1 */
        st_89 = (1|0);
        /* IL_2DC: conv.i8 */
        st_8B = conv_i8(st_89);
        /* IL_2DD: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_8C = (asm1.x600000e)(st_8A,st_8B);
        /* IL_2E2: box System.UInt64*/
        st_8D = {
            'boxed': st_8C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2E7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_8D);
        /* IL_2EC: ldc.i4 255*/
        st_8E = (255|0);
        /* IL_2F1: conv.i8 */
        st_90 = conv_i8(st_8E);
        /* IL_2F2: ldc.i4.1 */
        st_8F = (1|0);
        /* IL_2F3: conv.i8 */
        st_91 = conv_i8(st_8F);
        /* IL_2F4: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_92 = (asm1.x600000e)(st_90,st_91);
        /* IL_2F9: box System.UInt64*/
        st_93 = {
            'boxed': st_92,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2FE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_93);
        /* IL_303: ldc.i4 4095*/
        st_94 = (4095|0);
        /* IL_308: conv.i8 */
        st_96 = conv_i8(st_94);
        /* IL_309: ldc.i4.1 */
        st_95 = (1|0);
        /* IL_30A: conv.i8 */
        st_97 = conv_i8(st_95);
        /* IL_30B: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_98 = (asm1.x600000e)(st_96,st_97);
        /* IL_310: box System.UInt64*/
        st_99 = {
            'boxed': st_98,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_315: call Void Log(System.Object)*/
        (asm1.x6000001)(st_99);
        /* IL_31A: ldc.i4 65535*/
        st_9A = (65535|0);
        /* IL_31F: conv.i8 */
        st_9C = conv_i8(st_9A);
        /* IL_320: ldc.i4.1 */
        st_9B = (1|0);
        /* IL_321: conv.i8 */
        st_9D = conv_i8(st_9B);
        /* IL_322: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_9E = (asm1.x600000e)(st_9C,st_9D);
        /* IL_327: box System.UInt64*/
        st_9F = {
            'boxed': st_9E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_32C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_9F);
        /* IL_331: ldc.i4 1048575*/
        st_A0 = (1048575|0);
        /* IL_336: conv.i8 */
        st_A2 = conv_i8(st_A0);
        /* IL_337: ldc.i4.1 */
        st_A1 = (1|0);
        /* IL_338: conv.i8 */
        st_A3 = conv_i8(st_A1);
        /* IL_339: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_A4 = (asm1.x600000e)(st_A2,st_A3);
        /* IL_33E: box System.UInt64*/
        st_A5 = {
            'boxed': st_A4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_343: call Void Log(System.Object)*/
        (asm1.x6000001)(st_A5);
        /* IL_348: ldc.i4 16777215*/
        st_A6 = (16777215|0);
        /* IL_34D: conv.i8 */
        st_A8 = conv_i8(st_A6);
        /* IL_34E: ldc.i4.1 */
        st_A7 = (1|0);
        /* IL_34F: conv.i8 */
        st_A9 = conv_i8(st_A7);
        /* IL_350: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_AA = (asm1.x600000e)(st_A8,st_A9);
        /* IL_355: box System.UInt64*/
        st_AB = {
            'boxed': st_AA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_35A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_AB);
        /* IL_35F: ldc.i4 268435455*/
        st_AC = (268435455|0);
        /* IL_364: conv.i8 */
        st_AE = conv_i8(st_AC);
        /* IL_365: ldc.i4.1 */
        st_AD = (1|0);
        /* IL_366: conv.i8 */
        st_AF = conv_i8(st_AD);
        /* IL_367: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_B0 = (asm1.x600000e)(st_AE,st_AF);
        /* IL_36C: box System.UInt64*/
        st_B1 = {
            'boxed': st_B0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_371: call Void Log(System.Object)*/
        (asm1.x6000001)(st_B1);
        /* IL_376: ldc.i4.m1 */
        st_B2 = (-1|0);
        /* IL_377: conv.u8 */
        st_B4 = conv_u8(st_B2);
        /* IL_378: ldc.i4.1 */
        st_B3 = (1|0);
        /* IL_379: conv.i8 */
        st_B5 = conv_i8(st_B3);
        /* IL_37A: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_B6 = (asm1.x600000e)(st_B4,st_B5);
        /* IL_37F: box System.UInt64*/
        st_B7 = {
            'boxed': st_B6,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_384: call Void Log(System.Object)*/
        (asm1.x6000001)(st_B7);
        /* IL_389: ldc.i8 68719476735*/
        st_B9 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_392: ldc.i4.1 */
        st_B8 = (1|0);
        /* IL_393: conv.i8 */
        st_BA = conv_i8(st_B8);
        /* IL_394: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_BB = (asm1.x600000e)(st_B9,st_BA);
        /* IL_399: box System.UInt64*/
        st_BC = {
            'boxed': st_BB,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_39E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_BC);
        /* IL_3A3: ldc.i8 1099511627775*/
        st_BE = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_3AC: ldc.i4.1 */
        st_BD = (1|0);
        /* IL_3AD: conv.i8 */
        st_BF = conv_i8(st_BD);
        /* IL_3AE: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_C0 = (asm1.x600000e)(st_BE,st_BF);
        /* IL_3B3: box System.UInt64*/
        st_C1 = {
            'boxed': st_C0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_3B8: call Void Log(System.Object)*/
        (asm1.x6000001)(st_C1);
        /* IL_3BD: ldc.i8 17592186044415*/
        st_C3 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_3C6: ldc.i4.1 */
        st_C2 = (1|0);
        /* IL_3C7: conv.i8 */
        st_C4 = conv_i8(st_C2);
        /* IL_3C8: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_C5 = (asm1.x600000e)(st_C3,st_C4);
        /* IL_3CD: box System.UInt64*/
        st_C6 = {
            'boxed': st_C5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_3D2: call Void Log(System.Object)*/
        (asm1.x6000001)(st_C6);
        /* IL_3D7: ldc.i8 281474976710655*/
        st_C8 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_3E0: ldc.i4.1 */
        st_C7 = (1|0);
        /* IL_3E1: conv.i8 */
        st_C9 = conv_i8(st_C7);
        /* IL_3E2: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_CA = (asm1.x600000e)(st_C8,st_C9);
        /* IL_3E7: box System.UInt64*/
        st_CB = {
            'boxed': st_CA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_3EC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_CB);
        /* IL_3F1: ldc.i8 4503599627370495*/
        st_CD = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_3FA: ldc.i4.1 */
        st_CC = (1|0);
        /* IL_3FB: conv.i8 */
        st_CE = conv_i8(st_CC);
        /* IL_3FC: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_CF = (asm1.x600000e)(st_CD,st_CE);
        /* IL_401: box System.UInt64*/
        st_D0 = {
            'boxed': st_CF,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_406: call Void Log(System.Object)*/
        (asm1.x6000001)(st_D0);
        /* IL_40B: ldc.i8 72057594037927935*/
        st_D2 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_414: ldc.i4.1 */
        st_D1 = (1|0);
        /* IL_415: conv.i8 */
        st_D3 = conv_i8(st_D1);
        /* IL_416: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_D4 = (asm1.x600000e)(st_D2,st_D3);
        /* IL_41B: box System.UInt64*/
        st_D5 = {
            'boxed': st_D4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_420: call Void Log(System.Object)*/
        (asm1.x6000001)(st_D5);
        /* IL_425: ldc.i4.s 15*/
        st_D6 = (15|0);
        /* IL_427: conv.i8 */
        st_D8 = conv_i8(st_D6);
        /* IL_428: ldc.i4.2 */
        st_D7 = (2|0);
        /* IL_429: conv.i8 */
        st_D9 = conv_i8(st_D7);
        /* IL_42A: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_DA = (asm1.x600000e)(st_D8,st_D9);
        /* IL_42F: box System.UInt64*/
        st_DB = {
            'boxed': st_DA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_434: call Void Log(System.Object)*/
        (asm1.x6000001)(st_DB);
        /* IL_439: ldc.i4 255*/
        st_DC = (255|0);
        /* IL_43E: conv.i8 */
        st_DE = conv_i8(st_DC);
        /* IL_43F: ldc.i4.2 */
        st_DD = (2|0);
        /* IL_440: conv.i8 */
        st_DF = conv_i8(st_DD);
        /* IL_441: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_E0 = (asm1.x600000e)(st_DE,st_DF);
        /* IL_446: box System.UInt64*/
        st_E1 = {
            'boxed': st_E0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_44B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_E1);
        /* IL_450: ldc.i4 4095*/
        st_E2 = (4095|0);
        /* IL_455: conv.i8 */
        st_E4 = conv_i8(st_E2);
        /* IL_456: ldc.i4.2 */
        st_E3 = (2|0);
        /* IL_457: conv.i8 */
        st_E5 = conv_i8(st_E3);
        /* IL_458: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_E6 = (asm1.x600000e)(st_E4,st_E5);
        /* IL_45D: box System.UInt64*/
        st_E7 = {
            'boxed': st_E6,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_462: call Void Log(System.Object)*/
        (asm1.x6000001)(st_E7);
        /* IL_467: ldc.i4 65535*/
        st_E8 = (65535|0);
        /* IL_46C: conv.i8 */
        st_EA = conv_i8(st_E8);
        /* IL_46D: ldc.i4.2 */
        st_E9 = (2|0);
        /* IL_46E: conv.i8 */
        st_EB = conv_i8(st_E9);
        /* IL_46F: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_EC = (asm1.x600000e)(st_EA,st_EB);
        /* IL_474: box System.UInt64*/
        st_ED = {
            'boxed': st_EC,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_479: call Void Log(System.Object)*/
        (asm1.x6000001)(st_ED);
        /* IL_47E: ldc.i4 1048575*/
        st_EE = (1048575|0);
        /* IL_483: conv.i8 */
        st_F0 = conv_i8(st_EE);
        /* IL_484: ldc.i4.2 */
        st_EF = (2|0);
        /* IL_485: conv.i8 */
        st_F1 = conv_i8(st_EF);
        /* IL_486: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_F2 = (asm1.x600000e)(st_F0,st_F1);
        /* IL_48B: box System.UInt64*/
        st_F3 = {
            'boxed': st_F2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_490: call Void Log(System.Object)*/
        (asm1.x6000001)(st_F3);
        /* IL_495: ldc.i4 16777215*/
        st_F4 = (16777215|0);
        /* IL_49A: conv.i8 */
        st_F6 = conv_i8(st_F4);
        /* IL_49B: ldc.i4.2 */
        st_F5 = (2|0);
        /* IL_49C: conv.i8 */
        st_F7 = conv_i8(st_F5);
        /* IL_49D: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_F8 = (asm1.x600000e)(st_F6,st_F7);
        /* IL_4A2: box System.UInt64*/
        st_F9 = {
            'boxed': st_F8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_4A7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_F9);
        /* IL_4AC: ldc.i4 268435455*/
        st_FA = (268435455|0);
        /* IL_4B1: conv.i8 */
        st_FC = conv_i8(st_FA);
        /* IL_4B2: ldc.i4.2 */
        st_FB = (2|0);
        /* IL_4B3: conv.i8 */
        st_FD = conv_i8(st_FB);
        /* IL_4B4: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_FE = (asm1.x600000e)(st_FC,st_FD);
        /* IL_4B9: box System.UInt64*/
        st_FF = {
            'boxed': st_FE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_4BE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_FF);
        /* IL_4C3: ldc.i4.m1 */
        st_100 = (-1|0);
        /* IL_4C4: conv.u8 */
        st_102 = conv_u8(st_100);
        /* IL_4C5: ldc.i4.2 */
        st_101 = (2|0);
        /* IL_4C6: conv.i8 */
        st_103 = conv_i8(st_101);
        /* IL_4C7: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_104 = (asm1.x600000e)(st_102,st_103);
        /* IL_4CC: box System.UInt64*/
        st_105 = {
            'boxed': st_104,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_4D1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_105);
        /* IL_4D6: ldc.i8 68719476735*/
        st_107 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_4DF: ldc.i4.2 */
        st_106 = (2|0);
        /* IL_4E0: conv.i8 */
        st_108 = conv_i8(st_106);
        /* IL_4E1: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_109 = (asm1.x600000e)(st_107,st_108);
        /* IL_4E6: box System.UInt64*/
        st_10A = {
            'boxed': st_109,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_4EB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_10A);
        /* IL_4F0: ldc.i8 1099511627775*/
        st_10C = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_4F9: ldc.i4.2 */
        st_10B = (2|0);
        /* IL_4FA: conv.i8 */
        st_10D = conv_i8(st_10B);
        /* IL_4FB: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_10E = (asm1.x600000e)(st_10C,st_10D);
        /* IL_500: box System.UInt64*/
        st_10F = {
            'boxed': st_10E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_505: call Void Log(System.Object)*/
        (asm1.x6000001)(st_10F);
        /* IL_50A: ldc.i8 17592186044415*/
        st_111 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_513: ldc.i4.2 */
        st_110 = (2|0);
        /* IL_514: conv.i8 */
        st_112 = conv_i8(st_110);
        /* IL_515: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_113 = (asm1.x600000e)(st_111,st_112);
        /* IL_51A: box System.UInt64*/
        st_114 = {
            'boxed': st_113,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_51F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_114);
        /* IL_524: ldc.i8 281474976710655*/
        st_116 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_52D: ldc.i4.2 */
        st_115 = (2|0);
        /* IL_52E: conv.i8 */
        st_117 = conv_i8(st_115);
        /* IL_52F: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_118 = (asm1.x600000e)(st_116,st_117);
        /* IL_534: box System.UInt64*/
        st_119 = {
            'boxed': st_118,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_539: call Void Log(System.Object)*/
        (asm1.x6000001)(st_119);
        /* IL_53E: ldc.i8 4503599627370495*/
        st_11B = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_547: ldc.i4.2 */
        st_11A = (2|0);
        /* IL_548: conv.i8 */
        st_11C = conv_i8(st_11A);
        /* IL_549: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_11D = (asm1.x600000e)(st_11B,st_11C);
        /* IL_54E: box System.UInt64*/
        st_11E = {
            'boxed': st_11D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_553: call Void Log(System.Object)*/
        (asm1.x6000001)(st_11E);
        /* IL_558: ldc.i8 72057594037927935*/
        st_120 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_561: ldc.i4.2 */
        st_11F = (2|0);
        /* IL_562: conv.i8 */
        st_121 = conv_i8(st_11F);
        /* IL_563: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_122 = (asm1.x600000e)(st_120,st_121);
        /* IL_568: box System.UInt64*/
        st_123 = {
            'boxed': st_122,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_56D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_123);
        /* IL_572: ldc.i4.s 15*/
        st_124 = (15|0);
        /* IL_574: conv.i8 */
        st_126 = conv_i8(st_124);
        /* IL_575: ldc.i4.0 */
        st_125 = (0|0);
        /* IL_576: conv.i8 */
        st_127 = conv_i8(st_125);
        /* IL_577: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_128 = (asm1.x600000e)(st_126,st_127);
        /* IL_57C: box System.UInt64*/
        st_129 = {
            'boxed': st_128,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_581: call Void Log(System.Object)*/
        (asm1.x6000001)(st_129);
        /* IL_586: ldc.i4 255*/
        st_12A = (255|0);
        /* IL_58B: conv.i8 */
        st_12C = conv_i8(st_12A);
        /* IL_58C: ldc.i4.1 */
        st_12B = (1|0);
        /* IL_58D: conv.i8 */
        st_12D = conv_i8(st_12B);
        /* IL_58E: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_12E = (asm1.x600000e)(st_12C,st_12D);
        /* IL_593: box System.UInt64*/
        st_12F = {
            'boxed': st_12E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_598: call Void Log(System.Object)*/
        (asm1.x6000001)(st_12F);
        /* IL_59D: ldc.i4 4095*/
        st_130 = (4095|0);
        /* IL_5A2: conv.i8 */
        st_132 = conv_i8(st_130);
        /* IL_5A3: ldc.i4.s 16*/
        st_131 = (16|0);
        /* IL_5A5: conv.i8 */
        st_133 = conv_i8(st_131);
        /* IL_5A6: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_134 = (asm1.x600000e)(st_132,st_133);
        /* IL_5AB: box System.UInt64*/
        st_135 = {
            'boxed': st_134,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_5B0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_135);
        /* IL_5B5: ldc.i4 65535*/
        st_136 = (65535|0);
        /* IL_5BA: conv.i8 */
        st_138 = conv_i8(st_136);
        /* IL_5BB: ldc.i4 257*/
        st_137 = (257|0);
        /* IL_5C0: conv.i8 */
        st_139 = conv_i8(st_137);
        /* IL_5C1: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_13A = (asm1.x600000e)(st_138,st_139);
        /* IL_5C6: box System.UInt64*/
        st_13B = {
            'boxed': st_13A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_5CB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_13B);
        /* IL_5D0: ldc.i4 1048575*/
        st_13C = (1048575|0);
        /* IL_5D5: conv.i8 */
        st_13E = conv_i8(st_13C);
        /* IL_5D6: ldc.i4 4112*/
        st_13D = (4112|0);
        /* IL_5DB: conv.i8 */
        st_13F = conv_i8(st_13D);
        /* IL_5DC: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_140 = (asm1.x600000e)(st_13E,st_13F);
        /* IL_5E1: box System.UInt64*/
        st_141 = {
            'boxed': st_140,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_5E6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_141);
        /* IL_5EB: ldc.i4 16777215*/
        st_142 = (16777215|0);
        /* IL_5F0: conv.i8 */
        st_144 = conv_i8(st_142);
        /* IL_5F1: ldc.i4 65793*/
        st_143 = (65793|0);
        /* IL_5F6: conv.i8 */
        st_145 = conv_i8(st_143);
        /* IL_5F7: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_146 = (asm1.x600000e)(st_144,st_145);
        /* IL_5FC: box System.UInt64*/
        st_147 = {
            'boxed': st_146,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_601: call Void Log(System.Object)*/
        (asm1.x6000001)(st_147);
        /* IL_606: ldc.i4 268435455*/
        st_148 = (268435455|0);
        /* IL_60B: conv.i8 */
        st_14A = conv_i8(st_148);
        /* IL_60C: ldc.i4 1052688*/
        st_149 = (1052688|0);
        /* IL_611: conv.i8 */
        st_14B = conv_i8(st_149);
        /* IL_612: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_14C = (asm1.x600000e)(st_14A,st_14B);
        /* IL_617: box System.UInt64*/
        st_14D = {
            'boxed': st_14C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_61C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_14D);
        /* IL_621: ldc.i4.m1 */
        st_14E = (-1|0);
        /* IL_622: conv.u8 */
        st_150 = conv_u8(st_14E);
        /* IL_623: ldc.i4 16843009*/
        st_14F = (16843009|0);
        /* IL_628: conv.i8 */
        st_151 = conv_i8(st_14F);
        /* IL_629: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_152 = (asm1.x600000e)(st_150,st_151);
        /* IL_62E: box System.UInt64*/
        st_153 = {
            'boxed': st_152,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_633: call Void Log(System.Object)*/
        (asm1.x6000001)(st_153);
        /* IL_638: ldc.i8 68719476735*/
        st_155 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_641: ldc.i4 269488144*/
        st_154 = (269488144|0);
        /* IL_646: conv.i8 */
        st_156 = conv_i8(st_154);
        /* IL_647: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_157 = (asm1.x600000e)(st_155,st_156);
        /* IL_64C: box System.UInt64*/
        st_158 = {
            'boxed': st_157,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_651: call Void Log(System.Object)*/
        (asm1.x6000001)(st_158);
        /* IL_656: ldc.i8 1099511627775*/
        st_159 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_65F: ldc.i8 4311810305*/
        st_15A = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_668: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_15B = (asm1.x600000e)(st_159,st_15A);
        /* IL_66D: box System.UInt64*/
        st_15C = {
            'boxed': st_15B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_672: call Void Log(System.Object)*/
        (asm1.x6000001)(st_15C);
        /* IL_677: ldc.i8 17592186044415*/
        st_15D = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_680: ldc.i8 68988964880*/
        st_15E = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_689: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_15F = (asm1.x600000e)(st_15D,st_15E);
        /* IL_68E: box System.UInt64*/
        st_160 = {
            'boxed': st_15F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_693: call Void Log(System.Object)*/
        (asm1.x6000001)(st_160);
        /* IL_698: ldc.i8 281474976710655*/
        st_161 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_6A1: ldc.i8 1103823438081*/
        st_162 = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_6AA: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_163 = (asm1.x600000e)(st_161,st_162);
        /* IL_6AF: box System.UInt64*/
        st_164 = {
            'boxed': st_163,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_6B4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_164);
        /* IL_6B9: ldc.i8 4503599627370495*/
        st_165 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_6C2: ldc.i8 17661175009296*/
        st_166 = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_6CB: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_167 = (asm1.x600000e)(st_165,st_166);
        /* IL_6D0: box System.UInt64*/
        st_168 = {
            'boxed': st_167,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_6D5: call Void Log(System.Object)*/
        (asm1.x6000001)(st_168);
        /* IL_6DA: ldc.i8 72057594037927935*/
        st_169 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_6E3: ldc.i8 282578800148737*/
        st_16A = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_6EC: call UInt64 Add(System.UInt64, System.UInt64)*/
        st_16B = (asm1.x600000e)(st_169,st_16A);
        /* IL_6F1: box System.UInt64*/
        st_16C = {
            'boxed': st_16B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_6F6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_16C);
        /* IL_6FB: ldc.i4.s 15*/
        st_16D = (15|0);
        /* IL_6FD: conv.i8 */
        st_16F = conv_i8(st_16D);
        /* IL_6FE: ldc.i4.1 */
        st_16E = (1|0);
        /* IL_6FF: conv.i8 */
        st_170 = conv_i8(st_16E);
        /* IL_700: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_171 = (asm1.x600000f)(st_16F,st_170);
        /* IL_705: box System.UInt64*/
        st_172 = {
            'boxed': st_171,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_70A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_172);
        /* IL_70F: ldc.i4 255*/
        st_173 = (255|0);
        /* IL_714: conv.i8 */
        st_175 = conv_i8(st_173);
        /* IL_715: ldc.i4.1 */
        st_174 = (1|0);
        /* IL_716: conv.i8 */
        st_176 = conv_i8(st_174);
        /* IL_717: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_177 = (asm1.x600000f)(st_175,st_176);
        /* IL_71C: box System.UInt64*/
        st_178 = {
            'boxed': st_177,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_721: call Void Log(System.Object)*/
        (asm1.x6000001)(st_178);
        /* IL_726: ldc.i4 4095*/
        st_179 = (4095|0);
        /* IL_72B: conv.i8 */
        st_17B = conv_i8(st_179);
        /* IL_72C: ldc.i4.1 */
        st_17A = (1|0);
        /* IL_72D: conv.i8 */
        st_17C = conv_i8(st_17A);
        /* IL_72E: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_17D = (asm1.x600000f)(st_17B,st_17C);
        /* IL_733: box System.UInt64*/
        st_17E = {
            'boxed': st_17D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_738: call Void Log(System.Object)*/
        (asm1.x6000001)(st_17E);
        /* IL_73D: ldc.i4 65535*/
        st_17F = (65535|0);
        /* IL_742: conv.i8 */
        st_181 = conv_i8(st_17F);
        /* IL_743: ldc.i4.1 */
        st_180 = (1|0);
        /* IL_744: conv.i8 */
        st_182 = conv_i8(st_180);
        /* IL_745: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_183 = (asm1.x600000f)(st_181,st_182);
        /* IL_74A: box System.UInt64*/
        st_184 = {
            'boxed': st_183,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_74F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_184);
        /* IL_754: ldc.i4 1048575*/
        st_185 = (1048575|0);
        /* IL_759: conv.i8 */
        st_187 = conv_i8(st_185);
        /* IL_75A: ldc.i4.1 */
        st_186 = (1|0);
        /* IL_75B: conv.i8 */
        st_188 = conv_i8(st_186);
        /* IL_75C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_189 = (asm1.x600000f)(st_187,st_188);
        /* IL_761: box System.UInt64*/
        st_18A = {
            'boxed': st_189,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_766: call Void Log(System.Object)*/
        (asm1.x6000001)(st_18A);
        /* IL_76B: ldc.i4 16777215*/
        st_18B = (16777215|0);
        /* IL_770: conv.i8 */
        st_18D = conv_i8(st_18B);
        /* IL_771: ldc.i4.1 */
        st_18C = (1|0);
        /* IL_772: conv.i8 */
        st_18E = conv_i8(st_18C);
        /* IL_773: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_18F = (asm1.x600000f)(st_18D,st_18E);
        /* IL_778: box System.UInt64*/
        st_190 = {
            'boxed': st_18F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_77D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_190);
        /* IL_782: ldc.i4 268435455*/
        st_191 = (268435455|0);
        /* IL_787: conv.i8 */
        st_193 = conv_i8(st_191);
        /* IL_788: ldc.i4.1 */
        st_192 = (1|0);
        /* IL_789: conv.i8 */
        st_194 = conv_i8(st_192);
        /* IL_78A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_195 = (asm1.x600000f)(st_193,st_194);
        /* IL_78F: box System.UInt64*/
        st_196 = {
            'boxed': st_195,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_794: call Void Log(System.Object)*/
        (asm1.x6000001)(st_196);
        /* IL_799: ldc.i4.m1 */
        st_197 = (-1|0);
        /* IL_79A: conv.u8 */
        st_199 = conv_u8(st_197);
        /* IL_79B: ldc.i4.1 */
        st_198 = (1|0);
        /* IL_79C: conv.i8 */
        st_19A = conv_i8(st_198);
        /* IL_79D: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_19B = (asm1.x600000f)(st_199,st_19A);
        /* IL_7A2: box System.UInt64*/
        st_19C = {
            'boxed': st_19B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_7A7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_19C);
        /* IL_7AC: ldc.i8 68719476735*/
        st_19E = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_7B5: ldc.i4.1 */
        st_19D = (1|0);
        /* IL_7B6: conv.i8 */
        st_19F = conv_i8(st_19D);
        /* IL_7B7: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1A0 = (asm1.x600000f)(st_19E,st_19F);
        /* IL_7BC: box System.UInt64*/
        st_1A1 = {
            'boxed': st_1A0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_7C1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1A1);
        /* IL_7C6: ldc.i8 1099511627775*/
        st_1A3 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_7CF: ldc.i4.1 */
        st_1A2 = (1|0);
        /* IL_7D0: conv.i8 */
        st_1A4 = conv_i8(st_1A2);
        /* IL_7D1: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1A5 = (asm1.x600000f)(st_1A3,st_1A4);
        /* IL_7D6: box System.UInt64*/
        st_1A6 = {
            'boxed': st_1A5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_7DB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1A6);
        /* IL_7E0: ldc.i8 17592186044415*/
        st_1A8 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_7E9: ldc.i4.1 */
        st_1A7 = (1|0);
        /* IL_7EA: conv.i8 */
        st_1A9 = conv_i8(st_1A7);
        /* IL_7EB: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1AA = (asm1.x600000f)(st_1A8,st_1A9);
        /* IL_7F0: box System.UInt64*/
        st_1AB = {
            'boxed': st_1AA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_7F5: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1AB);
        /* IL_7FA: ldc.i8 281474976710655*/
        st_1AD = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_803: ldc.i4.1 */
        st_1AC = (1|0);
        /* IL_804: conv.i8 */
        st_1AE = conv_i8(st_1AC);
        /* IL_805: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1AF = (asm1.x600000f)(st_1AD,st_1AE);
        /* IL_80A: box System.UInt64*/
        st_1B0 = {
            'boxed': st_1AF,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_80F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1B0);
        /* IL_814: ldc.i8 4503599627370495*/
        st_1B2 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_81D: ldc.i4.1 */
        st_1B1 = (1|0);
        /* IL_81E: conv.i8 */
        st_1B3 = conv_i8(st_1B1);
        /* IL_81F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1B4 = (asm1.x600000f)(st_1B2,st_1B3);
        /* IL_824: box System.UInt64*/
        st_1B5 = {
            'boxed': st_1B4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_829: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1B5);
        /* IL_82E: ldc.i8 72057594037927935*/
        st_1B7 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_837: ldc.i4.1 */
        st_1B6 = (1|0);
        /* IL_838: conv.i8 */
        st_1B8 = conv_i8(st_1B6);
        /* IL_839: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1B9 = (asm1.x600000f)(st_1B7,st_1B8);
        /* IL_83E: box System.UInt64*/
        st_1BA = {
            'boxed': st_1B9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_843: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1BA);
        /* IL_848: ldc.i4.s 15*/
        st_1BB = (15|0);
        /* IL_84A: conv.i8 */
        st_1BD = conv_i8(st_1BB);
        /* IL_84B: ldc.i4.2 */
        st_1BC = (2|0);
        /* IL_84C: conv.i8 */
        st_1BE = conv_i8(st_1BC);
        /* IL_84D: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1BF = (asm1.x600000f)(st_1BD,st_1BE);
        /* IL_852: box System.UInt64*/
        st_1C0 = {
            'boxed': st_1BF,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_857: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1C0);
        /* IL_85C: ldc.i4 255*/
        st_1C1 = (255|0);
        /* IL_861: conv.i8 */
        st_1C3 = conv_i8(st_1C1);
        /* IL_862: ldc.i4.2 */
        st_1C2 = (2|0);
        /* IL_863: conv.i8 */
        st_1C4 = conv_i8(st_1C2);
        /* IL_864: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1C5 = (asm1.x600000f)(st_1C3,st_1C4);
        /* IL_869: box System.UInt64*/
        st_1C6 = {
            'boxed': st_1C5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_86E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1C6);
        /* IL_873: ldc.i4 4095*/
        st_1C7 = (4095|0);
        /* IL_878: conv.i8 */
        st_1C9 = conv_i8(st_1C7);
        /* IL_879: ldc.i4.2 */
        st_1C8 = (2|0);
        /* IL_87A: conv.i8 */
        st_1CA = conv_i8(st_1C8);
        /* IL_87B: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1CB = (asm1.x600000f)(st_1C9,st_1CA);
        /* IL_880: box System.UInt64*/
        st_1CC = {
            'boxed': st_1CB,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_885: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1CC);
        /* IL_88A: ldc.i4 65535*/
        st_1CD = (65535|0);
        /* IL_88F: conv.i8 */
        st_1CF = conv_i8(st_1CD);
        /* IL_890: ldc.i4.2 */
        st_1CE = (2|0);
        /* IL_891: conv.i8 */
        st_1D0 = conv_i8(st_1CE);
        /* IL_892: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1D1 = (asm1.x600000f)(st_1CF,st_1D0);
        /* IL_897: box System.UInt64*/
        st_1D2 = {
            'boxed': st_1D1,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_89C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1D2);
        /* IL_8A1: ldc.i4 1048575*/
        st_1D3 = (1048575|0);
        /* IL_8A6: conv.i8 */
        st_1D5 = conv_i8(st_1D3);
        /* IL_8A7: ldc.i4.2 */
        st_1D4 = (2|0);
        /* IL_8A8: conv.i8 */
        st_1D6 = conv_i8(st_1D4);
        /* IL_8A9: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1D7 = (asm1.x600000f)(st_1D5,st_1D6);
        /* IL_8AE: box System.UInt64*/
        st_1D8 = {
            'boxed': st_1D7,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_8B3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1D8);
        /* IL_8B8: ldc.i4 16777215*/
        st_1D9 = (16777215|0);
        /* IL_8BD: conv.i8 */
        st_1DB = conv_i8(st_1D9);
        /* IL_8BE: ldc.i4.2 */
        st_1DA = (2|0);
        /* IL_8BF: conv.i8 */
        st_1DC = conv_i8(st_1DA);
        /* IL_8C0: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1DD = (asm1.x600000f)(st_1DB,st_1DC);
        /* IL_8C5: box System.UInt64*/
        st_1DE = {
            'boxed': st_1DD,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_8CA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1DE);
        /* IL_8CF: ldc.i4 268435455*/
        st_1DF = (268435455|0);
        /* IL_8D4: conv.i8 */
        st_1E1 = conv_i8(st_1DF);
        /* IL_8D5: ldc.i4.2 */
        st_1E0 = (2|0);
        /* IL_8D6: conv.i8 */
        st_1E2 = conv_i8(st_1E0);
        /* IL_8D7: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1E3 = (asm1.x600000f)(st_1E1,st_1E2);
        /* IL_8DC: box System.UInt64*/
        st_1E4 = {
            'boxed': st_1E3,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_8E1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1E4);
        /* IL_8E6: ldc.i4.m1 */
        st_1E5 = (-1|0);
        /* IL_8E7: conv.u8 */
        st_1E7 = conv_u8(st_1E5);
        /* IL_8E8: ldc.i4.2 */
        st_1E6 = (2|0);
        /* IL_8E9: conv.i8 */
        st_1E8 = conv_i8(st_1E6);
        /* IL_8EA: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1E9 = (asm1.x600000f)(st_1E7,st_1E8);
        /* IL_8EF: box System.UInt64*/
        st_1EA = {
            'boxed': st_1E9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_8F4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1EA);
        /* IL_8F9: ldc.i8 68719476735*/
        st_1EC = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_902: ldc.i4.2 */
        st_1EB = (2|0);
        /* IL_903: conv.i8 */
        st_1ED = conv_i8(st_1EB);
        /* IL_904: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1EE = (asm1.x600000f)(st_1EC,st_1ED);
        /* IL_909: box System.UInt64*/
        st_1EF = {
            'boxed': st_1EE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_90E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1EF);
        /* IL_913: ldc.i8 1099511627775*/
        st_1F1 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_91C: ldc.i4.2 */
        st_1F0 = (2|0);
        /* IL_91D: conv.i8 */
        st_1F2 = conv_i8(st_1F0);
        /* IL_91E: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1F3 = (asm1.x600000f)(st_1F1,st_1F2);
        /* IL_923: box System.UInt64*/
        st_1F4 = {
            'boxed': st_1F3,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_928: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1F4);
        /* IL_92D: ldc.i8 17592186044415*/
        st_1F6 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_936: ldc.i4.2 */
        st_1F5 = (2|0);
        /* IL_937: conv.i8 */
        st_1F7 = conv_i8(st_1F5);
        /* IL_938: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1F8 = (asm1.x600000f)(st_1F6,st_1F7);
        /* IL_93D: box System.UInt64*/
        st_1F9 = {
            'boxed': st_1F8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_942: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1F9);
        /* IL_947: ldc.i8 281474976710655*/
        st_1FB = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_950: ldc.i4.2 */
        st_1FA = (2|0);
        /* IL_951: conv.i8 */
        st_1FC = conv_i8(st_1FA);
        /* IL_952: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_1FD = (asm1.x600000f)(st_1FB,st_1FC);
        /* IL_957: box System.UInt64*/
        st_1FE = {
            'boxed': st_1FD,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_95C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1FE);
        /* IL_961: ldc.i8 4503599627370495*/
        st_200 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_96A: ldc.i4.2 */
        st_1FF = (2|0);
        /* IL_96B: conv.i8 */
        st_201 = conv_i8(st_1FF);
        /* IL_96C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_202 = (asm1.x600000f)(st_200,st_201);
        /* IL_971: box System.UInt64*/
        st_203 = {
            'boxed': st_202,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_976: call Void Log(System.Object)*/
        (asm1.x6000001)(st_203);
        /* IL_97B: ldc.i8 72057594037927935*/
        st_205 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_984: ldc.i4.2 */
        st_204 = (2|0);
        /* IL_985: conv.i8 */
        st_206 = conv_i8(st_204);
        /* IL_986: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_207 = (asm1.x600000f)(st_205,st_206);
        /* IL_98B: box System.UInt64*/
        st_208 = {
            'boxed': st_207,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_990: call Void Log(System.Object)*/
        (asm1.x6000001)(st_208);
        /* IL_995: ldc.i4.s 15*/
        st_209 = (15|0);
        /* IL_997: conv.i8 */
        st_20B = conv_i8(st_209);
        /* IL_998: ldc.i4.0 */
        st_20A = (0|0);
        /* IL_999: conv.i8 */
        st_20C = conv_i8(st_20A);
        /* IL_99A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_20D = (asm1.x600000f)(st_20B,st_20C);
        /* IL_99F: box System.UInt64*/
        st_20E = {
            'boxed': st_20D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_9A4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_20E);
        /* IL_9A9: ldc.i4 255*/
        st_20F = (255|0);
        /* IL_9AE: conv.i8 */
        st_211 = conv_i8(st_20F);
        /* IL_9AF: ldc.i4.1 */
        st_210 = (1|0);
        /* IL_9B0: conv.i8 */
        st_212 = conv_i8(st_210);
        /* IL_9B1: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_213 = (asm1.x600000f)(st_211,st_212);
        /* IL_9B6: box System.UInt64*/
        st_214 = {
            'boxed': st_213,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_9BB: call Void Log(System.Object)*/
        (asm1.x6000001)(st_214);
        /* IL_9C0: ldc.i4 4095*/
        st_215 = (4095|0);
        /* IL_9C5: conv.i8 */
        st_217 = conv_i8(st_215);
        /* IL_9C6: ldc.i4.s 16*/
        st_216 = (16|0);
        /* IL_9C8: conv.i8 */
        st_218 = conv_i8(st_216);
        /* IL_9C9: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_219 = (asm1.x600000f)(st_217,st_218);
        /* IL_9CE: box System.UInt64*/
        st_21A = {
            'boxed': st_219,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_9D3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_21A);
        /* IL_9D8: ldc.i4 65535*/
        st_21B = (65535|0);
        /* IL_9DD: conv.i8 */
        st_21D = conv_i8(st_21B);
        /* IL_9DE: ldc.i4 257*/
        st_21C = (257|0);
        /* IL_9E3: conv.i8 */
        st_21E = conv_i8(st_21C);
        /* IL_9E4: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_21F = (asm1.x600000f)(st_21D,st_21E);
        /* IL_9E9: box System.UInt64*/
        st_220 = {
            'boxed': st_21F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_9EE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_220);
        /* IL_9F3: ldc.i4 1048575*/
        st_221 = (1048575|0);
        /* IL_9F8: conv.i8 */
        st_223 = conv_i8(st_221);
        /* IL_9F9: ldc.i4 4112*/
        st_222 = (4112|0);
        /* IL_9FE: conv.i8 */
        st_224 = conv_i8(st_222);
        /* IL_9FF: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_225 = (asm1.x600000f)(st_223,st_224);
        /* IL_A04: box System.UInt64*/
        st_226 = {
            'boxed': st_225,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A09: call Void Log(System.Object)*/
        (asm1.x6000001)(st_226);
        /* IL_A0E: ldc.i4 16777215*/
        st_227 = (16777215|0);
        /* IL_A13: conv.i8 */
        st_229 = conv_i8(st_227);
        /* IL_A14: ldc.i4 65793*/
        st_228 = (65793|0);
        /* IL_A19: conv.i8 */
        st_22A = conv_i8(st_228);
        /* IL_A1A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_22B = (asm1.x600000f)(st_229,st_22A);
        /* IL_A1F: box System.UInt64*/
        st_22C = {
            'boxed': st_22B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A24: call Void Log(System.Object)*/
        (asm1.x6000001)(st_22C);
        /* IL_A29: ldc.i4 268435455*/
        st_22D = (268435455|0);
        /* IL_A2E: conv.i8 */
        st_22F = conv_i8(st_22D);
        /* IL_A2F: ldc.i4 1052688*/
        st_22E = (1052688|0);
        /* IL_A34: conv.i8 */
        st_230 = conv_i8(st_22E);
        /* IL_A35: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_231 = (asm1.x600000f)(st_22F,st_230);
        /* IL_A3A: box System.UInt64*/
        st_232 = {
            'boxed': st_231,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A3F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_232);
        /* IL_A44: ldc.i4.m1 */
        st_233 = (-1|0);
        /* IL_A45: conv.u8 */
        st_235 = conv_u8(st_233);
        /* IL_A46: ldc.i4 16843009*/
        st_234 = (16843009|0);
        /* IL_A4B: conv.i8 */
        st_236 = conv_i8(st_234);
        /* IL_A4C: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_237 = (asm1.x600000f)(st_235,st_236);
        /* IL_A51: box System.UInt64*/
        st_238 = {
            'boxed': st_237,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A56: call Void Log(System.Object)*/
        (asm1.x6000001)(st_238);
        /* IL_A5B: ldc.i8 68719476735*/
        st_23A = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_A64: ldc.i4 269488144*/
        st_239 = (269488144|0);
        /* IL_A69: conv.i8 */
        st_23B = conv_i8(st_239);
        /* IL_A6A: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_23C = (asm1.x600000f)(st_23A,st_23B);
        /* IL_A6F: box System.UInt64*/
        st_23D = {
            'boxed': st_23C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A74: call Void Log(System.Object)*/
        (asm1.x6000001)(st_23D);
        /* IL_A79: ldc.i8 1099511627775*/
        st_23E = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_A82: ldc.i8 4311810305*/
        st_23F = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_A8B: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_240 = (asm1.x600000f)(st_23E,st_23F);
        /* IL_A90: box System.UInt64*/
        st_241 = {
            'boxed': st_240,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_A95: call Void Log(System.Object)*/
        (asm1.x6000001)(st_241);
        /* IL_A9A: ldc.i8 17592186044415*/
        st_242 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_AA3: ldc.i8 68988964880*/
        st_243 = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_AAC: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_244 = (asm1.x600000f)(st_242,st_243);
        /* IL_AB1: box System.UInt64*/
        st_245 = {
            'boxed': st_244,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_AB6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_245);
        /* IL_ABB: ldc.i8 281474976710655*/
        st_246 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_AC4: ldc.i8 1103823438081*/
        st_247 = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_ACD: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_248 = (asm1.x600000f)(st_246,st_247);
        /* IL_AD2: box System.UInt64*/
        st_249 = {
            'boxed': st_248,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_AD7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_249);
        /* IL_ADC: ldc.i8 4503599627370495*/
        st_24A = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_AE5: ldc.i8 17661175009296*/
        st_24B = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_AEE: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_24C = (asm1.x600000f)(st_24A,st_24B);
        /* IL_AF3: box System.UInt64*/
        st_24D = {
            'boxed': st_24C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_AF8: call Void Log(System.Object)*/
        (asm1.x6000001)(st_24D);
        /* IL_AFD: ldc.i8 72057594037927935*/
        st_24E = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_B06: ldc.i8 282578800148737*/
        st_24F = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_B0F: call UInt64 Sub(System.UInt64, System.UInt64)*/
        st_250 = (asm1.x600000f)(st_24E,st_24F);
        /* IL_B14: box System.UInt64*/
        st_251 = {
            'boxed': st_250,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B19: call Void Log(System.Object)*/
        (asm1.x6000001)(st_251);
        /* IL_B1E: ldc.i4.s 15*/
        st_252 = (15|0);
        /* IL_B20: conv.i8 */
        st_254 = conv_i8(st_252);
        /* IL_B21: ldc.i4.1 */
        st_253 = (1|0);
        /* IL_B22: conv.i8 */
        st_255 = conv_i8(st_253);
        /* IL_B23: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_256 = (asm1.x6000010)(st_254,st_255);
        /* IL_B28: box System.UInt64*/
        st_257 = {
            'boxed': st_256,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B2D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_257);
        /* IL_B32: ldc.i4 255*/
        st_258 = (255|0);
        /* IL_B37: conv.i8 */
        st_25A = conv_i8(st_258);
        /* IL_B38: ldc.i4.1 */
        st_259 = (1|0);
        /* IL_B39: conv.i8 */
        st_25B = conv_i8(st_259);
        /* IL_B3A: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_25C = (asm1.x6000010)(st_25A,st_25B);
        /* IL_B3F: box System.UInt64*/
        st_25D = {
            'boxed': st_25C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B44: call Void Log(System.Object)*/
        (asm1.x6000001)(st_25D);
        /* IL_B49: ldc.i4 4095*/
        st_25E = (4095|0);
        /* IL_B4E: conv.i8 */
        st_260 = conv_i8(st_25E);
        /* IL_B4F: ldc.i4.1 */
        st_25F = (1|0);
        /* IL_B50: conv.i8 */
        st_261 = conv_i8(st_25F);
        /* IL_B51: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_262 = (asm1.x6000010)(st_260,st_261);
        /* IL_B56: box System.UInt64*/
        st_263 = {
            'boxed': st_262,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B5B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_263);
        /* IL_B60: ldc.i4 65535*/
        st_264 = (65535|0);
        /* IL_B65: conv.i8 */
        st_266 = conv_i8(st_264);
        /* IL_B66: ldc.i4.1 */
        st_265 = (1|0);
        /* IL_B67: conv.i8 */
        st_267 = conv_i8(st_265);
        /* IL_B68: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_268 = (asm1.x6000010)(st_266,st_267);
        /* IL_B6D: box System.UInt64*/
        st_269 = {
            'boxed': st_268,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B72: call Void Log(System.Object)*/
        (asm1.x6000001)(st_269);
        /* IL_B77: ldc.i4 1048575*/
        st_26A = (1048575|0);
        /* IL_B7C: conv.i8 */
        st_26C = conv_i8(st_26A);
        /* IL_B7D: ldc.i4.1 */
        st_26B = (1|0);
        /* IL_B7E: conv.i8 */
        st_26D = conv_i8(st_26B);
        /* IL_B7F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_26E = (asm1.x6000010)(st_26C,st_26D);
        /* IL_B84: box System.UInt64*/
        st_26F = {
            'boxed': st_26E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_B89: call Void Log(System.Object)*/
        (asm1.x6000001)(st_26F);
        /* IL_B8E: ldc.i4 16777215*/
        st_270 = (16777215|0);
        /* IL_B93: conv.i8 */
        st_272 = conv_i8(st_270);
        /* IL_B94: ldc.i4.1 */
        st_271 = (1|0);
        /* IL_B95: conv.i8 */
        st_273 = conv_i8(st_271);
        /* IL_B96: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_274 = (asm1.x6000010)(st_272,st_273);
        /* IL_B9B: box System.UInt64*/
        st_275 = {
            'boxed': st_274,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BA0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_275);
        /* IL_BA5: ldc.i4 268435455*/
        st_276 = (268435455|0);
        /* IL_BAA: conv.i8 */
        st_278 = conv_i8(st_276);
        /* IL_BAB: ldc.i4.1 */
        st_277 = (1|0);
        /* IL_BAC: conv.i8 */
        st_279 = conv_i8(st_277);
        /* IL_BAD: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_27A = (asm1.x6000010)(st_278,st_279);
        /* IL_BB2: box System.UInt64*/
        st_27B = {
            'boxed': st_27A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BB7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_27B);
        /* IL_BBC: ldc.i4.m1 */
        st_27C = (-1|0);
        /* IL_BBD: conv.u8 */
        st_27E = conv_u8(st_27C);
        /* IL_BBE: ldc.i4.1 */
        st_27D = (1|0);
        /* IL_BBF: conv.i8 */
        st_27F = conv_i8(st_27D);
        /* IL_BC0: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_280 = (asm1.x6000010)(st_27E,st_27F);
        /* IL_BC5: box System.UInt64*/
        st_281 = {
            'boxed': st_280,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BCA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_281);
        /* IL_BCF: ldc.i8 68719476735*/
        st_283 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_BD8: ldc.i4.1 */
        st_282 = (1|0);
        /* IL_BD9: conv.i8 */
        st_284 = conv_i8(st_282);
        /* IL_BDA: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_285 = (asm1.x6000010)(st_283,st_284);
        /* IL_BDF: box System.UInt64*/
        st_286 = {
            'boxed': st_285,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BE4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_286);
        /* IL_BE9: ldc.i8 1099511627775*/
        st_288 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_BF2: ldc.i4.1 */
        st_287 = (1|0);
        /* IL_BF3: conv.i8 */
        st_289 = conv_i8(st_287);
        /* IL_BF4: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_28A = (asm1.x6000010)(st_288,st_289);
        /* IL_BF9: box System.UInt64*/
        st_28B = {
            'boxed': st_28A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BFE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_28B);
        /* IL_C03: ldc.i8 17592186044415*/
        st_28D = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_C0C: ldc.i4.1 */
        st_28C = (1|0);
        /* IL_C0D: conv.i8 */
        st_28E = conv_i8(st_28C);
        /* IL_C0E: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_28F = (asm1.x6000010)(st_28D,st_28E);
        /* IL_C13: box System.UInt64*/
        st_290 = {
            'boxed': st_28F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C18: call Void Log(System.Object)*/
        (asm1.x6000001)(st_290);
        /* IL_C1D: ldc.i8 281474976710655*/
        st_292 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_C26: ldc.i4.1 */
        st_291 = (1|0);
        /* IL_C27: conv.i8 */
        st_293 = conv_i8(st_291);
        /* IL_C28: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_294 = (asm1.x6000010)(st_292,st_293);
        /* IL_C2D: box System.UInt64*/
        st_295 = {
            'boxed': st_294,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C32: call Void Log(System.Object)*/
        (asm1.x6000001)(st_295);
        /* IL_C37: ldc.i8 4503599627370495*/
        st_297 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_C40: ldc.i4.1 */
        st_296 = (1|0);
        /* IL_C41: conv.i8 */
        st_298 = conv_i8(st_296);
        /* IL_C42: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_299 = (asm1.x6000010)(st_297,st_298);
        /* IL_C47: box System.UInt64*/
        st_29A = {
            'boxed': st_299,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C4C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_29A);
        /* IL_C51: ldc.i8 72057594037927935*/
        st_29C = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_C5A: ldc.i4.1 */
        st_29B = (1|0);
        /* IL_C5B: conv.i8 */
        st_29D = conv_i8(st_29B);
        /* IL_C5C: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_29E = (asm1.x6000010)(st_29C,st_29D);
        /* IL_C61: box System.UInt64*/
        st_29F = {
            'boxed': st_29E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C66: call Void Log(System.Object)*/
        (asm1.x6000001)(st_29F);
        /* IL_C6B: ldc.i4.s 15*/
        st_2A0 = (15|0);
        /* IL_C6D: conv.i8 */
        st_2A2 = conv_i8(st_2A0);
        /* IL_C6E: ldc.i4.2 */
        st_2A1 = (2|0);
        /* IL_C6F: conv.i8 */
        st_2A3 = conv_i8(st_2A1);
        /* IL_C70: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2A4 = (asm1.x6000010)(st_2A2,st_2A3);
        /* IL_C75: box System.UInt64*/
        st_2A5 = {
            'boxed': st_2A4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C7A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2A5);
        /* IL_C7F: ldc.i4 255*/
        st_2A6 = (255|0);
        /* IL_C84: conv.i8 */
        st_2A8 = conv_i8(st_2A6);
        /* IL_C85: ldc.i4.2 */
        st_2A7 = (2|0);
        /* IL_C86: conv.i8 */
        st_2A9 = conv_i8(st_2A7);
        /* IL_C87: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2AA = (asm1.x6000010)(st_2A8,st_2A9);
        /* IL_C8C: box System.UInt64*/
        st_2AB = {
            'boxed': st_2AA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_C91: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2AB);
        /* IL_C96: ldc.i4 4095*/
        st_2AC = (4095|0);
        /* IL_C9B: conv.i8 */
        st_2AE = conv_i8(st_2AC);
        /* IL_C9C: ldc.i4.2 */
        st_2AD = (2|0);
        /* IL_C9D: conv.i8 */
        st_2AF = conv_i8(st_2AD);
        /* IL_C9E: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2B0 = (asm1.x6000010)(st_2AE,st_2AF);
        /* IL_CA3: box System.UInt64*/
        st_2B1 = {
            'boxed': st_2B0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CA8: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2B1);
        /* IL_CAD: ldc.i4 65535*/
        st_2B2 = (65535|0);
        /* IL_CB2: conv.i8 */
        st_2B4 = conv_i8(st_2B2);
        /* IL_CB3: ldc.i4.2 */
        st_2B3 = (2|0);
        /* IL_CB4: conv.i8 */
        st_2B5 = conv_i8(st_2B3);
        /* IL_CB5: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2B6 = (asm1.x6000010)(st_2B4,st_2B5);
        /* IL_CBA: box System.UInt64*/
        st_2B7 = {
            'boxed': st_2B6,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CBF: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2B7);
        /* IL_CC4: ldc.i4 1048575*/
        st_2B8 = (1048575|0);
        /* IL_CC9: conv.i8 */
        st_2BA = conv_i8(st_2B8);
        /* IL_CCA: ldc.i4.2 */
        st_2B9 = (2|0);
        /* IL_CCB: conv.i8 */
        st_2BB = conv_i8(st_2B9);
        /* IL_CCC: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2BC = (asm1.x6000010)(st_2BA,st_2BB);
        /* IL_CD1: box System.UInt64*/
        st_2BD = {
            'boxed': st_2BC,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CD6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2BD);
        /* IL_CDB: ldc.i4 16777215*/
        st_2BE = (16777215|0);
        /* IL_CE0: conv.i8 */
        st_2C0 = conv_i8(st_2BE);
        /* IL_CE1: ldc.i4.2 */
        st_2BF = (2|0);
        /* IL_CE2: conv.i8 */
        st_2C1 = conv_i8(st_2BF);
        /* IL_CE3: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2C2 = (asm1.x6000010)(st_2C0,st_2C1);
        /* IL_CE8: box System.UInt64*/
        st_2C3 = {
            'boxed': st_2C2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CED: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2C3);
        /* IL_CF2: ldc.i4 268435455*/
        st_2C4 = (268435455|0);
        /* IL_CF7: conv.i8 */
        st_2C6 = conv_i8(st_2C4);
        /* IL_CF8: ldc.i4.2 */
        st_2C5 = (2|0);
        /* IL_CF9: conv.i8 */
        st_2C7 = conv_i8(st_2C5);
        /* IL_CFA: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2C8 = (asm1.x6000010)(st_2C6,st_2C7);
        /* IL_CFF: box System.UInt64*/
        st_2C9 = {
            'boxed': st_2C8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D04: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2C9);
        /* IL_D09: ldc.i4.m1 */
        st_2CA = (-1|0);
        /* IL_D0A: conv.u8 */
        st_2CC = conv_u8(st_2CA);
        /* IL_D0B: ldc.i4.2 */
        st_2CB = (2|0);
        /* IL_D0C: conv.i8 */
        st_2CD = conv_i8(st_2CB);
        /* IL_D0D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2CE = (asm1.x6000010)(st_2CC,st_2CD);
        /* IL_D12: box System.UInt64*/
        st_2CF = {
            'boxed': st_2CE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D17: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2CF);
        /* IL_D1C: ldc.i8 68719476735*/
        st_2D1 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_D25: ldc.i4.2 */
        st_2D0 = (2|0);
        /* IL_D26: conv.i8 */
        st_2D2 = conv_i8(st_2D0);
        /* IL_D27: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2D3 = (asm1.x6000010)(st_2D1,st_2D2);
        /* IL_D2C: box System.UInt64*/
        st_2D4 = {
            'boxed': st_2D3,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D31: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2D4);
        /* IL_D36: ldc.i8 1099511627775*/
        st_2D6 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_D3F: ldc.i4.2 */
        st_2D5 = (2|0);
        /* IL_D40: conv.i8 */
        st_2D7 = conv_i8(st_2D5);
        /* IL_D41: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2D8 = (asm1.x6000010)(st_2D6,st_2D7);
        /* IL_D46: box System.UInt64*/
        st_2D9 = {
            'boxed': st_2D8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D4B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2D9);
        /* IL_D50: ldc.i8 17592186044415*/
        st_2DB = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_D59: ldc.i4.2 */
        st_2DA = (2|0);
        /* IL_D5A: conv.i8 */
        st_2DC = conv_i8(st_2DA);
        /* IL_D5B: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2DD = (asm1.x6000010)(st_2DB,st_2DC);
        /* IL_D60: box System.UInt64*/
        st_2DE = {
            'boxed': st_2DD,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D65: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2DE);
        /* IL_D6A: ldc.i8 281474976710655*/
        st_2E0 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_D73: ldc.i4.2 */
        st_2DF = (2|0);
        /* IL_D74: conv.i8 */
        st_2E1 = conv_i8(st_2DF);
        /* IL_D75: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2E2 = (asm1.x6000010)(st_2E0,st_2E1);
        /* IL_D7A: box System.UInt64*/
        st_2E3 = {
            'boxed': st_2E2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D7F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2E3);
        /* IL_D84: ldc.i8 4503599627370495*/
        st_2E5 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_D8D: ldc.i4.2 */
        st_2E4 = (2|0);
        /* IL_D8E: conv.i8 */
        st_2E6 = conv_i8(st_2E4);
        /* IL_D8F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2E7 = (asm1.x6000010)(st_2E5,st_2E6);
        /* IL_D94: box System.UInt64*/
        st_2E8 = {
            'boxed': st_2E7,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_D99: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2E8);
        /* IL_D9E: ldc.i8 72057594037927935*/
        st_2EA = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_DA7: ldc.i4.2 */
        st_2E9 = (2|0);
        /* IL_DA8: conv.i8 */
        st_2EB = conv_i8(st_2E9);
        /* IL_DA9: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2EC = (asm1.x6000010)(st_2EA,st_2EB);
        /* IL_DAE: box System.UInt64*/
        st_2ED = {
            'boxed': st_2EC,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_DB3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2ED);
        /* IL_DB8: ldc.i4.s 15*/
        st_2EE = (15|0);
        /* IL_DBA: conv.i8 */
        st_2F0 = conv_i8(st_2EE);
        /* IL_DBB: ldc.i4.0 */
        st_2EF = (0|0);
        /* IL_DBC: conv.i8 */
        st_2F1 = conv_i8(st_2EF);
        /* IL_DBD: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2F2 = (asm1.x6000010)(st_2F0,st_2F1);
        /* IL_DC2: box System.UInt64*/
        st_2F3 = {
            'boxed': st_2F2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_DC7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2F3);
        /* IL_DCC: ldc.i4 255*/
        st_2F4 = (255|0);
        /* IL_DD1: conv.i8 */
        st_2F6 = conv_i8(st_2F4);
        /* IL_DD2: ldc.i4.1 */
        st_2F5 = (1|0);
        /* IL_DD3: conv.i8 */
        st_2F7 = conv_i8(st_2F5);
        /* IL_DD4: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2F8 = (asm1.x6000010)(st_2F6,st_2F7);
        /* IL_DD9: box System.UInt64*/
        st_2F9 = {
            'boxed': st_2F8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_DDE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2F9);
        /* IL_DE3: ldc.i4 4095*/
        st_2FA = (4095|0);
        /* IL_DE8: conv.i8 */
        st_2FC = conv_i8(st_2FA);
        /* IL_DE9: ldc.i4.s 16*/
        st_2FB = (16|0);
        /* IL_DEB: conv.i8 */
        st_2FD = conv_i8(st_2FB);
        /* IL_DEC: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_2FE = (asm1.x6000010)(st_2FC,st_2FD);
        /* IL_DF1: box System.UInt64*/
        st_2FF = {
            'boxed': st_2FE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_DF6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2FF);
        /* IL_DFB: ldc.i4 65535*/
        st_300 = (65535|0);
        /* IL_E00: conv.i8 */
        st_302 = conv_i8(st_300);
        /* IL_E01: ldc.i4 257*/
        st_301 = (257|0);
        /* IL_E06: conv.i8 */
        st_303 = conv_i8(st_301);
        /* IL_E07: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_304 = (asm1.x6000010)(st_302,st_303);
        /* IL_E0C: box System.UInt64*/
        st_305 = {
            'boxed': st_304,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E11: call Void Log(System.Object)*/
        (asm1.x6000001)(st_305);
        /* IL_E16: ldc.i4 1048575*/
        st_306 = (1048575|0);
        /* IL_E1B: conv.i8 */
        st_308 = conv_i8(st_306);
        /* IL_E1C: ldc.i4 4112*/
        st_307 = (4112|0);
        /* IL_E21: conv.i8 */
        st_309 = conv_i8(st_307);
        /* IL_E22: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_30A = (asm1.x6000010)(st_308,st_309);
        /* IL_E27: box System.UInt64*/
        st_30B = {
            'boxed': st_30A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E2C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_30B);
        /* IL_E31: ldc.i4 16777215*/
        st_30C = (16777215|0);
        /* IL_E36: conv.i8 */
        st_30E = conv_i8(st_30C);
        /* IL_E37: ldc.i4 65793*/
        st_30D = (65793|0);
        /* IL_E3C: conv.i8 */
        st_30F = conv_i8(st_30D);
        /* IL_E3D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_310 = (asm1.x6000010)(st_30E,st_30F);
        /* IL_E42: box System.UInt64*/
        st_311 = {
            'boxed': st_310,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E47: call Void Log(System.Object)*/
        (asm1.x6000001)(st_311);
        /* IL_E4C: ldc.i4 268435455*/
        st_312 = (268435455|0);
        /* IL_E51: conv.i8 */
        st_314 = conv_i8(st_312);
        /* IL_E52: ldc.i4 1052688*/
        st_313 = (1052688|0);
        /* IL_E57: conv.i8 */
        st_315 = conv_i8(st_313);
        /* IL_E58: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_316 = (asm1.x6000010)(st_314,st_315);
        /* IL_E5D: box System.UInt64*/
        st_317 = {
            'boxed': st_316,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E62: call Void Log(System.Object)*/
        (asm1.x6000001)(st_317);
        /* IL_E67: ldc.i4.m1 */
        st_318 = (-1|0);
        /* IL_E68: conv.u8 */
        st_31A = conv_u8(st_318);
        /* IL_E69: ldc.i4 16843009*/
        st_319 = (16843009|0);
        /* IL_E6E: conv.i8 */
        st_31B = conv_i8(st_319);
        /* IL_E6F: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_31C = (asm1.x6000010)(st_31A,st_31B);
        /* IL_E74: box System.UInt64*/
        st_31D = {
            'boxed': st_31C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E79: call Void Log(System.Object)*/
        (asm1.x6000001)(st_31D);
        /* IL_E7E: ldc.i8 68719476735*/
        st_31F = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_E87: ldc.i4 269488144*/
        st_31E = (269488144|0);
        /* IL_E8C: conv.i8 */
        st_320 = conv_i8(st_31E);
        /* IL_E8D: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_321 = (asm1.x6000010)(st_31F,st_320);
        /* IL_E92: box System.UInt64*/
        st_322 = {
            'boxed': st_321,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E97: call Void Log(System.Object)*/
        (asm1.x6000001)(st_322);
        /* IL_E9C: ldc.i8 1099511627775*/
        st_323 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_EA5: ldc.i8 4311810305*/
        st_324 = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_EAE: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_325 = (asm1.x6000010)(st_323,st_324);
        /* IL_EB3: box System.UInt64*/
        st_326 = {
            'boxed': st_325,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_EB8: call Void Log(System.Object)*/
        (asm1.x6000001)(st_326);
        /* IL_EBD: ldc.i8 17592186044415*/
        st_327 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_EC6: ldc.i8 68988964880*/
        st_328 = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_ECF: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_329 = (asm1.x6000010)(st_327,st_328);
        /* IL_ED4: box System.UInt64*/
        st_32A = {
            'boxed': st_329,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_ED9: call Void Log(System.Object)*/
        (asm1.x6000001)(st_32A);
        /* IL_EDE: ldc.i8 281474976710655*/
        st_32B = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_EE7: ldc.i8 1103823438081*/
        st_32C = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_EF0: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_32D = (asm1.x6000010)(st_32B,st_32C);
        /* IL_EF5: box System.UInt64*/
        st_32E = {
            'boxed': st_32D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_EFA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_32E);
        /* IL_EFF: ldc.i8 4503599627370495*/
        st_32F = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_F08: ldc.i8 17661175009296*/
        st_330 = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_F11: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_331 = (asm1.x6000010)(st_32F,st_330);
        /* IL_F16: box System.UInt64*/
        st_332 = {
            'boxed': st_331,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F1B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_332);
        /* IL_F20: ldc.i8 72057594037927935*/
        st_333 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_F29: ldc.i8 282578800148737*/
        st_334 = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_F32: call UInt64 Mul(System.UInt64, System.UInt64)*/
        st_335 = (asm1.x6000010)(st_333,st_334);
        /* IL_F37: box System.UInt64*/
        st_336 = {
            'boxed': st_335,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F3C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_336);
        /* IL_F41: ldstr Div 1*/
        st_337 = new_string("Div 1");
        /* IL_F46: call Void Log(System.Object)*/
        (asm1.x6000001)(st_337);
        /* IL_F4B: ldc.i4.s 15*/
        st_338 = (15|0);
        /* IL_F4D: conv.i8 */
        st_33A = conv_i8(st_338);
        /* IL_F4E: ldc.i4.1 */
        st_339 = (1|0);
        /* IL_F4F: conv.i8 */
        st_33B = conv_i8(st_339);
        /* IL_F50: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_33C = (asm1.x6000011)(st_33A,st_33B);
        /* IL_F55: box System.UInt64*/
        st_33D = {
            'boxed': st_33C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F5A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_33D);
        /* IL_F5F: ldc.i4 255*/
        st_33E = (255|0);
        /* IL_F64: conv.i8 */
        st_340 = conv_i8(st_33E);
        /* IL_F65: ldc.i4.1 */
        st_33F = (1|0);
        /* IL_F66: conv.i8 */
        st_341 = conv_i8(st_33F);
        /* IL_F67: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_342 = (asm1.x6000011)(st_340,st_341);
        /* IL_F6C: box System.UInt64*/
        st_343 = {
            'boxed': st_342,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F71: call Void Log(System.Object)*/
        (asm1.x6000001)(st_343);
        /* IL_F76: ldc.i4 4095*/
        st_344 = (4095|0);
        /* IL_F7B: conv.i8 */
        st_346 = conv_i8(st_344);
        /* IL_F7C: ldc.i4.1 */
        st_345 = (1|0);
        /* IL_F7D: conv.i8 */
        st_347 = conv_i8(st_345);
        /* IL_F7E: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_348 = (asm1.x6000011)(st_346,st_347);
        /* IL_F83: box System.UInt64*/
        st_349 = {
            'boxed': st_348,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F88: call Void Log(System.Object)*/
        (asm1.x6000001)(st_349);
        /* IL_F8D: ldc.i4 65535*/
        st_34A = (65535|0);
        /* IL_F92: conv.i8 */
        st_34C = conv_i8(st_34A);
        /* IL_F93: ldc.i4.1 */
        st_34B = (1|0);
        /* IL_F94: conv.i8 */
        st_34D = conv_i8(st_34B);
        /* IL_F95: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_34E = (asm1.x6000011)(st_34C,st_34D);
        /* IL_F9A: box System.UInt64*/
        st_34F = {
            'boxed': st_34E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F9F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_34F);
        /* IL_FA4: ldc.i4 1048575*/
        st_350 = (1048575|0);
        /* IL_FA9: conv.i8 */
        st_352 = conv_i8(st_350);
        /* IL_FAA: ldc.i4.1 */
        st_351 = (1|0);
        /* IL_FAB: conv.i8 */
        st_353 = conv_i8(st_351);
        /* IL_FAC: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_354 = (asm1.x6000011)(st_352,st_353);
        /* IL_FB1: box System.UInt64*/
        st_355 = {
            'boxed': st_354,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_FB6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_355);
        /* IL_FBB: ldc.i4 16777215*/
        st_356 = (16777215|0);
        /* IL_FC0: conv.i8 */
        st_358 = conv_i8(st_356);
        /* IL_FC1: ldc.i4.1 */
        st_357 = (1|0);
        /* IL_FC2: conv.i8 */
        st_359 = conv_i8(st_357);
        /* IL_FC3: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_35A = (asm1.x6000011)(st_358,st_359);
        /* IL_FC8: box System.UInt64*/
        st_35B = {
            'boxed': st_35A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_FCD: call Void Log(System.Object)*/
        (asm1.x6000001)(st_35B);
        /* IL_FD2: ldc.i4 268435455*/
        st_35C = (268435455|0);
        /* IL_FD7: conv.i8 */
        st_35E = conv_i8(st_35C);
        /* IL_FD8: ldc.i4.1 */
        st_35D = (1|0);
        /* IL_FD9: conv.i8 */
        st_35F = conv_i8(st_35D);
        /* IL_FDA: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_360 = (asm1.x6000011)(st_35E,st_35F);
        /* IL_FDF: box System.UInt64*/
        st_361 = {
            'boxed': st_360,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_FE4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_361);
        /* IL_FE9: ldc.i4.m1 */
        st_362 = (-1|0);
        /* IL_FEA: conv.u8 */
        st_364 = conv_u8(st_362);
        /* IL_FEB: ldc.i4.1 */
        st_363 = (1|0);
        /* IL_FEC: conv.i8 */
        st_365 = conv_i8(st_363);
        /* IL_FED: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_366 = (asm1.x6000011)(st_364,st_365);
        /* IL_FF2: box System.UInt64*/
        st_367 = {
            'boxed': st_366,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_FF7: call Void Log(System.Object)*/
        (asm1.x6000001)(st_367);
        /* IL_FFC: ldc.i8 68719476735*/
        st_369 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_1005: ldc.i4.1 */
        st_368 = (1|0);
        /* IL_1006: conv.i8 */
        st_36A = conv_i8(st_368);
        /* IL_1007: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_36B = (asm1.x6000011)(st_369,st_36A);
        /* IL_100C: box System.UInt64*/
        st_36C = {
            'boxed': st_36B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1011: call Void Log(System.Object)*/
        (asm1.x6000001)(st_36C);
        /* IL_1016: ldc.i8 1099511627775*/
        st_36E = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_101F: ldc.i4.1 */
        st_36D = (1|0);
        /* IL_1020: conv.i8 */
        st_36F = conv_i8(st_36D);
        /* IL_1021: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_370 = (asm1.x6000011)(st_36E,st_36F);
        /* IL_1026: box System.UInt64*/
        st_371 = {
            'boxed': st_370,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_102B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_371);
        /* IL_1030: ldc.i8 17592186044415*/
        st_373 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_1039: ldc.i4.1 */
        st_372 = (1|0);
        /* IL_103A: conv.i8 */
        st_374 = conv_i8(st_372);
        /* IL_103B: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_375 = (asm1.x6000011)(st_373,st_374);
        /* IL_1040: box System.UInt64*/
        st_376 = {
            'boxed': st_375,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1045: call Void Log(System.Object)*/
        (asm1.x6000001)(st_376);
        /* IL_104A: ldc.i8 281474976710655*/
        st_378 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_1053: ldc.i4.1 */
        st_377 = (1|0);
        /* IL_1054: conv.i8 */
        st_379 = conv_i8(st_377);
        /* IL_1055: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_37A = (asm1.x6000011)(st_378,st_379);
        /* IL_105A: box System.UInt64*/
        st_37B = {
            'boxed': st_37A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_105F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_37B);
        /* IL_1064: ldc.i8 4503599627370495*/
        st_37D = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_106D: ldc.i4.1 */
        st_37C = (1|0);
        /* IL_106E: conv.i8 */
        st_37E = conv_i8(st_37C);
        /* IL_106F: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_37F = (asm1.x6000011)(st_37D,st_37E);
        /* IL_1074: box System.UInt64*/
        st_380 = {
            'boxed': st_37F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1079: call Void Log(System.Object)*/
        (asm1.x6000001)(st_380);
        /* IL_107E: ldc.i8 72057594037927935*/
        st_382 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_1087: ldc.i4.1 */
        st_381 = (1|0);
        /* IL_1088: conv.i8 */
        st_383 = conv_i8(st_381);
        /* IL_1089: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_384 = (asm1.x6000011)(st_382,st_383);
        /* IL_108E: box System.UInt64*/
        st_385 = {
            'boxed': st_384,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1093: call Void Log(System.Object)*/
        (asm1.x6000001)(st_385);
        /* IL_1098: ldstr Div 2*/
        st_386 = new_string("Div 2");
        /* IL_109D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_386);
        /* IL_10A2: ldc.i4.s 15*/
        st_387 = (15|0);
        /* IL_10A4: conv.i8 */
        st_389 = conv_i8(st_387);
        /* IL_10A5: ldc.i4.2 */
        st_388 = (2|0);
        /* IL_10A6: conv.i8 */
        st_38A = conv_i8(st_388);
        /* IL_10A7: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_38B = (asm1.x6000011)(st_389,st_38A);
        /* IL_10AC: box System.UInt64*/
        st_38C = {
            'boxed': st_38B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_10B1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_38C);
        /* IL_10B6: ldc.i4 255*/
        st_38D = (255|0);
        /* IL_10BB: conv.i8 */
        st_38F = conv_i8(st_38D);
        /* IL_10BC: ldc.i4.2 */
        st_38E = (2|0);
        /* IL_10BD: conv.i8 */
        st_390 = conv_i8(st_38E);
        /* IL_10BE: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_391 = (asm1.x6000011)(st_38F,st_390);
        /* IL_10C3: box System.UInt64*/
        st_392 = {
            'boxed': st_391,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_10C8: call Void Log(System.Object)*/
        (asm1.x6000001)(st_392);
        /* IL_10CD: ldc.i4 4095*/
        st_393 = (4095|0);
        /* IL_10D2: conv.i8 */
        st_395 = conv_i8(st_393);
        /* IL_10D3: ldc.i4.2 */
        st_394 = (2|0);
        /* IL_10D4: conv.i8 */
        st_396 = conv_i8(st_394);
        /* IL_10D5: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_397 = (asm1.x6000011)(st_395,st_396);
        /* IL_10DA: box System.UInt64*/
        st_398 = {
            'boxed': st_397,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_10DF: call Void Log(System.Object)*/
        (asm1.x6000001)(st_398);
        /* IL_10E4: ldc.i4 65535*/
        st_399 = (65535|0);
        /* IL_10E9: conv.i8 */
        st_39B = conv_i8(st_399);
        /* IL_10EA: ldc.i4.2 */
        st_39A = (2|0);
        /* IL_10EB: conv.i8 */
        st_39C = conv_i8(st_39A);
        /* IL_10EC: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_39D = (asm1.x6000011)(st_39B,st_39C);
        /* IL_10F1: box System.UInt64*/
        st_39E = {
            'boxed': st_39D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_10F6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_39E);
        /* IL_10FB: ldc.i4 1048575*/
        st_39F = (1048575|0);
        /* IL_1100: conv.i8 */
        st_3A1 = conv_i8(st_39F);
        /* IL_1101: ldc.i4.2 */
        st_3A0 = (2|0);
        /* IL_1102: conv.i8 */
        st_3A2 = conv_i8(st_3A0);
        /* IL_1103: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3A3 = (asm1.x6000011)(st_3A1,st_3A2);
        /* IL_1108: box System.UInt64*/
        st_3A4 = {
            'boxed': st_3A3,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_110D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3A4);
        /* IL_1112: ldc.i4 16777215*/
        st_3A5 = (16777215|0);
        /* IL_1117: conv.i8 */
        st_3A7 = conv_i8(st_3A5);
        /* IL_1118: ldc.i4.2 */
        st_3A6 = (2|0);
        /* IL_1119: conv.i8 */
        st_3A8 = conv_i8(st_3A6);
        /* IL_111A: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3A9 = (asm1.x6000011)(st_3A7,st_3A8);
        /* IL_111F: box System.UInt64*/
        st_3AA = {
            'boxed': st_3A9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1124: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3AA);
        /* IL_1129: ldc.i4 268435455*/
        st_3AB = (268435455|0);
        /* IL_112E: conv.i8 */
        st_3AD = conv_i8(st_3AB);
        /* IL_112F: ldc.i4.2 */
        st_3AC = (2|0);
        /* IL_1130: conv.i8 */
        st_3AE = conv_i8(st_3AC);
        /* IL_1131: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3AF = (asm1.x6000011)(st_3AD,st_3AE);
        /* IL_1136: box System.UInt64*/
        st_3B0 = {
            'boxed': st_3AF,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_113B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3B0);
        /* IL_1140: ldc.i4.m1 */
        st_3B1 = (-1|0);
        /* IL_1141: conv.u8 */
        st_3B3 = conv_u8(st_3B1);
        /* IL_1142: ldc.i4.2 */
        st_3B2 = (2|0);
        /* IL_1143: conv.i8 */
        st_3B4 = conv_i8(st_3B2);
        /* IL_1144: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3B5 = (asm1.x6000011)(st_3B3,st_3B4);
        /* IL_1149: box System.UInt64*/
        st_3B6 = {
            'boxed': st_3B5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_114E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3B6);
        /* IL_1153: ldc.i8 68719476735*/
        st_3B8 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_115C: ldc.i4.2 */
        st_3B7 = (2|0);
        /* IL_115D: conv.i8 */
        st_3B9 = conv_i8(st_3B7);
        /* IL_115E: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3BA = (asm1.x6000011)(st_3B8,st_3B9);
        /* IL_1163: box System.UInt64*/
        st_3BB = {
            'boxed': st_3BA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1168: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3BB);
        /* IL_116D: ldc.i8 1099511627775*/
        st_3BD = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_1176: ldc.i4.2 */
        st_3BC = (2|0);
        /* IL_1177: conv.i8 */
        st_3BE = conv_i8(st_3BC);
        /* IL_1178: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3BF = (asm1.x6000011)(st_3BD,st_3BE);
        /* IL_117D: box System.UInt64*/
        st_3C0 = {
            'boxed': st_3BF,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1182: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3C0);
        /* IL_1187: ldc.i8 17592186044415*/
        st_3C2 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_1190: ldc.i4.2 */
        st_3C1 = (2|0);
        /* IL_1191: conv.i8 */
        st_3C3 = conv_i8(st_3C1);
        /* IL_1192: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3C4 = (asm1.x6000011)(st_3C2,st_3C3);
        /* IL_1197: box System.UInt64*/
        st_3C5 = {
            'boxed': st_3C4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_119C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3C5);
        /* IL_11A1: ldc.i8 281474976710655*/
        st_3C7 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_11AA: ldc.i4.2 */
        st_3C6 = (2|0);
        /* IL_11AB: conv.i8 */
        st_3C8 = conv_i8(st_3C6);
        /* IL_11AC: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3C9 = (asm1.x6000011)(st_3C7,st_3C8);
        /* IL_11B1: box System.UInt64*/
        st_3CA = {
            'boxed': st_3C9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_11B6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3CA);
        /* IL_11BB: ldc.i8 4503599627370495*/
        st_3CC = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_11C4: ldc.i4.2 */
        st_3CB = (2|0);
        /* IL_11C5: conv.i8 */
        st_3CD = conv_i8(st_3CB);
        /* IL_11C6: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3CE = (asm1.x6000011)(st_3CC,st_3CD);
        /* IL_11CB: box System.UInt64*/
        st_3CF = {
            'boxed': st_3CE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_11D0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3CF);
        /* IL_11D5: ldc.i8 72057594037927935*/
        st_3D1 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_11DE: ldc.i4.2 */
        st_3D0 = (2|0);
        /* IL_11DF: conv.i8 */
        st_3D2 = conv_i8(st_3D0);
        /* IL_11E0: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3D3 = (asm1.x6000011)(st_3D1,st_3D2);
        /* IL_11E5: box System.UInt64*/
        st_3D4 = {
            'boxed': st_3D3,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_11EA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3D4);
        /* IL_11EF: ldstr Div 0x1, 0x010, 0x0101 etc*/
        st_3D5 = new_string("Div 0x1, 0x010, 0x0101 etc");
        /* IL_11F4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3D5);
        /* IL_11F9: ldc.i4 255*/
        st_3D6 = (255|0);
        /* IL_11FE: conv.i8 */
        st_3D8 = conv_i8(st_3D6);
        /* IL_11FF: ldc.i4.1 */
        st_3D7 = (1|0);
        /* IL_1200: conv.i8 */
        st_3D9 = conv_i8(st_3D7);
        /* IL_1201: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3DA = (asm1.x6000011)(st_3D8,st_3D9);
        /* IL_1206: box System.UInt64*/
        st_3DB = {
            'boxed': st_3DA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_120B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3DB);
        /* IL_1210: ldc.i4 4095*/
        st_3DC = (4095|0);
        /* IL_1215: conv.i8 */
        st_3DE = conv_i8(st_3DC);
        /* IL_1216: ldc.i4.s 16*/
        st_3DD = (16|0);
        /* IL_1218: conv.i8 */
        st_3DF = conv_i8(st_3DD);
        /* IL_1219: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3E0 = (asm1.x6000011)(st_3DE,st_3DF);
        /* IL_121E: box System.UInt64*/
        st_3E1 = {
            'boxed': st_3E0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1223: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3E1);
        /* IL_1228: ldc.i4 65535*/
        st_3E2 = (65535|0);
        /* IL_122D: conv.i8 */
        st_3E4 = conv_i8(st_3E2);
        /* IL_122E: ldc.i4 257*/
        st_3E3 = (257|0);
        /* IL_1233: conv.i8 */
        st_3E5 = conv_i8(st_3E3);
        /* IL_1234: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3E6 = (asm1.x6000011)(st_3E4,st_3E5);
        /* IL_1239: box System.UInt64*/
        st_3E7 = {
            'boxed': st_3E6,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_123E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3E7);
        /* IL_1243: ldc.i4 1048575*/
        st_3E8 = (1048575|0);
        /* IL_1248: conv.i8 */
        st_3EA = conv_i8(st_3E8);
        /* IL_1249: ldc.i4 4112*/
        st_3E9 = (4112|0);
        /* IL_124E: conv.i8 */
        st_3EB = conv_i8(st_3E9);
        /* IL_124F: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3EC = (asm1.x6000011)(st_3EA,st_3EB);
        /* IL_1254: box System.UInt64*/
        st_3ED = {
            'boxed': st_3EC,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1259: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3ED);
        /* IL_125E: ldc.i4 16777215*/
        st_3EE = (16777215|0);
        /* IL_1263: conv.i8 */
        st_3F0 = conv_i8(st_3EE);
        /* IL_1264: ldc.i4 65793*/
        st_3EF = (65793|0);
        /* IL_1269: conv.i8 */
        st_3F1 = conv_i8(st_3EF);
        /* IL_126A: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3F2 = (asm1.x6000011)(st_3F0,st_3F1);
        /* IL_126F: box System.UInt64*/
        st_3F3 = {
            'boxed': st_3F2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1274: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3F3);
        /* IL_1279: ldc.i4 268435455*/
        st_3F4 = (268435455|0);
        /* IL_127E: conv.i8 */
        st_3F6 = conv_i8(st_3F4);
        /* IL_127F: ldc.i4 1052688*/
        st_3F5 = (1052688|0);
        /* IL_1284: conv.i8 */
        st_3F7 = conv_i8(st_3F5);
        /* IL_1285: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3F8 = (asm1.x6000011)(st_3F6,st_3F7);
        /* IL_128A: box System.UInt64*/
        st_3F9 = {
            'boxed': st_3F8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_128F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3F9);
        /* IL_1294: ldc.i4.m1 */
        st_3FA = (-1|0);
        /* IL_1295: conv.u8 */
        st_3FC = conv_u8(st_3FA);
        /* IL_1296: ldc.i4 16843009*/
        st_3FB = (16843009|0);
        /* IL_129B: conv.i8 */
        st_3FD = conv_i8(st_3FB);
        /* IL_129C: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_3FE = (asm1.x6000011)(st_3FC,st_3FD);
        /* IL_12A1: box System.UInt64*/
        st_3FF = {
            'boxed': st_3FE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_12A6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3FF);
        /* IL_12AB: ldc.i8 68719476735*/
        st_401 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_12B4: ldc.i4 269488144*/
        st_400 = (269488144|0);
        /* IL_12B9: conv.i8 */
        st_402 = conv_i8(st_400);
        /* IL_12BA: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_403 = (asm1.x6000011)(st_401,st_402);
        /* IL_12BF: box System.UInt64*/
        st_404 = {
            'boxed': st_403,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_12C4: call Void Log(System.Object)*/
        (asm1.x6000001)(st_404);
        /* IL_12C9: ldc.i8 1099511627775*/
        st_405 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_12D2: ldc.i8 4311810305*/
        st_406 = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_12DB: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_407 = (asm1.x6000011)(st_405,st_406);
        /* IL_12E0: box System.UInt64*/
        st_408 = {
            'boxed': st_407,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_12E5: call Void Log(System.Object)*/
        (asm1.x6000001)(st_408);
        /* IL_12EA: ldc.i8 17592186044415*/
        st_409 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_12F3: ldc.i8 68988964880*/
        st_40A = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_12FC: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_40B = (asm1.x6000011)(st_409,st_40A);
        /* IL_1301: box System.UInt64*/
        st_40C = {
            'boxed': st_40B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1306: call Void Log(System.Object)*/
        (asm1.x6000001)(st_40C);
        /* IL_130B: ldc.i8 281474976710655*/
        st_40D = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_1314: ldc.i8 1103823438081*/
        st_40E = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_131D: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_40F = (asm1.x6000011)(st_40D,st_40E);
        /* IL_1322: box System.UInt64*/
        st_410 = {
            'boxed': st_40F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1327: call Void Log(System.Object)*/
        (asm1.x6000001)(st_410);
        /* IL_132C: ldc.i8 4503599627370495*/
        st_411 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_1335: ldc.i8 17661175009296*/
        st_412 = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_133E: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_413 = (asm1.x6000011)(st_411,st_412);
        /* IL_1343: box System.UInt64*/
        st_414 = {
            'boxed': st_413,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1348: call Void Log(System.Object)*/
        (asm1.x6000001)(st_414);
        /* IL_134D: ldc.i8 72057594037927935*/
        st_415 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_1356: ldc.i8 282578800148737*/
        st_416 = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_135F: call UInt64 Div(System.UInt64, System.UInt64)*/
        st_417 = (asm1.x6000011)(st_415,st_416);
        /* IL_1364: box System.UInt64*/
        st_418 = {
            'boxed': st_417,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1369: call Void Log(System.Object)*/
        (asm1.x6000001)(st_418);
        /* IL_136E: ldstr Mod 1*/
        st_419 = new_string("Mod 1");
        /* IL_1373: call Void Log(System.Object)*/
        (asm1.x6000001)(st_419);
        /* IL_1378: ldc.i4.s 15*/
        st_41A = (15|0);
        /* IL_137A: conv.i8 */
        st_41C = conv_i8(st_41A);
        /* IL_137B: ldc.i4.1 */
        st_41B = (1|0);
        /* IL_137C: conv.i8 */
        st_41D = conv_i8(st_41B);
        /* IL_137D: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_41E = (asm1.x6000012)(st_41C,st_41D);
        /* IL_1382: box System.UInt64*/
        st_41F = {
            'boxed': st_41E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1387: call Void Log(System.Object)*/
        (asm1.x6000001)(st_41F);
        /* IL_138C: ldc.i4 255*/
        st_420 = (255|0);
        /* IL_1391: conv.i8 */
        st_422 = conv_i8(st_420);
        /* IL_1392: ldc.i4.1 */
        st_421 = (1|0);
        /* IL_1393: conv.i8 */
        st_423 = conv_i8(st_421);
        /* IL_1394: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_424 = (asm1.x6000012)(st_422,st_423);
        /* IL_1399: box System.UInt64*/
        st_425 = {
            'boxed': st_424,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_139E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_425);
        /* IL_13A3: ldc.i4 4095*/
        st_426 = (4095|0);
        /* IL_13A8: conv.i8 */
        st_428 = conv_i8(st_426);
        /* IL_13A9: ldc.i4.1 */
        st_427 = (1|0);
        /* IL_13AA: conv.i8 */
        st_429 = conv_i8(st_427);
        /* IL_13AB: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_42A = (asm1.x6000012)(st_428,st_429);
        /* IL_13B0: box System.UInt64*/
        st_42B = {
            'boxed': st_42A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_13B5: call Void Log(System.Object)*/
        (asm1.x6000001)(st_42B);
        /* IL_13BA: ldc.i4 65535*/
        st_42C = (65535|0);
        /* IL_13BF: conv.i8 */
        st_42E = conv_i8(st_42C);
        /* IL_13C0: ldc.i4.1 */
        st_42D = (1|0);
        /* IL_13C1: conv.i8 */
        st_42F = conv_i8(st_42D);
        /* IL_13C2: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_430 = (asm1.x6000012)(st_42E,st_42F);
        /* IL_13C7: box System.UInt64*/
        st_431 = {
            'boxed': st_430,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_13CC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_431);
        /* IL_13D1: ldc.i4 1048575*/
        st_432 = (1048575|0);
        /* IL_13D6: conv.i8 */
        st_434 = conv_i8(st_432);
        /* IL_13D7: ldc.i4.1 */
        st_433 = (1|0);
        /* IL_13D8: conv.i8 */
        st_435 = conv_i8(st_433);
        /* IL_13D9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_436 = (asm1.x6000012)(st_434,st_435);
        /* IL_13DE: box System.UInt64*/
        st_437 = {
            'boxed': st_436,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_13E3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_437);
        /* IL_13E8: ldc.i4 16777215*/
        st_438 = (16777215|0);
        /* IL_13ED: conv.i8 */
        st_43A = conv_i8(st_438);
        /* IL_13EE: ldc.i4.1 */
        st_439 = (1|0);
        /* IL_13EF: conv.i8 */
        st_43B = conv_i8(st_439);
        /* IL_13F0: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_43C = (asm1.x6000012)(st_43A,st_43B);
        /* IL_13F5: box System.UInt64*/
        st_43D = {
            'boxed': st_43C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_13FA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_43D);
        /* IL_13FF: ldc.i4 268435455*/
        st_43E = (268435455|0);
        /* IL_1404: conv.i8 */
        st_440 = conv_i8(st_43E);
        /* IL_1405: ldc.i4.1 */
        st_43F = (1|0);
        /* IL_1406: conv.i8 */
        st_441 = conv_i8(st_43F);
        /* IL_1407: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_442 = (asm1.x6000012)(st_440,st_441);
        /* IL_140C: box System.UInt64*/
        st_443 = {
            'boxed': st_442,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1411: call Void Log(System.Object)*/
        (asm1.x6000001)(st_443);
        /* IL_1416: ldc.i4.m1 */
        st_444 = (-1|0);
        /* IL_1417: conv.u8 */
        st_446 = conv_u8(st_444);
        /* IL_1418: ldc.i4.1 */
        st_445 = (1|0);
        /* IL_1419: conv.i8 */
        st_447 = conv_i8(st_445);
        /* IL_141A: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_448 = (asm1.x6000012)(st_446,st_447);
        /* IL_141F: box System.UInt64*/
        st_449 = {
            'boxed': st_448,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1424: call Void Log(System.Object)*/
        (asm1.x6000001)(st_449);
        /* IL_1429: ldc.i8 68719476735*/
        st_44B = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_1432: ldc.i4.1 */
        st_44A = (1|0);
        /* IL_1433: conv.i8 */
        st_44C = conv_i8(st_44A);
        /* IL_1434: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_44D = (asm1.x6000012)(st_44B,st_44C);
        /* IL_1439: box System.UInt64*/
        st_44E = {
            'boxed': st_44D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_143E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_44E);
        /* IL_1443: ldc.i8 1099511627775*/
        st_450 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_144C: ldc.i4.1 */
        st_44F = (1|0);
        /* IL_144D: conv.i8 */
        st_451 = conv_i8(st_44F);
        /* IL_144E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_452 = (asm1.x6000012)(st_450,st_451);
        /* IL_1453: box System.UInt64*/
        st_453 = {
            'boxed': st_452,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1458: call Void Log(System.Object)*/
        (asm1.x6000001)(st_453);
        /* IL_145D: ldc.i8 17592186044415*/
        st_455 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_1466: ldc.i4.1 */
        st_454 = (1|0);
        /* IL_1467: conv.i8 */
        st_456 = conv_i8(st_454);
        /* IL_1468: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_457 = (asm1.x6000012)(st_455,st_456);
        /* IL_146D: box System.UInt64*/
        st_458 = {
            'boxed': st_457,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1472: call Void Log(System.Object)*/
        (asm1.x6000001)(st_458);
        /* IL_1477: ldc.i8 281474976710655*/
        st_45A = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_1480: ldc.i4.1 */
        st_459 = (1|0);
        /* IL_1481: conv.i8 */
        st_45B = conv_i8(st_459);
        /* IL_1482: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_45C = (asm1.x6000012)(st_45A,st_45B);
        /* IL_1487: box System.UInt64*/
        st_45D = {
            'boxed': st_45C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_148C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_45D);
        /* IL_1491: ldc.i8 4503599627370495*/
        st_45F = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_149A: ldc.i4.1 */
        st_45E = (1|0);
        /* IL_149B: conv.i8 */
        st_460 = conv_i8(st_45E);
        /* IL_149C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_461 = (asm1.x6000012)(st_45F,st_460);
        /* IL_14A1: box System.UInt64*/
        st_462 = {
            'boxed': st_461,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_14A6: call Void Log(System.Object)*/
        (asm1.x6000001)(st_462);
        /* IL_14AB: ldc.i8 72057594037927935*/
        st_464 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_14B4: ldc.i4.1 */
        st_463 = (1|0);
        /* IL_14B5: conv.i8 */
        st_465 = conv_i8(st_463);
        /* IL_14B6: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_466 = (asm1.x6000012)(st_464,st_465);
        /* IL_14BB: box System.UInt64*/
        st_467 = {
            'boxed': st_466,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_14C0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_467);
        /* IL_14C5: ldstr Mod 2*/
        st_468 = new_string("Mod 2");
        /* IL_14CA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_468);
        /* IL_14CF: ldc.i4.s 15*/
        st_469 = (15|0);
        /* IL_14D1: conv.i8 */
        st_46B = conv_i8(st_469);
        /* IL_14D2: ldc.i4.2 */
        st_46A = (2|0);
        /* IL_14D3: conv.i8 */
        st_46C = conv_i8(st_46A);
        /* IL_14D4: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_46D = (asm1.x6000012)(st_46B,st_46C);
        /* IL_14D9: box System.UInt64*/
        st_46E = {
            'boxed': st_46D,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_14DE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_46E);
        /* IL_14E3: ldc.i4 255*/
        st_46F = (255|0);
        /* IL_14E8: conv.i8 */
        st_471 = conv_i8(st_46F);
        /* IL_14E9: ldc.i4.2 */
        st_470 = (2|0);
        /* IL_14EA: conv.i8 */
        st_472 = conv_i8(st_470);
        /* IL_14EB: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_473 = (asm1.x6000012)(st_471,st_472);
        /* IL_14F0: box System.UInt64*/
        st_474 = {
            'boxed': st_473,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_14F5: call Void Log(System.Object)*/
        (asm1.x6000001)(st_474);
        /* IL_14FA: ldc.i4 4095*/
        st_475 = (4095|0);
        /* IL_14FF: conv.i8 */
        st_477 = conv_i8(st_475);
        /* IL_1500: ldc.i4.2 */
        st_476 = (2|0);
        /* IL_1501: conv.i8 */
        st_478 = conv_i8(st_476);
        /* IL_1502: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_479 = (asm1.x6000012)(st_477,st_478);
        /* IL_1507: box System.UInt64*/
        st_47A = {
            'boxed': st_479,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_150C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_47A);
        /* IL_1511: ldc.i4 65535*/
        st_47B = (65535|0);
        /* IL_1516: conv.i8 */
        st_47D = conv_i8(st_47B);
        /* IL_1517: ldc.i4.2 */
        st_47C = (2|0);
        /* IL_1518: conv.i8 */
        st_47E = conv_i8(st_47C);
        /* IL_1519: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_47F = (asm1.x6000012)(st_47D,st_47E);
        /* IL_151E: box System.UInt64*/
        st_480 = {
            'boxed': st_47F,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1523: call Void Log(System.Object)*/
        (asm1.x6000001)(st_480);
        /* IL_1528: ldc.i4 1048575*/
        st_481 = (1048575|0);
        /* IL_152D: conv.i8 */
        st_483 = conv_i8(st_481);
        /* IL_152E: ldc.i4.2 */
        st_482 = (2|0);
        /* IL_152F: conv.i8 */
        st_484 = conv_i8(st_482);
        /* IL_1530: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_485 = (asm1.x6000012)(st_483,st_484);
        /* IL_1535: box System.UInt64*/
        st_486 = {
            'boxed': st_485,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_153A: call Void Log(System.Object)*/
        (asm1.x6000001)(st_486);
        /* IL_153F: ldc.i4 16777215*/
        st_487 = (16777215|0);
        /* IL_1544: conv.i8 */
        st_489 = conv_i8(st_487);
        /* IL_1545: ldc.i4.2 */
        st_488 = (2|0);
        /* IL_1546: conv.i8 */
        st_48A = conv_i8(st_488);
        /* IL_1547: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_48B = (asm1.x6000012)(st_489,st_48A);
        /* IL_154C: box System.UInt64*/
        st_48C = {
            'boxed': st_48B,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1551: call Void Log(System.Object)*/
        (asm1.x6000001)(st_48C);
        /* IL_1556: ldc.i4 268435455*/
        st_48D = (268435455|0);
        /* IL_155B: conv.i8 */
        st_48F = conv_i8(st_48D);
        /* IL_155C: ldc.i4.2 */
        st_48E = (2|0);
        /* IL_155D: conv.i8 */
        st_490 = conv_i8(st_48E);
        /* IL_155E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_491 = (asm1.x6000012)(st_48F,st_490);
        /* IL_1563: box System.UInt64*/
        st_492 = {
            'boxed': st_491,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1568: call Void Log(System.Object)*/
        (asm1.x6000001)(st_492);
        /* IL_156D: ldc.i4.m1 */
        st_493 = (-1|0);
        /* IL_156E: conv.u8 */
        st_495 = conv_u8(st_493);
        /* IL_156F: ldc.i4.2 */
        st_494 = (2|0);
        /* IL_1570: conv.i8 */
        st_496 = conv_i8(st_494);
        /* IL_1571: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_497 = (asm1.x6000012)(st_495,st_496);
        /* IL_1576: box System.UInt64*/
        st_498 = {
            'boxed': st_497,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_157B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_498);
        /* IL_1580: ldc.i8 68719476735*/
        st_49A = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_1589: ldc.i4.2 */
        st_499 = (2|0);
        /* IL_158A: conv.i8 */
        st_49B = conv_i8(st_499);
        /* IL_158B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_49C = (asm1.x6000012)(st_49A,st_49B);
        /* IL_1590: box System.UInt64*/
        st_49D = {
            'boxed': st_49C,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1595: call Void Log(System.Object)*/
        (asm1.x6000001)(st_49D);
        /* IL_159A: ldc.i8 1099511627775*/
        st_49F = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_15A3: ldc.i4.2 */
        st_49E = (2|0);
        /* IL_15A4: conv.i8 */
        st_4A0 = conv_i8(st_49E);
        /* IL_15A5: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4A1 = (asm1.x6000012)(st_49F,st_4A0);
        /* IL_15AA: box System.UInt64*/
        st_4A2 = {
            'boxed': st_4A1,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_15AF: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4A2);
        /* IL_15B4: ldc.i8 17592186044415*/
        st_4A4 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_15BD: ldc.i4.2 */
        st_4A3 = (2|0);
        /* IL_15BE: conv.i8 */
        st_4A5 = conv_i8(st_4A3);
        /* IL_15BF: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4A6 = (asm1.x6000012)(st_4A4,st_4A5);
        /* IL_15C4: box System.UInt64*/
        st_4A7 = {
            'boxed': st_4A6,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_15C9: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4A7);
        /* IL_15CE: ldc.i8 281474976710655*/
        st_4A9 = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_15D7: ldc.i4.2 */
        st_4A8 = (2|0);
        /* IL_15D8: conv.i8 */
        st_4AA = conv_i8(st_4A8);
        /* IL_15D9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4AB = (asm1.x6000012)(st_4A9,st_4AA);
        /* IL_15DE: box System.UInt64*/
        st_4AC = {
            'boxed': st_4AB,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_15E3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4AC);
        /* IL_15E8: ldc.i8 4503599627370495*/
        st_4AE = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_15F1: ldc.i4.2 */
        st_4AD = (2|0);
        /* IL_15F2: conv.i8 */
        st_4AF = conv_i8(st_4AD);
        /* IL_15F3: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4B0 = (asm1.x6000012)(st_4AE,st_4AF);
        /* IL_15F8: box System.UInt64*/
        st_4B1 = {
            'boxed': st_4B0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_15FD: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4B1);
        /* IL_1602: ldc.i8 72057594037927935*/
        st_4B3 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_160B: ldc.i4.2 */
        st_4B2 = (2|0);
        /* IL_160C: conv.i8 */
        st_4B4 = conv_i8(st_4B2);
        /* IL_160D: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4B5 = (asm1.x6000012)(st_4B3,st_4B4);
        /* IL_1612: box System.UInt64*/
        st_4B6 = {
            'boxed': st_4B5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1617: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4B6);
        /* IL_161C: ldstr Mod 0x1, 0x010, 0x0101 etc*/
        st_4B7 = new_string("Mod 0x1, 0x010, 0x0101 etc");
        /* IL_1621: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4B7);
        /* IL_1626: ldc.i4 255*/
        st_4B8 = (255|0);
        /* IL_162B: conv.i8 */
        st_4BA = conv_i8(st_4B8);
        /* IL_162C: ldc.i4.1 */
        st_4B9 = (1|0);
        /* IL_162D: conv.i8 */
        st_4BB = conv_i8(st_4B9);
        /* IL_162E: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4BC = (asm1.x6000012)(st_4BA,st_4BB);
        /* IL_1633: box System.UInt64*/
        st_4BD = {
            'boxed': st_4BC,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1638: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4BD);
        /* IL_163D: ldc.i4 4095*/
        st_4BE = (4095|0);
        /* IL_1642: conv.i8 */
        st_4C0 = conv_i8(st_4BE);
        /* IL_1643: ldc.i4.s 16*/
        st_4BF = (16|0);
        /* IL_1645: conv.i8 */
        st_4C1 = conv_i8(st_4BF);
        /* IL_1646: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4C2 = (asm1.x6000012)(st_4C0,st_4C1);
        /* IL_164B: box System.UInt64*/
        st_4C3 = {
            'boxed': st_4C2,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1650: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4C3);
        /* IL_1655: ldc.i4 65535*/
        st_4C4 = (65535|0);
        /* IL_165A: conv.i8 */
        st_4C6 = conv_i8(st_4C4);
        /* IL_165B: ldc.i4 257*/
        st_4C5 = (257|0);
        /* IL_1660: conv.i8 */
        st_4C7 = conv_i8(st_4C5);
        /* IL_1661: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4C8 = (asm1.x6000012)(st_4C6,st_4C7);
        /* IL_1666: box System.UInt64*/
        st_4C9 = {
            'boxed': st_4C8,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_166B: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4C9);
        /* IL_1670: ldc.i4 1048575*/
        st_4CA = (1048575|0);
        /* IL_1675: conv.i8 */
        st_4CC = conv_i8(st_4CA);
        /* IL_1676: ldc.i4 4112*/
        st_4CB = (4112|0);
        /* IL_167B: conv.i8 */
        st_4CD = conv_i8(st_4CB);
        /* IL_167C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4CE = (asm1.x6000012)(st_4CC,st_4CD);
        /* IL_1681: box System.UInt64*/
        st_4CF = {
            'boxed': st_4CE,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1686: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4CF);
        /* IL_168B: ldc.i4 16777215*/
        st_4D0 = (16777215|0);
        /* IL_1690: conv.i8 */
        st_4D2 = conv_i8(st_4D0);
        /* IL_1691: ldc.i4 65793*/
        st_4D1 = (65793|0);
        /* IL_1696: conv.i8 */
        st_4D3 = conv_i8(st_4D1);
        /* IL_1697: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4D4 = (asm1.x6000012)(st_4D2,st_4D3);
        /* IL_169C: box System.UInt64*/
        st_4D5 = {
            'boxed': st_4D4,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_16A1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4D5);
        /* IL_16A6: ldc.i4 268435455*/
        st_4D6 = (268435455|0);
        /* IL_16AB: conv.i8 */
        st_4D8 = conv_i8(st_4D6);
        /* IL_16AC: ldc.i4 1052688*/
        st_4D7 = (1052688|0);
        /* IL_16B1: conv.i8 */
        st_4D9 = conv_i8(st_4D7);
        /* IL_16B2: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4DA = (asm1.x6000012)(st_4D8,st_4D9);
        /* IL_16B7: box System.UInt64*/
        st_4DB = {
            'boxed': st_4DA,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_16BC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4DB);
        /* IL_16C1: ldc.i4.m1 */
        st_4DC = (-1|0);
        /* IL_16C2: conv.u8 */
        st_4DE = conv_u8(st_4DC);
        /* IL_16C3: ldc.i4 16843009*/
        st_4DD = (16843009|0);
        /* IL_16C8: conv.i8 */
        st_4DF = conv_i8(st_4DD);
        /* IL_16C9: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4E0 = (asm1.x6000012)(st_4DE,st_4DF);
        /* IL_16CE: box System.UInt64*/
        st_4E1 = {
            'boxed': st_4E0,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_16D3: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4E1);
        /* IL_16D8: ldc.i8 68719476735*/
        st_4E3 = new Uint32Array([ 0xFFFFFFFF,0xF ]);
        /* IL_16E1: ldc.i4 269488144*/
        st_4E2 = (269488144|0);
        /* IL_16E6: conv.i8 */
        st_4E4 = conv_i8(st_4E2);
        /* IL_16E7: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4E5 = (asm1.x6000012)(st_4E3,st_4E4);
        /* IL_16EC: box System.UInt64*/
        st_4E6 = {
            'boxed': st_4E5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_16F1: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4E6);
        /* IL_16F6: ldc.i8 1099511627775*/
        st_4E7 = new Uint32Array([ 0xFFFFFFFF,0xFF ]);
        /* IL_16FF: ldc.i8 4311810305*/
        st_4E8 = new Uint32Array([ 0x1010101,0x1 ]);
        /* IL_1708: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4E9 = (asm1.x6000012)(st_4E7,st_4E8);
        /* IL_170D: box System.UInt64*/
        st_4EA = {
            'boxed': st_4E9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1712: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4EA);
        /* IL_1717: ldc.i8 17592186044415*/
        st_4EB = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_1720: ldc.i8 68988964880*/
        st_4EC = new Uint32Array([ 0x10101010,0x10 ]);
        /* IL_1729: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4ED = (asm1.x6000012)(st_4EB,st_4EC);
        /* IL_172E: box System.UInt64*/
        st_4EE = {
            'boxed': st_4ED,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1733: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4EE);
        /* IL_1738: ldc.i8 281474976710655*/
        st_4EF = new Uint32Array([ 0xFFFFFFFF,0xFFFF ]);
        /* IL_1741: ldc.i8 1103823438081*/
        st_4F0 = new Uint32Array([ 0x1010101,0x101 ]);
        /* IL_174A: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4F1 = (asm1.x6000012)(st_4EF,st_4F0);
        /* IL_174F: box System.UInt64*/
        st_4F2 = {
            'boxed': st_4F1,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1754: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4F2);
        /* IL_1759: ldc.i8 4503599627370495*/
        st_4F3 = new Uint32Array([ 0xFFFFFFFF,0xFFFFF ]);
        /* IL_1762: ldc.i8 17661175009296*/
        st_4F4 = new Uint32Array([ 0x10101010,0x1010 ]);
        /* IL_176B: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4F5 = (asm1.x6000012)(st_4F3,st_4F4);
        /* IL_1770: box System.UInt64*/
        st_4F6 = {
            'boxed': st_4F5,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1775: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4F6);
        /* IL_177A: ldc.i8 72057594037927935*/
        st_4F7 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_1783: ldc.i8 282578800148737*/
        st_4F8 = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_178C: call UInt64 Mod(System.UInt64, System.UInt64)*/
        st_4F9 = (asm1.x6000012)(st_4F7,st_4F8);
        /* IL_1791: box System.UInt64*/
        st_4FA = {
            'boxed': st_4F9,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1796: call Void Log(System.Object)*/
        (asm1.x6000001)(st_4FA);
        /* IL_179B: ldc.i4.0 */
        st_4FB = (0|0);
        /* IL_179C: conv.i8 */
        st_4FC = conv_i8(st_4FB);
        /* IL_179D: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_4FC);
        /* IL_17A2: ldc.i4.1 */
        st_4FD = (1|0);
        /* IL_17A3: conv.i8 */
        st_4FE = conv_i8(st_4FD);
        /* IL_17A4: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_4FE);
        /* IL_17A9: ldc.i4 255*/
        st_4FF = (255|0);
        /* IL_17AE: conv.i8 */
        st_500 = conv_i8(st_4FF);
        /* IL_17AF: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_500);
        /* IL_17B4: ldc.i8 282578800148737*/
        st_501 = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_17BD: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_501);
        /* IL_17C2: ldc.i8 4503599627370496*/
        st_502 = new Uint32Array([ 0x0,0x100000 ]);
        /* IL_17CB: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_502);
        /* IL_17D0: ldc.i8 72057594037927935*/
        st_503 = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_17D9: call Void TestRightShift(System.UInt64)*/
        (asm1.x6000013)(st_503);
        /* IL_17DE: ldc.i4.0 */
        st_504 = (0|0);
        /* IL_17DF: conv.i8 */
        st_505 = conv_i8(st_504);
        /* IL_17E0: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_505);
        /* IL_17E5: ldc.i4.1 */
        st_506 = (1|0);
        /* IL_17E6: conv.i8 */
        st_507 = conv_i8(st_506);
        /* IL_17E7: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_507);
        /* IL_17EC: ldc.i4 255*/
        st_508 = (255|0);
        /* IL_17F1: conv.i8 */
        st_509 = conv_i8(st_508);
        /* IL_17F2: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_509);
        /* IL_17F7: ldc.i8 282578800148737*/
        st_50A = new Uint32Array([ 0x1010101,0x10101 ]);
        /* IL_1800: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_50A);
        /* IL_1805: ldc.i8 4503599627370496*/
        st_50B = new Uint32Array([ 0x0,0x100000 ]);
        /* IL_180E: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_50B);
        /* IL_1813: ldc.i8 72057594037927935*/
        st_50C = new Uint32Array([ 0xFFFFFFFF,0xFFFFFF ]);
        /* IL_181C: call Void TestLeftShift(System.UInt64)*/
        (asm1.x6000014)(st_50C);
        /* IL_1821: ldc.i4 255*/
        st_50D = (255|0);
        /* IL_1826: conv.i8 */
        st_50E = conv_i8(st_50D);
        /* IL_1827: call Double Double(System.UInt64)*/
        st_50F = (asm1.x600000d)(st_50E);
        /* IL_182C: box System.Double*/
        st_510 = {
            'boxed': st_50F,
            'type': t1,
            'vtable': t1.prototype.vtable
        };
        /* IL_1831: call Void Log(System.Object)*/
        (asm1.x6000001)(st_510);
        /* IL_1836: ldc.i8 17592186044415*/
        st_511 = new Uint32Array([ 0xFFFFFFFF,0xFFF ]);
        /* IL_183F: call Double Double(System.UInt64)*/
        st_512 = (asm1.x600000d)(st_511);
        /* IL_1844: box System.Double*/
        st_513 = {
            'boxed': st_512,
            'type': t1,
            'vtable': t1.prototype.vtable
        };
        /* IL_1849: call Void Log(System.Object)*/
        (asm1.x6000001)(st_513);
        /* IL_184E: ret */
        return ;
    };
    asm.x600000d = function Double(arg0)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: conv.r.un */
        st_01 = to_number(st_00);
        /* IL_02: conv.r8 */
        st_02 = st_01;
        /* IL_03: ret */
        return st_02;
    };;
    asm.x600000e = function Add(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: add */
        st_02 = (asm0.XInt64_Addition)(st_00,st_01);
        /* IL_03: ret */
        return st_02;
    };;
    asm.x600000f = function Sub(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: sub */
        st_02 = (asm0.XInt64_Subtraction)(st_00,st_01);
        /* IL_03: ret */
        return st_02;
    };;
    asm.x6000010 = function Mul(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: mul */
        st_02 = (asm0.XInt64_Multiplication)(st_00,st_01);
        /* IL_03: ret */
        return st_02;
    };;
    asm.x6000011 = function Div(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: div.un */
        st_02 = (asm0.UInt64_Division)(st_00,st_01);
        /* IL_03: ret */
        return st_02;
    };;
    asm.x6000012 = function Mod(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldarg.1 */
        st_01 = arg1;
        /* IL_02: rem.un */
        st_02 = (asm0.UInt64_Modulus)(st_00,st_01);
        /* IL_03: ret */
        return st_02;
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
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldc.i4.0 */
        st_01 = (0|0);
        /* IL_02: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_02 = (asm1.x6000015)(st_00,st_01);
        /* IL_07: box System.UInt64*/
        st_03 = {
            'boxed': st_02,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_03);
        /* IL_11: ldarg.0 */
        st_04 = arg0;
        /* IL_12: ldc.i4.1 */
        st_05 = (1|0);
        /* IL_13: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_06 = (asm1.x6000015)(st_04,st_05);
        /* IL_18: box System.UInt64*/
        st_07 = {
            'boxed': st_06,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_07);
        /* IL_22: ldarg.0 */
        st_08 = arg0;
        /* IL_23: ldc.i4.2 */
        st_09 = (2|0);
        /* IL_24: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_0A = (asm1.x6000015)(st_08,st_09);
        /* IL_29: box System.UInt64*/
        st_0B = {
            'boxed': st_0A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0B);
        /* IL_33: ldarg.0 */
        st_0C = arg0;
        /* IL_34: ldc.i4.7 */
        st_0D = (7|0);
        /* IL_35: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_0E = (asm1.x6000015)(st_0C,st_0D);
        /* IL_3A: box System.UInt64*/
        st_0F = {
            'boxed': st_0E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0F);
        /* IL_44: ldarg.0 */
        st_10 = arg0;
        /* IL_45: ldc.i4.8 */
        st_11 = (8|0);
        /* IL_46: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_12 = (asm1.x6000015)(st_10,st_11);
        /* IL_4B: box System.UInt64*/
        st_13 = {
            'boxed': st_12,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)(st_13);
        /* IL_55: ldarg.0 */
        st_14 = arg0;
        /* IL_56: ldc.i4.s 9*/
        st_15 = (9|0);
        /* IL_58: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_16 = (asm1.x6000015)(st_14,st_15);
        /* IL_5D: box System.UInt64*/
        st_17 = {
            'boxed': st_16,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)(st_17);
        /* IL_67: ldarg.0 */
        st_18 = arg0;
        /* IL_68: ldc.i4.s 15*/
        st_19 = (15|0);
        /* IL_6A: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_1A = (asm1.x6000015)(st_18,st_19);
        /* IL_6F: box System.UInt64*/
        st_1B = {
            'boxed': st_1A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1B);
        /* IL_79: ldarg.0 */
        st_1C = arg0;
        /* IL_7A: ldc.i4.s 16*/
        st_1D = (16|0);
        /* IL_7C: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_1E = (asm1.x6000015)(st_1C,st_1D);
        /* IL_81: box System.UInt64*/
        st_1F = {
            'boxed': st_1E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1F);
        /* IL_8B: ldarg.0 */
        st_20 = arg0;
        /* IL_8C: ldc.i4.s 17*/
        st_21 = (17|0);
        /* IL_8E: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_22 = (asm1.x6000015)(st_20,st_21);
        /* IL_93: box System.UInt64*/
        st_23 = {
            'boxed': st_22,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)(st_23);
        /* IL_9D: ldarg.0 */
        st_24 = arg0;
        /* IL_9E: ldc.i4.s 23*/
        st_25 = (23|0);
        /* IL_A0: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_26 = (asm1.x6000015)(st_24,st_25);
        /* IL_A5: box System.UInt64*/
        st_27 = {
            'boxed': st_26,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_27);
        /* IL_AF: ldarg.0 */
        st_28 = arg0;
        /* IL_B0: ldc.i4.s 24*/
        st_29 = (24|0);
        /* IL_B2: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_2A = (asm1.x6000015)(st_28,st_29);
        /* IL_B7: box System.UInt64*/
        st_2B = {
            'boxed': st_2A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2B);
        /* IL_C1: ldarg.0 */
        st_2C = arg0;
        /* IL_C2: ldc.i4.s 25*/
        st_2D = (25|0);
        /* IL_C4: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_2E = (asm1.x6000015)(st_2C,st_2D);
        /* IL_C9: box System.UInt64*/
        st_2F = {
            'boxed': st_2E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2F);
        /* IL_D3: ldarg.0 */
        st_30 = arg0;
        /* IL_D4: ldc.i4.s 31*/
        st_31 = (31|0);
        /* IL_D6: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_32 = (asm1.x6000015)(st_30,st_31);
        /* IL_DB: box System.UInt64*/
        st_33 = {
            'boxed': st_32,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_33);
        /* IL_E5: ldarg.0 */
        st_34 = arg0;
        /* IL_E6: ldc.i4.s 32*/
        st_35 = (32|0);
        /* IL_E8: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_36 = (asm1.x6000015)(st_34,st_35);
        /* IL_ED: box System.UInt64*/
        st_37 = {
            'boxed': st_36,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)(st_37);
        /* IL_F7: ldarg.0 */
        st_38 = arg0;
        /* IL_F8: ldc.i4.s 33*/
        st_39 = (33|0);
        /* IL_FA: call UInt64 RightShift(System.UInt64, System.Int32)*/
        st_3A = (asm1.x6000015)(st_38,st_39);
        /* IL_FF: box System.UInt64*/
        st_3B = {
            'boxed': st_3A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3B);
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
        t0 = ((asm0)["System.UInt64"])();
        /* IL_00: ldarg.0 */
        st_00 = arg0;
        /* IL_01: ldc.i4.0 */
        st_01 = (0|0);
        /* IL_02: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_02 = (asm1.x6000016)(st_00,st_01);
        /* IL_07: box System.UInt64*/
        st_03 = {
            'boxed': st_02,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_0C: call Void Log(System.Object)*/
        (asm1.x6000001)(st_03);
        /* IL_11: ldarg.0 */
        st_04 = arg0;
        /* IL_12: ldc.i4.1 */
        st_05 = (1|0);
        /* IL_13: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_06 = (asm1.x6000016)(st_04,st_05);
        /* IL_18: box System.UInt64*/
        st_07 = {
            'boxed': st_06,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_1D: call Void Log(System.Object)*/
        (asm1.x6000001)(st_07);
        /* IL_22: ldarg.0 */
        st_08 = arg0;
        /* IL_23: ldc.i4.2 */
        st_09 = (2|0);
        /* IL_24: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_0A = (asm1.x6000016)(st_08,st_09);
        /* IL_29: box System.UInt64*/
        st_0B = {
            'boxed': st_0A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_2E: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0B);
        /* IL_33: ldarg.0 */
        st_0C = arg0;
        /* IL_34: ldc.i4.7 */
        st_0D = (7|0);
        /* IL_35: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_0E = (asm1.x6000016)(st_0C,st_0D);
        /* IL_3A: box System.UInt64*/
        st_0F = {
            'boxed': st_0E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_3F: call Void Log(System.Object)*/
        (asm1.x6000001)(st_0F);
        /* IL_44: ldarg.0 */
        st_10 = arg0;
        /* IL_45: ldc.i4.8 */
        st_11 = (8|0);
        /* IL_46: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_12 = (asm1.x6000016)(st_10,st_11);
        /* IL_4B: box System.UInt64*/
        st_13 = {
            'boxed': st_12,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_50: call Void Log(System.Object)*/
        (asm1.x6000001)(st_13);
        /* IL_55: ldarg.0 */
        st_14 = arg0;
        /* IL_56: ldc.i4.s 9*/
        st_15 = (9|0);
        /* IL_58: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_16 = (asm1.x6000016)(st_14,st_15);
        /* IL_5D: box System.UInt64*/
        st_17 = {
            'boxed': st_16,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_62: call Void Log(System.Object)*/
        (asm1.x6000001)(st_17);
        /* IL_67: ldarg.0 */
        st_18 = arg0;
        /* IL_68: ldc.i4.s 15*/
        st_19 = (15|0);
        /* IL_6A: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_1A = (asm1.x6000016)(st_18,st_19);
        /* IL_6F: box System.UInt64*/
        st_1B = {
            'boxed': st_1A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_74: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1B);
        /* IL_79: ldarg.0 */
        st_1C = arg0;
        /* IL_7A: ldc.i4.s 16*/
        st_1D = (16|0);
        /* IL_7C: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_1E = (asm1.x6000016)(st_1C,st_1D);
        /* IL_81: box System.UInt64*/
        st_1F = {
            'boxed': st_1E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_86: call Void Log(System.Object)*/
        (asm1.x6000001)(st_1F);
        /* IL_8B: ldarg.0 */
        st_20 = arg0;
        /* IL_8C: ldc.i4.s 17*/
        st_21 = (17|0);
        /* IL_8E: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_22 = (asm1.x6000016)(st_20,st_21);
        /* IL_93: box System.UInt64*/
        st_23 = {
            'boxed': st_22,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_98: call Void Log(System.Object)*/
        (asm1.x6000001)(st_23);
        /* IL_9D: ldarg.0 */
        st_24 = arg0;
        /* IL_9E: ldc.i4.s 23*/
        st_25 = (23|0);
        /* IL_A0: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_26 = (asm1.x6000016)(st_24,st_25);
        /* IL_A5: box System.UInt64*/
        st_27 = {
            'boxed': st_26,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_AA: call Void Log(System.Object)*/
        (asm1.x6000001)(st_27);
        /* IL_AF: ldarg.0 */
        st_28 = arg0;
        /* IL_B0: ldc.i4.s 24*/
        st_29 = (24|0);
        /* IL_B2: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_2A = (asm1.x6000016)(st_28,st_29);
        /* IL_B7: box System.UInt64*/
        st_2B = {
            'boxed': st_2A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_BC: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2B);
        /* IL_C1: ldarg.0 */
        st_2C = arg0;
        /* IL_C2: ldc.i4.s 25*/
        st_2D = (25|0);
        /* IL_C4: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_2E = (asm1.x6000016)(st_2C,st_2D);
        /* IL_C9: box System.UInt64*/
        st_2F = {
            'boxed': st_2E,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_CE: call Void Log(System.Object)*/
        (asm1.x6000001)(st_2F);
        /* IL_D3: ldarg.0 */
        st_30 = arg0;
        /* IL_D4: ldc.i4.s 31*/
        st_31 = (31|0);
        /* IL_D6: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_32 = (asm1.x6000016)(st_30,st_31);
        /* IL_DB: box System.UInt64*/
        st_33 = {
            'boxed': st_32,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_E0: call Void Log(System.Object)*/
        (asm1.x6000001)(st_33);
        /* IL_E5: ldarg.0 */
        st_34 = arg0;
        /* IL_E6: ldc.i4.s 32*/
        st_35 = (32|0);
        /* IL_E8: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_36 = (asm1.x6000016)(st_34,st_35);
        /* IL_ED: box System.UInt64*/
        st_37 = {
            'boxed': st_36,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_F2: call Void Log(System.Object)*/
        (asm1.x6000001)(st_37);
        /* IL_F7: ldarg.0 */
        st_38 = arg0;
        /* IL_F8: ldc.i4.s 33*/
        st_39 = (33|0);
        /* IL_FA: call UInt64 LeftShift(System.UInt64, System.Int32)*/
        st_3A = (asm1.x6000016)(st_38,st_39);
        /* IL_FF: box System.UInt64*/
        st_3B = {
            'boxed': st_3A,
            'type': t0,
            'vtable': t0.prototype.vtable
        };
        /* IL_104: call Void Log(System.Object)*/
        (asm1.x6000001)(st_3B);
        /* IL_109: ret */
        return ;
    };
    asm.x6000015 = function RightShift(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        /* IL_00: ldarg.0 */
        st_02 = arg0;
        /* IL_01: ldarg.1 */
        st_00 = arg1;
        /* IL_02: ldc.i4.s 63*/
        st_01 = (63|0);
        /* IL_04: and */
        st_03 = (st_00 & st_01);
        /* IL_05: shr.un */
        st_04 = (asm0.UInt64_RightShift)(st_02,st_03);
        /* IL_06: ret */
        return st_04;
    };;
    asm.x6000016 = function LeftShift(arg0,arg1)
    {
        var st_00;
        var st_01;
        var st_02;
        var st_03;
        var st_04;
        /* IL_00: ldarg.0 */
        st_02 = arg0;
        /* IL_01: ldarg.1 */
        st_00 = arg1;
        /* IL_02: ldc.i4.s 63*/
        st_01 = (63|0);
        /* IL_04: and */
        st_03 = (st_00 & st_01);
        /* IL_05: shl */
        st_04 = (asm0.XInt64_LeftShift)(st_02,st_03);
        /* IL_06: ret */
        return st_04;
    };;
    asm.x6000017 = function _ctor(arg0)
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
