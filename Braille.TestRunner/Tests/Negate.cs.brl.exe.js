var asm0; (function (asm)
{
    asm.FullName = "mscorlib, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
        loc0 = (asm0.x600008c)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
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
                loc1 = (((asm0.x6000008)(arg0,arg1) === (0|0)) ? (1) : (0));
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
                loc1 = (((asm0.x6000008)(arg0,null) === (0|0)) ? (1) : (0));
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
                loc0 = (((arg0.vtable)["asm0.x6000009"])())(convert_box_to_pointer_as_needed(arg0),arg1);
                case 0x2F:
                /* IL_2F: ldloc.0 */
                /* IL_30: ret */
                return loc0;
            }
        }
    };;
    asm.x600000c = function _ctor(arg0)
    {
        /* IL_02: ret */
        return ;
    };;
    asm.x600000d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000010 = function get_Null()
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
    asm.x6000014 = function GetText(arg0)
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
    asm.x6000018_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.Reflection.Assembly"])().init)();
        asm.x6000018 = asm.x6000018_;
    };;
    asm.x6000018 = function (arg0)
    {
        (asm.x6000018_init.apply)(this,arguments);
        return (asm.x6000018.apply)(this,arguments);
    };;
    asm.x6000018_ = function GetInstance(arg0)
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
                arg0.ManagedInstance = newobj(t1,asm0.x6000017,[ null,arg0 ]);
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
    asm.x6000019 = function get_FullName(arg0)
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
    asm.x6000017 = function _ctor(arg0,arg1)
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
    asm.x600001a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000021 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000022 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000024 = function get_AssemblyName(arg0)
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
    asm.x6000025 = function get_AllInternalsVisible(arg0)
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
    asm.x6000026 = function set_AllInternalsVisible(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = arg1;
        /* IL_08: ret */
        return ;
    };;
    asm.x6000023 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldc.i4.1 */
        /* IL_02: stfld Boolean allInternalsVisible*/
        arg0.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = (1|0);
        /* IL_07: ldarg.0 */
        /* IL_08: call Void .ctor()*/
        (asm0.x6000022)(arg0);
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
    asm.x6000027_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        (((asm0)["System.Int32"])().init)();
        asm.x6000027 = asm.x6000027_;
    };;
    asm.x6000027 = function (arg0)
    {
        (asm.x6000027_init.apply)(this,arguments);
        return (asm.x6000027.apply)(this,arguments);
    };;
    asm.x6000027_ = function GetUnderlyingType(arg0)
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
                loc1 = (asm0.x600007b)(arg0);
                /* IL_08: ldloc.1 */
                /* IL_09: brtrue.s IL_11*/
                
                if (loc1){
                    __pos_0__ = 0x11;
                    continue;
                }
                /* IL_0B: newobj Void .ctor()*/
                /* IL_10: throw */
                throw newobj(t0,asm0.x60000bb,[ null ]);
                case 0x11:
                /* IL_11: ldtoken System.Int32*/
                /* IL_16: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_1B: stloc.0 */
                loc0 = (asm0.x6000079)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1));
                /* IL_1E: ldloc.0 */
                /* IL_1F: ret */
                return loc0;
            }
        }
    };
    asm.x6000028 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600000d)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600002c = function get_Value(arg0)
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
    asm.x6000029 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600002a = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
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
    asm.x600002b = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
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
    asm.x600002d = function CreateInstance(arg0)
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
    asm.x6000030 = function get_ValidOn(arg0)
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
    asm.x6000031 = function set_ValidOn(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld AttributeTargets <ValidOn>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000032 = function get_Inherited(arg0)
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
    asm.x6000033 = function set_Inherited(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <Inherited>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000034 = function get_AllowMultiple(arg0)
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
    asm.x6000035 = function set_AllowMultiple(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Boolean <AllowMultiple>k__BackingField*/
        (arg0)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x600002f = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: call Void set_ValidOn(System.AttributeTargets)*/
        (asm0.x6000031)(arg0,clone_value(arg1));
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x6000036 = function ToString(arg0)
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
    asm.x6000044_init = function ()
    {
        (((asm0)["System.Byte"])().init)();
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
        t0 = ((asm0)["System.Byte"])();
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldind.u1 */
        /* IL_03: box System.Byte*/
        /* IL_08: call String NumberStructToString(System.Object)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000045_init = function ()
    {
        (((asm0)["System.Char"])().init)();
        asm.x6000045 = asm.x6000045_;
    };;
    asm.x6000045 = function (arg0)
    {
        (asm.x6000045_init.apply)(this,arguments);
        return (asm.x6000045.apply)(this,arguments);
    };;
    asm.x6000045_ = function ToString(arg0)
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
        loc0 = (asm0.x6000046)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000046 = function(o) { return new_string(String.fromCharCode(o.boxed)); };;
    asm.x6000047 = function(o) { return "0123456789".indexOf(String.fromCharCode(o.boxed)) != -1; };;
    asm.x6000048_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x6000048 = asm.x6000048_;
    };;
    asm.x6000048 = function (arg0,arg1)
    {
        (asm.x6000048_init.apply)(this,arguments);
        return (asm.x6000048.apply)(this,arguments);
    };;
    asm.x6000048_ = function Combine(arg0,arg1)
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
                throw newobj(t0,asm0.x600006b,[ null,new_string("Incompatible delegate types") ]);
                case 0x4C:
                /* IL_4C: ldarg.0 */
                /* IL_4D: ldarg.1 */
                /* IL_4E: callvirt Delegate CombineImpl(System.Delegate)*/
                /* IL_53: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x600004b"])())(arg0,arg1);
                case 0x56:
                /* IL_56: ldloc.0 */
                /* IL_57: ret */
                return loc0;
            }
        }
    };
    asm.x6000049_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x6000049 = asm.x6000049_;
    };;
    asm.x6000049 = function (arg0,arg1)
    {
        (asm.x6000049_init.apply)(this,arguments);
        return (asm.x6000049.apply)(this,arguments);
    };;
    asm.x6000049_ = function Remove(arg0,arg1)
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
                throw newobj(t0,asm0.x600006b,[ null,new_string("Incompatible delegate types") ]);
                case 0x2D:
                /* IL_2D: ldarg.0 */
                /* IL_2E: ldarg.1 */
                /* IL_2F: callvirt Delegate RemoveImpl(System.Delegate)*/
                /* IL_34: stloc.0 */
                loc0 = (((arg0.vtable)["asm0.x600004a"])())(arg0,arg1);
                case 0x37:
                /* IL_37: ldloc.0 */
                /* IL_38: ret */
                return loc0;
            }
        }
    };
    asm.x600004a_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x600004a = asm.x600004a_;
    };;
    asm.x600004a = function (arg0,arg1)
    {
        (asm.x600004a_init.apply)(this,arguments);
        return (asm.x600004a.apply)(this,arguments);
    };;
    asm.x600004a_ = function RemoveImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000af,[ null ]);
    };
    asm.x600004b_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x600004b = asm.x600004b_;
    };;
    asm.x600004b = function (arg0,arg1)
    {
        (asm.x600004b_init.apply)(this,arguments);
        return (asm.x600004b.apply)(this,arguments);
    };;
    asm.x600004b_ = function CombineImpl(arg0,arg1)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000af,[ null ]);
    };
    asm.x600004c_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x600004c = asm.x600004c_;
    };;
    asm.x600004c = function (arg0,arg1)
    {
        (asm.x600004c_init.apply)(this,arguments);
        return (asm.x600004c.apply)(this,arguments);
    };;
    asm.x600004c_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x600004d)(arg0,(t0.IsInst)(arg1));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600004d_init = function ()
    {
        (((asm0)["System.MulticastDelegate"])().init)();
        asm.x600004d = asm.x600004d_;
    };;
    asm.x600004d = function (arg0,arg1)
    {
        (asm.x600004d_init.apply)(this,arguments);
        return (asm.x600004d.apply)(this,arguments);
    };;
    asm.x600004d_ = function op_Equality(arg0,arg1)
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
                loc6 = (asm0.x600004d)(loc3,loc4);
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
    asm.x600004e = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean op_Equality(System.Delegate, System.Delegate)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x600004d)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x600004f = function GetHashCode(arg0)
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
    asm.x6000050 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000051 = 
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
    asm.x6000053 = function GetJsFunction(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld Object _methodPtr*/
        /* IL_07: ldarg.0 */
        /* IL_08: ldfld Object _target*/
        /* IL_0D: call Object GetJsFunction(System.Object, System.Object)*/
        /* IL_12: stloc.0 */
        loc0 = (
            function () { 
                var args = arguments.splice().shift(thisObj); 
                return arg0._methodPtr.apply(null, args); 
            });
        /* IL_15: ldloc.0 */
        /* IL_16: ret */
        return loc0;
    };;
    asm.x6000054_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000054 = asm.x6000054_;
    };;
    asm.x6000054 = function (arg0,arg1)
    {
        (asm.x6000054_init.apply)(this,arguments);
        return (asm.x6000054.apply)(this,arguments);
    };;
    asm.x6000054_ = function CombineImpl(arg0,arg1)
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
                loc2 = (asm0.x6000051)(loc0);
                /* IL_66: ldloc.2 */
                /* IL_67: ret */
                return loc2;
            }
        }
    };
    asm.x6000055_init = function ()
    {
        (((asm0)["System.Delegate"])().init)();
        asm.x6000055 = asm.x6000055_;
    };;
    asm.x6000055 = function (arg0,arg1)
    {
        (asm.x6000055_init.apply)(this,arguments);
        return (asm.x6000055.apply)(this,arguments);
    };;
    asm.x6000055_ = function RemoveImpl(arg0,arg1)
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
                loc5 = (((asm0.x600004d)(arg1,arg0) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x600004e)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x600004e)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc5 = (((asm0.x600004e)((arg0._invocationList.jsarr)[loc1],arg1) === (0|0)) ? (1) : (0));
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
                loc4 = (asm0.x6000051)(loc2);
                case 0x11B:
                /* IL_11B: ldloc.s 4*/
                /* IL_11D: ret */
                return loc4;
            }
        }
    };
    asm.x6000056 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000050)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000058 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x6000057 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x6000059 = (function (o) { console.log(o.jsstr); });;
    asm.x600005a = function WriteLine(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String ToString()*/
        /* IL_07: call Void WriteLineImpl(System.String)*/
        (asm0.x6000059)((((arg0.vtable)["asm0.x6000005"])())(convert_box_to_pointer_as_needed(arg0)));
        /* IL_0C: nop */
        /* IL_0D: ret */
        return ;
    };;
    asm.x600005b = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x600005c_init = function ()
    {
        (((asm0)["System.Double"])().init)();
        asm.x600005c = asm.x600005c_;
    };;
    asm.x600005c = function (arg0)
    {
        (asm.x600005c_init.apply)(this,arguments);
        return (asm.x600005c.apply)(this,arguments);
    };;
    asm.x600005c_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600005d = function get_CurrentManagedThreadId()
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
    asm.x600005e = function get_NewLine()
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
    asm.x600005f = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000061 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x6000060 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x6000064_init = function ()
    {
        (((asm0)["System.Int16"])().init)();
        asm.x6000064 = asm.x6000064_;
    };;
    asm.x6000064 = function (arg0)
    {
        (asm.x6000064_init.apply)(this,arguments);
        return (asm.x6000064.apply)(this,arguments);
    };;
    asm.x6000064_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000065_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x6000065 = asm.x6000065_;
    };;
    asm.x6000065 = function (arg0)
    {
        (asm.x6000065_init.apply)(this,arguments);
        return (asm.x6000065.apply)(this,arguments);
    };;
    asm.x6000065_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000067_init = function ()
    {
        (((asm0)["System.NotSupportedException"])().init)();
        asm.x6000067 = asm.x6000067_;
    };;
    asm.x6000067 = function (arg0,arg1)
    {
        (asm.x6000067_init.apply)(this,arguments);
        return (asm.x6000067.apply)(this,arguments);
    };;
    asm.x6000067_ = function ToString(arg0,arg1)
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
                loc2 = (((asm0.x6000133)(arg1,new_string("X")) === (0|0)) ? (1) : (0));
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
                throw newobj(t0,asm0.x60000b0,[ null ]);
                case 0x25:
                /* IL_25: ldloc.1 */
                /* IL_26: ret */
                return loc1;
            }
        }
    };
    asm.x6000068 = function(o) { return new_string(o.boxed.toString()); };;
    asm.x6000069_init = function ()
    {
        (((asm0)["System.IntPtr"])().init)();
        asm.x6000069 = asm.x6000069_;
    };;
    asm.x6000069 = function (arg0)
    {
        (asm.x6000069_init.apply)(this,arguments);
        return (asm.x6000069.apply)(this,arguments);
    };;
    asm.x6000069_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    asm.x600006d = function get_HResult(arg0)
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
    asm.x600006e = function set_HResult(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Int32 <HResult>k__BackingField*/
        (arg0)["SystemException<HResult>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x600006f = function get_Message(arg0)
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
    asm.x6000070 = function set_Message(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld String <Message>k__BackingField*/
        (arg0)["SystemException<Message>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x6000071 = function ToString(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_Message()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x600006f"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000072 = function get_InnerException(arg0)
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
    asm.x6000073 = function set_InnerException(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: stfld Exception <InnerException>k__BackingField*/
        (arg0)["SystemException<InnerException>k__BackingField"] = arg1;
        /* IL_07: ret */
        return ;
    };;
    asm.x600006a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x600006b = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        (((arg0.vtable)["asm0.x6000070"])())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: nop */
        /* IL_11: ret */
        return ;
    };;
    asm.x600006c = function _ctor(arg0,arg1,arg2)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: callvirt Void set_Message(System.String)*/
        (((arg0.vtable)["asm0.x6000070"])())(arg0,arg1);
        /* IL_0F: nop */
        /* IL_10: ldarg.0 */
        /* IL_11: ldarg.2 */
        /* IL_12: call Void set_InnerException(System.Exception)*/
        (asm0.x6000073)(arg0,arg2);
        /* IL_17: nop */
        /* IL_18: nop */
        /* IL_19: ret */
        return ;
    };;
    asm.x6000074 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600006a)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000075 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000074)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000076 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000077 = function get_Value(arg0)
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
    asm.x6000079 = function GetTypeFromHandle(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Type GetRuntimeTypeFromHandle(System.RuntimeTypeHandle)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x600008d)(clone_value(arg0));
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600007a = function IsSubclassOf(arg0,arg1)
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
                loc0 = (((arg0.vtable)["asm0.x600007d"])())(arg0);
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
                loc0 = (((loc0.vtable)["asm0.x600007d"])())(loc0);
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
    asm.x600007b_init = function ()
    {
        (((asm0)["System.Enum"])().init)();
        asm.x600007b = asm.x600007b_;
    };;
    asm.x600007b = function (arg0)
    {
        (asm.x600007b_init.apply)(this,arguments);
        return (asm.x600007b.apply)(this,arguments);
    };;
    asm.x600007b_ = function get_IsEnum(arg0)
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
        loc0 = (((arg0.vtable)["asm0.x600007a"])())(arg0,(asm0.x6000079)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0)));
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    asm.x6000088 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000021)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000089 = function (o) { return o.type || o.constructor; };;
    asm.x600008b_init = function ()
    {
        (((asm0)["System.Boolean"])().init)();
        (((asm0)["System.RuntimeType"])().init)();
        asm.x600008b = asm.x600008b_;
    };;
    asm.x600008b = function (arg0)
    {
        (asm.x600008b_init.apply)(this,arguments);
        return (asm.x600008b.apply)(this,arguments);
    };;
    asm.x600008b_ = function GetInstance(arg0)
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
                arg0.TypeInstance = newobj(t1,asm0.x600008a,[ null,arg0 ]);
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
    asm.x600008c = function GetType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call constructor GetConstructor(System.Object)*/
        /* IL_07: call Type GetInstance(System.RuntimeType+constructor)*/
        /* IL_0C: stloc.0 */
        loc0 = (asm0.x600008b)((asm0.x6000089)(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x600008d_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        asm.x600008d = asm.x600008d_;
    };;
    asm.x600008d = function (arg0)
    {
        (asm.x600008d_init.apply)(this,arguments);
        return (asm.x600008d.apply)(this,arguments);
    };;
    asm.x600008d_ = function GetRuntimeTypeFromHandle(arg0)
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
        loc0 = (asm0.x600008b)(({
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
    asm.x600008e = function get_Assembly(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld jsAsm Assembly*/
        /* IL_0C: call Assembly GetInstance(System.Reflection.Assembly+jsAsm)*/
        /* IL_11: stloc.0 */
        loc0 = (asm0.x6000018)(arg0.ctor.Assembly);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    asm.x600008f = function get_FullName(arg0)
    {
        var st_07;
        var __pos_0__;
        var loc0;
        var loc4;
        var loc1;
        var loc2;
        var loc3;
        __pos_0__ = 0x0;
        
        while (__pos_0__ >= 0){
            
            switch (__pos_0__){
                case 0x0:
                /* IL_00: nop */
                
                /* IL_01: ldarg.0 */
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Object FullName*/
                /* IL_0C: call String FromJsString(System.Object)*/
                /* IL_11: stloc.0 */
                loc0 = new_string(arg0.ctor.FullName);
                /* IL_12: ldarg.0 */
                /* IL_13: callvirt Boolean get_IsGenericType()*/
                /* IL_18: brfalse.s IL_22*/
                
                if ((!((((arg0.vtable)["asm0.x600007f"])())(arg0)))){
                    __pos_0__ = 0x22;
                    continue;
                }
                /* IL_1A: ldarg.0 */
                /* IL_1B: callvirt Boolean get_IsGenericTypeDefinition()*/
                st_07 = (((arg0.vtable)["asm0.x6000081"])())(arg0);
                /* IL_20: br.s IL_23*/
                __pos_0__ = 0x23;
                continue;
                case 0x22:
                /* IL_22: ldc.i4.1 */
                st_07 = (1|0);
                case 0x23:
                /* IL_23: nop */
                
                /* IL_24: stloc.s 4*/
                loc4 = st_07;
                /* IL_26: ldloc.s 4*/
                /* IL_28: brtrue.s IL_78*/
                
                if (loc4){
                    __pos_0__ = 0x78;
                    continue;
                }
                /* IL_2A: nop */
                
                /* IL_2B: ldloc.0 */
                /* IL_2C: ldstr [*/
                /* IL_31: call String Concat(System.String, System.String)*/
                /* IL_36: stloc.0 */
                loc0 = (asm0.x6000128)(loc0,new_string("["));
                /* IL_37: ldarg.0 */
                /* IL_38: callvirt Type[] GetGenericArguments()*/
                /* IL_3D: stloc.1 */
                loc1 = (((arg0.vtable)["asm0.x6000082"])())(arg0);
                /* IL_3E: ldc.i4.0 */
                /* IL_3F: stloc.2 */
                loc2 = (0|0);
                /* IL_40: br.s IL_5F*/
                __pos_0__ = 0x5F;
                continue;
                case 0x42:
                /* IL_42: ldloc.0 */
                /* IL_43: ldstr [*/
                /* IL_48: ldloc.1 */
                /* IL_49: ldloc.2 */
                /* IL_4A: ldelem.ref */
                /* IL_4B: callvirt String get_AssemblyQualifiedName()*/
                /* IL_50: ldstr ]*/
                /* IL_55: call String Concat(System.String, System.String, System.String, System.String)*/
                /* IL_5A: stloc.0 */
                loc0 = (asm0.x600012b)(loc0,new_string("["),((((loc1.jsarr)[loc2].vtable)["asm0.x600007e"])())((loc1.jsarr)[loc2]),new_string("]"));
                /* IL_5B: ldloc.2 */
                /* IL_5C: ldc.i4.1 */
                /* IL_5D: add */
                /* IL_5E: stloc.2 */
                loc2 = (loc2 + (1|0)) | (0|0);
                case 0x5F:
                /* IL_5F: ldloc.2 */
                /* IL_60: ldloc.1 */
                /* IL_61: ldlen */
                /* IL_62: conv.i4 */
                /* IL_64: clt */
                /* IL_65: stloc.s 4*/
                loc4 = ((loc2 < (loc1.jsarr.length | (0|0))) ? (1) : (0));
                /* IL_67: ldloc.s 4*/
                /* IL_69: brtrue.s IL_42*/
                
                if (loc4){
                    __pos_0__ = 0x42;
                    continue;
                }
                /* IL_6B: ldloc.0 */
                /* IL_6C: ldstr ]*/
                /* IL_71: call String Concat(System.String, System.String)*/
                /* IL_76: stloc.0 */
                loc0 = (asm0.x6000128)(loc0,new_string("]"));
                /* IL_77: nop */
                
                case 0x78:
                /* IL_78: ldloc.0 */
                /* IL_79: stloc.3 */
                loc3 = loc0;
                /* IL_7C: ldloc.3 */
                /* IL_7D: ret */
                return loc3;
            }
        }
    };;
    asm.x6000090 = function get_AssemblyQualifiedName(arg0)
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
        loc0 = (asm0.x600012a)((((arg0.vtable)["asm0.x6000078"])())(arg0),new_string(", "),(asm0.x6000019)((((arg0.vtable)["asm0.x600007c"])())(arg0)));
        /* IL_1F: ldloc.0 */
        /* IL_20: ret */
        return loc0;
    };;
    asm.x6000091_init = function ()
    {
        (((asm0)["System.RuntimeType"])().init)();
        asm.x6000091 = asm.x6000091_;
    };;
    asm.x6000091 = function (arg0,arg1)
    {
        (asm.x6000091_init.apply)(this,arguments);
        return (asm.x6000091.apply)(this,arguments);
    };;
    asm.x6000091_ = function Equals(arg0,arg1)
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
    asm.x6000092_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        (((asm0)["System.Boolean"])().init)();
        asm.x6000092 = asm.x6000092_;
    };;
    asm.x6000092 = function (arg0)
    {
        (asm.x6000092_init.apply)(this,arguments);
        return (asm.x6000092.apply)(this,arguments);
    };;
    asm.x6000092_ = function GetHashCode(arg0)
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
                arg0.ctor.Hash = (asm0.x6000006)(arg0);
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
    asm.x6000093 = 
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
    asm.x6000094 = function GetCustomAttributes(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldarg.1 */
        /* IL_08: call Object[] GetCustomAttributesImpl(System.Object, System.Boolean)*/
        /* IL_0D: stloc.0 */
        loc0 = (asm0.x6000093)(arg0.ctor,arg1);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };;
    asm.x6000095_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000095 = asm.x6000095_;
    };;
    asm.x6000095 = function (arg0,arg1,arg2)
    {
        (asm.x6000095_init.apply)(this,arguments);
        return (asm.x6000095.apply)(this,arguments);
    };;
    asm.x6000095_ = function GetCustomAttributes(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000af,[ null ]);
    };
    asm.x6000096_init = function ()
    {
        (((asm0)["System.NotImplementedException"])().init)();
        asm.x6000096 = asm.x6000096_;
    };;
    asm.x6000096 = function (arg0,arg1,arg2)
    {
        (asm.x6000096_init.apply)(this,arguments);
        return (asm.x6000096.apply)(this,arguments);
    };;
    asm.x6000096_ = function IsDefined(arg0,arg1,arg2)
    {
        var t0;
        t0 = ((asm0)["System.NotImplementedException"])();
        /* IL_00: nop */
        /* IL_01: newobj Void .ctor()*/
        /* IL_06: throw */
        throw newobj(t0,asm0.x60000af,[ null ]);
    };
    asm.x6000097 = function get_IsInterface(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsInterface*/
        /* IL_0C: call Boolean op_Explicit(System.Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsInterface ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    asm.x6000098 = function get_IsGenericType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
        /* IL_0C: call Boolean op_Explicit(System.Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    asm.x6000099 = function get_IsGenericTypeDefinition(arg0)
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
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld Boolean IsGenericTypeDefinition*/
                /* IL_0C: call Boolean op_Explicit(System.Braille.JavaScript.Boolean)*/
                /* IL_11: stloc.1 */
                loc1 = (arg0.ctor.IsGenericTypeDefinition ? 1 : 0);
                /* IL_12: ldloc.1 */
                /* IL_13: brtrue.s IL_19*/
                
                if (loc1){
                    __pos_0__ = 0x19;
                    continue;
                }
                /* IL_15: ldc.i4.0 */
                /* IL_16: stloc.0 */
                loc0 = (0|0);
                /* IL_17: br.s IL_40*/
                __pos_0__ = 0x40;
                continue;
                case 0x19:
                /* IL_19: ldarg.0 */
                /* IL_1A: ldfld constructor ctor*/
                /* IL_1F: ldfld Object GenericArguments*/
                /* IL_24: ldc.i4.0 */
                /* IL_25: call Object ArrayLookup(System.Object, System.Int32)*/
                /* IL_2A: call Object get_Null()*/
                /* IL_30: ceq */
                /* IL_31: ldc.i4.0 */
                /* IL_33: ceq */
                /* IL_34: stloc.1 */
                loc1 = (((((arg0.ctor.GenericArguments[(0|0)]) === (asm0.x6000010)()) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_35: ldloc.1 */
                /* IL_36: brtrue.s IL_3C*/
                
                if (loc1){
                    __pos_0__ = 0x3C;
                    continue;
                }
                /* IL_38: ldc.i4.1 */
                /* IL_39: stloc.0 */
                loc0 = (1|0);
                /* IL_3A: br.s IL_40*/
                __pos_0__ = 0x40;
                continue;
                case 0x3C:
                /* IL_3C: ldc.i4.0 */
                /* IL_3D: stloc.0 */
                loc0 = (0|0);
                case 0x40:
                /* IL_40: ldloc.0 */
                /* IL_41: ret */
                return loc0;
            }
        }
    };;
    asm.x600009a_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.RuntimeType"])().init)();
        asm.x600009a = asm.x600009a_;
    };;
    asm.x600009a = function (arg0,arg1)
    {
        (asm.x600009a_init.apply)(this,arguments);
        return (asm.x600009a.apply)(this,arguments);
    };;
    asm.x600009a_ = function MakeGenericType(arg0,arg1)
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
                loc5 = (((arg0.vtable)["asm0.x6000081"])())(arg0);
                /* IL_09: ldloc.s 5*/
                /* IL_0B: brtrue.s IL_13*/
                
                if (loc5){
                    __pos_0__ = 0x13;
                    continue;
                }
                /* IL_0D: newobj Void .ctor()*/
                /* IL_12: throw */
                throw newobj(t0,asm0.x60000bb,[ null ]);
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
                loc2 = (arg0.ctor.Assembly[(((arg0.vtable)["asm0.x6000078"])())(arg0).jsstr]);
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
                loc4 = (asm0.x600008b)(loc3);
                /* IL_6F: ldloc.s 4*/
                /* IL_71: ret */
                return loc4;
            }
        }
    };
    asm.x600009b_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.Type"])().init)();
        asm.x600009b = asm.x600009b_;
    };;
    asm.x600009b = function (arg0)
    {
        (asm.x600009b_init.apply)(this,arguments);
        return (asm.x600009b.apply)(this,arguments);
    };;
    asm.x600009b_ = function GetGenericArguments(arg0)
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
                /* IL_0C: call constructor[] FromJsArray[System.RuntimeType+constructor](System.Object)*/
                /* IL_11: stloc.0 */
                loc0 = ((asm0.x60000eb)(((asm0)["System.RuntimeType+constructor"])()))(arg0.ctor.GenericArguments);
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
                (loc1.jsarr)[loc2] = (asm0.x600008b)((loc0.jsarr)[loc2]);
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
    asm.x600009c = function get_BaseType(arg0)
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
                /* IL_02: ldfld constructor ctor*/
                /* IL_07: ldfld constructor BaseType*/
                /* IL_0C: call Object get_Null()*/
                /* IL_12: ceq */
                /* IL_13: ldc.i4.0 */
                /* IL_15: ceq */
                /* IL_16: stloc.1 */
                loc1 = ((((arg0.ctor.BaseType === (asm0.x6000010)()) ? (1) : (0)) === (0|0)) ? (1) : (0));
                /* IL_17: ldloc.1 */
                /* IL_18: brtrue.s IL_1E*/
                
                if (loc1){
                    __pos_0__ = 0x1E;
                    continue;
                }
                /* IL_1A: ldnull */
                /* IL_1B: stloc.0 */
                loc0 = null;
                /* IL_1C: br.s IL_31*/
                __pos_0__ = 0x31;
                continue;
                case 0x1E:
                /* IL_1E: ldarg.0 */
                /* IL_1F: ldfld constructor ctor*/
                /* IL_24: ldfld constructor BaseType*/
                /* IL_29: call Type GetInstance(System.RuntimeType+constructor)*/
                /* IL_2E: stloc.0 */
                loc0 = (asm0.x600008b)(arg0.ctor.BaseType);
                case 0x31:
                /* IL_31: ldloc.0 */
                /* IL_32: ret */
                return loc0;
            }
        }
    };;
    asm.x600009d_init = function ()
    {
        (((asm0)["System.RuntimeType+constructor"])().init)();
        (((asm0)["System.Type"])().init)();
        asm.x600009d = asm.x600009d_;
    };;
    asm.x600009d = function (arg0)
    {
        (asm.x600009d_init.apply)(this,arguments);
        return (asm.x600009d.apply)(this,arguments);
    };;
    asm.x600009d_ = function GetInterfaces(arg0)
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
                loc0 = ((asm0.x60000eb)(((asm0)["System.RuntimeType+constructor"])()))(arg0.ctor.Interfaces);
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
                (loc1.jsarr)[loc2] = (asm0.x600008b)((loc0.jsarr)[loc2]);
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
    asm.x600009e_init = function ()
    {
        (((asm0)["System.Object"])().init)();
        asm.x600009e = asm.x600009e_;
    };;
    asm.x600009e = function (arg0,arg1)
    {
        (asm.x600009e_init.apply)(this,arguments);
        return (asm.x600009e.apply)(this,arguments);
    };;
    asm.x600009e_ = function IsAssignableFrom(arg0,arg1)
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
                loc3 = (((((arg0.vtable)["asm0.x6000009"])())(arg0,arg1) === (0|0)) ? (1) : (0));
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
                loc3 = (((((arg1.vtable)["asm0.x600007a"])())(arg1,arg0) === (0|0)) ? (1) : (0));
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
                
                if ((!((((arg1.vtable)["asm0.x6000080"])())(arg1)))){
                    __pos_0__ = 0x54;
                    continue;
                }
                /* IL_3F: ldarg.0 */
                /* IL_40: ldtoken System.Object*/
                /* IL_45: call Type GetTypeFromHandle(System.RuntimeTypeHandle)*/
                /* IL_4A: callvirt Boolean Equals(System.Object)*/
                /* IL_4F: ldc.i4.0 */
                /* IL_51: ceq */
                st_1C = (((((arg0.vtable)["asm0.x6000009"])())(arg0,(asm0.x6000079)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t0))) === (0|0)) ? (1) : (0));
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
                loc3 = (((((arg0.vtable)["asm0.x6000080"])())(arg0) === (0|0)) ? (1) : (0));
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
                loc0 = (((arg1.vtable)["asm0.x6000083"])())(arg1);
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
                loc3 = (((((arg0.vtable)["asm0.x6000085"])())(arg0,(loc0.jsarr)[loc1]) === (0|0)) ? (1) : (0));
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
    asm.x600009f = 
            function (s) {
                var idx = s.jsstr.lastIndexOf('.');
                return new_string(s.jsstr.substring(idx + 1));
            }
            ;;
    asm.x60000a0 = function get_Name(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt String get_FullName()*/
        /* IL_07: call String GetName(System.String)*/
        /* IL_0C: stloc.0 */
        loc0 = (asm0.x600009f)((((arg0.vtable)["asm0.x6000078"])())(arg0));
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x60000a1 = function get_IsValueType(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldfld constructor ctor*/
        /* IL_07: ldfld Boolean IsValueType*/
        /* IL_0C: call Boolean op_Explicit(System.Braille.JavaScript.Boolean)*/
        /* IL_11: stloc.0 */
        loc0 = (arg0.ctor.IsValueType ? 1 : 0);
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };;
    asm.x600008a = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000088)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: ldarg.0 */
        /* IL_09: ldarg.1 */
        /* IL_0A: stfld constructor ctor*/
        arg0.ctor = arg1;
        /* IL_0F: nop */
        /* IL_10: ret */
        return ;
    };;
    asm.x60000a2 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000a3 = function get_Value(arg0)
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
    asm.x60000a4_init = function ()
    {
        (((asm0)["System.SByte"])().init)();
        asm.x60000a4 = asm.x60000a4_;
    };;
    asm.x60000a4 = function (arg0)
    {
        (asm.x60000a4_init.apply)(this,arguments);
        return (asm.x60000a4.apply)(this,arguments);
    };;
    asm.x60000a4_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000a5_init = function ()
    {
        (((asm0)["System.Single"])().init)();
        asm.x60000a5 = asm.x60000a5_;
    };;
    asm.x60000a5 = function (arg0)
    {
        (asm.x60000a5_init.apply)(this,arguments);
        return (asm.x60000a5.apply)(this,arguments);
    };;
    asm.x60000a5_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x60000a6 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000ae = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000af = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x600006a)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000b0 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation not supported*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600006b)(arg0,new_string("Operation not supported"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x60000b1 = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600006b)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x60000b9 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000ba = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Cannot cast from source type to destination type.*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600006b)(arg0,new_string("Cannot cast from source type to destination type."));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x60000bb = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldstr Operation is not valid due to the current state of the object*/
        /* IL_06: call Void .ctor(System.String)*/
        (asm0.x600006b)(arg0,new_string("Operation is not valid due to the current state of the object"));
        /* IL_0B: nop */
        /* IL_0C: nop */
        /* IL_0D: nop */
        /* IL_0E: ret */
        return ;
    };;
    asm.x60000bc = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: ldarg.1 */
        /* IL_02: call Void .ctor(System.String)*/
        (asm0.x600006b)(arg0,arg1);
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: nop */
        /* IL_0A: ret */
        return ;
    };;
    asm.x60000bd_init = function ()
    {
        (((asm0)["System.Int64"])().init)();
        asm.x60000bd = asm.x60000bd_;
    };;
    asm.x60000bd = function (arg0)
    {
        (asm.x60000bd_init.apply)(this,arguments);
        return (asm.x60000bd.apply)(this,arguments);
    };;
    asm.x60000bd_ = function ToString(arg0)
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
                loc4 = (asm0.x6000128)(new_string("-"),((({
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
                loc2 = (asm0.x6000128)(new_string(loc3[0].toString()),loc2);
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
    asm.x60000be = function Equals(arg0,arg1)
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
    asm.x60000bf = function GetHashCode(arg0)
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
    asm.x60000c2 = 
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
    asm.XInt64_Addition = asm.x60000c2;
    asm.x60000c3 = 
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
    asm.XInt64_Subtraction = asm.x60000c3;
    asm.x60000c4 = 
            function XInt64_BitwiseOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] | rhs[0], lhs[1] | rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseOr = asm.x60000c4;
    asm.x60000c5 = 
            function XInt64_BitwiseAnd(lhs, rhs) 
            {
                return new Uint32Array([lhs[0] & rhs[0], lhs[1] & rhs[1]]);
            }
            ;;
    asm.XInt64_BitwiseAnd = asm.x60000c5;
    asm.x60000c6 = 
            function XInt64_ExclusiveOr(lhs, rhs)
            {
                return new Uint32Array([lhs[0] ^ rhs[0], lhs[1] ^ rhs[1]]);
            }
            ;;
    asm.XInt64_ExclusiveOr = asm.x60000c6;
    asm.x60000c7 = 
            function XInt64_OnesComplement(a)
            {
                return new Uint32Array([~a[0], ~a[1]]);
            }
            ;;
    asm.XInt64_OnesComplement = asm.x60000c7;
    asm.x60000c8 = 
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
    asm.XInt64_LeftShift = asm.x60000c8;
    asm.x60000c9 = 
            function XInt64_Equality(lhs, rhs)
            {
                return lhs[0] === rhs[0] && lhs[1] === rhs[1];
            }
            ;;
    asm.XInt64_Equality = asm.x60000c9;
    asm.x60000ca = 
            function XInt64_Inequality(lhs, rhs)
            {
                return lhs[0] !== rhs[0] && lhs[1] !== rhs[1];
            }
            ;;
    asm.XInt64_Inequality = asm.x60000ca;
    asm.x60000cb = function op_Decrement(arg0)
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
    asm.XInt64_Decrement = asm.x60000cb;
    asm.x60000cc = function op_Increment(arg0)
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
    asm.XInt64_Increment = asm.x60000cc;
    asm.x60000cd = 
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
    asm.Int64_RightShift = asm.x60000cd;
    asm.x60000ce = 
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
    asm.Int64_Division = asm.x60000ce;
    asm.x60000cf = 
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
    asm.Int64_Modulus = asm.x60000cf;
    asm.x60000d0 = 
            function Int64_GreaterThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_GreaterThan(a, b);
                else
                    return bn ? 1 : 0;
            };;
    asm.Int64_GreaterThan = asm.x60000d0;
    asm.x60000d1 = 
            function Int64_LessThan (a, b) {
                var an = asm0.Int64_isNegative(a);
                var bn = asm0.Int64_isNegative(b);

                if (an === bn)
                    return asm0.UInt64_LessThan(a, b);
                else
                    return an ? 1 : 0;
            };;
    asm.Int64_LessThan = asm.x60000d1;
    asm.x60000d2 = 
            function Int64_UnaryNegation (a) {
                var complement = asm0.XInt64_Subtraction(new Uint32Array([0xffffffff, 0xffffffff]), a);
                return asm0.XInt64_Addition(complement, conv_u8(1));
            };;
    asm.Int64_UnaryNegation = asm.x60000d2;
    asm.x60000d3 = 
            function isNegative(n) {
                return asm0.UInt64_GreaterThan(n, [0xffffffff, 0x7fffffff]);
            };;
    asm.Int64_isNegative = asm.x60000d3;
    asm.x60000de = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x60000df = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x60000e0 = function InitializeArray(arg0,arg1)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x60000e1 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x60000e2 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: nop */
        /* IL_07: nop */
        /* IL_08: nop */
        /* IL_09: ret */
        return ;
    };;
    asm.x60000e3_init = function ()
    {
        (((asm0)["System.EventArgs"])().init)();
        asm.x60000e3 = asm.x60000e3_;
    };;
    asm.x60000e3 = function ()
    {
        (asm.x60000e3_init.apply)(this,arguments);
        return (asm.x60000e3.apply)(this,arguments);
    };;
    asm.x60000e3_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.EventArgs"])();
        /* IL_00: newobj Void .ctor()*/
        /* IL_05: stsfld EventArgs Empty*/
        (t0)["Empty"] = newobj(t0,asm0.x60000e2,[ null ]);
        /* IL_0A: ret */
        return ;
    };
    asm.x60000e5 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x60000e4 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x60000e7 = function Invoke()
    {
        
                                var m = arguments[0]._methodPtr;
                                var t = arguments[0]._target;
                                if (t != null)
                                    arguments[0] = t;
                                else
                                    arguments = Array.prototype.slice.call(arguments, 1);
                                return m.apply(null, arguments);
    };;
    asm.x60000e6 = function ctor()
    {
        arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];;
    };;
    asm.x60000e8 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x60000e9)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000e9 = function(o) { return o.jsarr.length; };;
    asm.x60000ea = function(o, i) { return box(o.jsarr[i], o.type); };;
    asm.x60000eb = 
            function (T) {
                return function FromJsArray(arr) {
                    var r = new (asm0['System.Array`1'](T))();
                    r.type = T;
                    r.jsarr = arr;
                    return r;
                };
            };;
    asm.x60000ec = function GetValue(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Object GetValueImpl(System.Object, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x60000ea)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x60000ed = function GetEnumerator(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: callvirt IEnumerator GetEnumeratorImpl()*/
        /* IL_07: stloc.0 */
        loc0 = (((arg0.vtable)["asm0.x60000ee"])())(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x60000ef = function (T)
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
                    ((t0.IsValueType) ? (({
                        'w': function ()
                        {
                            loc0 = (arguments)[0];
                        },
                        'r': function ()
                        {
                            return loc0;
                        }
                    }.w)(new t0())) : (null));
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
    asm.x60000f0_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            asm.x60000f0 = asm.x60000f0_;
        };
    };;
    asm.x60000f0 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x60000f0_init)(T).apply)(this,arguments);
            return ((asm.x60000f0)(T).apply)(this,arguments);
        };
    };;
    asm.x60000f0_ = function (T)
    {
        return function IndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var st_13;
            var __pos_0__;
            var loc3;
            var loc0;
            var loc1;
            var loc2;
            t0 = ((asm0)["System.Exception"])();
            t1 = T;
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
                    /* IL_0C: ldstr array*/
                    /* IL_11: newobj Void .ctor(System.String)*/
                    /* IL_16: throw */
                    throw newobj(t0,asm0.x600006b,[ null,new_string("array") ]);
                    case 0x17:
                    /* IL_17: ldarg.3 */
                    /* IL_18: ldc.i4.0 */
                    /* IL_19: blt.s IL_2B*/
                    
                    if (arg3 < (0|0)){
                        __pos_0__ = 0x2B;
                        continue;
                    }
                    /* IL_1B: ldarg.2 */
                    /* IL_1C: ldc.i4.0 */
                    /* IL_1D: blt.s IL_2B*/
                    
                    if (arg2 < (0|0)){
                        __pos_0__ = 0x2B;
                        continue;
                    }
                    /* IL_1F: ldarg.2 */
                    /* IL_20: ldc.i4.1 */
                    /* IL_21: sub */
                    /* IL_22: ldarg.3 */
                    /* IL_23: neg */
                    /* IL_25: cgt */
                    /* IL_26: ldc.i4.0 */
                    /* IL_28: ceq */
                    st_13 = ((((((arg2 - (1|0)) | (0|0)) > (-(arg3))) ? (1) : (0)) === (0|0)) ? (1) : (0));
                    /* IL_29: br.s IL_2C*/
                    __pos_0__ = 0x2C;
                    continue;
                    case 0x2B:
                    /* IL_2B: ldc.i4.0 */
                    st_13 = (0|0);
                    case 0x2C:
                    /* IL_2C: nop */
                    
                    /* IL_2D: stloc.3 */
                    loc3 = st_13;
                    /* IL_2E: ldloc.3 */
                    /* IL_2F: brtrue.s IL_37*/
                    
                    if (loc3){
                        __pos_0__ = 0x37;
                        continue;
                    }
                    /* IL_31: newobj Void .ctor()*/
                    /* IL_36: throw */
                    throw newobj(t0,asm0.x600006a,[ null ]);
                    case 0x37:
                    /* IL_37: ldarg.2 */
                    /* IL_38: ldarg.3 */
                    /* IL_39: add */
                    /* IL_3A: stloc.0 */
                    loc0 = (arg2 + arg3) | (0|0);
                    /* IL_3B: ldarg.2 */
                    /* IL_3C: stloc.1 */
                    loc1 = arg2;
                    /* IL_3D: br.s IL_62*/
                    __pos_0__ = 0x62;
                    continue;
                    case 0x3F:
                    /* IL_3F: nop */
                    
                    /* IL_40: ldarg.0 */
                    /* IL_41: ldloc.1 */
                    /* IL_42: call Object GetValueImpl(System.Object, System.Int32)*/
                    /* IL_47: ldarg.1 */
                    /* IL_48: box T*/
                    /* IL_4D: call Boolean Equals(System.Object, System.Object)*/
                    /* IL_52: ldc.i4.0 */
                    /* IL_54: ceq */
                    /* IL_55: stloc.3 */
                    loc3 = (((asm0.x600000b)((asm0.x60000ea)(arg0,loc1),box(arg1,t1)) === (0|0)) ? (1) : (0));
                    /* IL_56: ldloc.3 */
                    /* IL_57: brtrue.s IL_5D*/
                    
                    if (loc3){
                        __pos_0__ = 0x5D;
                        continue;
                    }
                    /* IL_59: ldloc.1 */
                    /* IL_5A: stloc.2 */
                    loc2 = loc1;
                    /* IL_5B: br.s IL_6E*/
                    __pos_0__ = 0x6E;
                    continue;
                    case 0x5D:
                    /* IL_5D: nop */
                    
                    /* IL_5E: ldloc.1 */
                    /* IL_5F: ldc.i4.1 */
                    /* IL_60: add */
                    /* IL_61: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    case 0x62:
                    /* IL_62: ldloc.1 */
                    /* IL_63: ldloc.0 */
                    /* IL_65: clt */
                    /* IL_66: stloc.3 */
                    loc3 = ((loc1 < loc0) ? (1) : (0));
                    /* IL_67: ldloc.3 */
                    /* IL_68: brtrue.s IL_3F*/
                    
                    if (loc3){
                        __pos_0__ = 0x3F;
                        continue;
                    }
                    /* IL_6A: ldc.i4.m1 */
                    /* IL_6B: stloc.2 */
                    loc2 = (-1|0);
                    case 0x6E:
                    /* IL_6E: ldloc.2 */
                    /* IL_6F: ret */
                    return loc2;
                }
            }
        };
    };
    asm.x60000f1 = function (T)
    {
        return function Copy(arg0,arg1,arg2,arg3,arg4)
        {
            var st_17;
            var __pos_0__;
            var loc0;
            var loc1;
            var loc2;
            var loc3;
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: nop */
                    
                    /* IL_01: ldarg.1 */
                    /* IL_02: stloc.0 */
                    loc0 = arg1;
                    /* IL_03: ldarg.3 */
                    /* IL_04: stloc.1 */
                    loc1 = arg3;
                    /* IL_05: ldc.i4.0 */
                    /* IL_06: stloc.2 */
                    loc2 = (0|0);
                    /* IL_07: br.s IL_25*/
                    __pos_0__ = 0x25;
                    continue;
                    case 0x9:
                    /* IL_09: nop */
                    
                    /* IL_0A: ldarg.2 */
                    /* IL_0B: ldloc.1 */
                    /* IL_0C: ldarg.0 */
                    /* IL_0D: ldloc.0 */
                    /* IL_0E: ldelem T*/
                    /* IL_13: stelem T*/
                    (arg2.jsarr)[loc1] = (arg0.jsarr)[loc0];
                    /* IL_18: nop */
                    
                    /* IL_19: ldloc.0 */
                    /* IL_1A: ldc.i4.1 */
                    /* IL_1B: add */
                    /* IL_1C: stloc.0 */
                    loc0 = (loc0 + (1|0)) | (0|0);
                    /* IL_1D: ldloc.1 */
                    /* IL_1E: ldc.i4.1 */
                    /* IL_1F: add */
                    /* IL_20: stloc.1 */
                    loc1 = (loc1 + (1|0)) | (0|0);
                    /* IL_21: ldloc.2 */
                    /* IL_22: ldc.i4.1 */
                    /* IL_23: add */
                    /* IL_24: stloc.2 */
                    loc2 = (loc2 + (1|0)) | (0|0);
                    case 0x25:
                    /* IL_25: ldloc.2 */
                    /* IL_26: ldarg.s 4*/
                    /* IL_28: bge.s IL_32*/
                    
                    if (loc2 >= arg4){
                        __pos_0__ = 0x32;
                        continue;
                    }
                    /* IL_2A: ldloc.0 */
                    /* IL_2B: ldarg.0 */
                    /* IL_2C: ldlen */
                    /* IL_2D: conv.i4 */
                    /* IL_2F: clt */
                    st_17 = ((loc0 < (arg0.jsarr.length | (0|0))) ? (1) : (0));
                    /* IL_30: br.s IL_33*/
                    __pos_0__ = 0x33;
                    continue;
                    case 0x32:
                    /* IL_32: ldc.i4.0 */
                    st_17 = (0|0);
                    case 0x33:
                    /* IL_33: nop */
                    
                    /* IL_34: stloc.3 */
                    loc3 = st_17;
                    /* IL_35: ldloc.3 */
                    /* IL_36: brtrue.s IL_09*/
                    
                    if (loc3){
                        __pos_0__ = 0x9;
                        continue;
                    }
                    /* IL_38: ret */
                    return ;
                }
            }
        };
    };;
    asm.x60000f2 = function (T)
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
                    loc3 = (((arg3._methodPtr.apply)(null,((arg3._target) ? ([ arg3._target,(arg0.jsarr)[loc1] ]) : ([ (arg0.jsarr)[loc1] ]))) === (0|0)) ? (1) : (0));
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
    asm.x60000f3 = function (T)
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
                    st_0B = (st_09._methodPtr.apply)(null,((st_09._target) ? ([ st_09._target,st_0A ]) : ([ st_0A ])));
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
    asm.x60000f4_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Array+<>c__DisplayClass1`1"])(T).init)();
            (((asm0)["System.Predicate`1"])(T).init)();
            asm.x60000f4 = asm.x60000f4_;
        };
    };;
    asm.x60000f4 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x60000f4_init)(T).apply)(this,arguments);
            return ((asm.x60000f4)(T).apply)(this,arguments);
        };
    };;
    asm.x60000f4_ = function (T)
    {
        return function LastIndexOf(arg0,arg1,arg2,arg3)
        {
            var t0;
            var t1;
            var t2;
            var loc0;
            var loc1;
            t0 = T;
            t1 = ((asm0)["System.Array+<>c__DisplayClass1`1"])(T);
            t2 = ((asm0)["System.Predicate`1"])(T);
            /* IL_00: newobj Void .ctor()*/
            /* IL_05: stloc.0 */
            loc0 = newobj(t1,asm0.x600014d,[ null ]);
            /* IL_06: ldloc.0 */
            /* IL_07: ldarg.1 */
            /* IL_08: stfld IKVM.Reflection.GenericFieldInstance*/
            loc0.item = arg1;
            /* IL_0D: nop */
            /* IL_0E: ldarg.0 */
            /* IL_0F: ldarg.2 */
            /* IL_10: ldarg.3 */
            /* IL_11: ldloc.0 */
            /* IL_13: ldftn Boolean <LastIndexOf>b__0(T)*/
            /* IL_18: newobj Void .ctor(System.Object, System.IntPtr)*/
            /* IL_1D: call Int32 GetLastIndex[T](T[], System.Int32, System.Int32, System.Predicate`1[T])*/
            /* IL_22: stloc.1 */
            loc1 = ((asm0.x60000f3)(T))(arg0,arg2,arg3,newobj(t2,asm0.x60000e6,[ null,loc0,asm0.x600014e ]));
            /* IL_25: ldloc.1 */
            /* IL_26: ret */
            return loc1;
        };
    };
    asm.x60000f7 = function (T)
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
                    /* IL_0E: brtrue.s IL_1E*/
                    
                    if (loc1){
                        __pos_0__ = 0x1E;
                        continue;
                    }
                    /* IL_10: nop */
                    
                    /* IL_11: ldarg.0 */
                    /* IL_12: ldarg.0 */
                    /* IL_13: ldlen */
                    /* IL_14: conv.i4 */
                    /* IL_15: ldarg.1 */
                    /* IL_16: sub */
                    /* IL_17: call Void Splice[T](T[], System.Int32)*/
                    ((asm0.x60000fa)(T))(arg0,((arg0.jsarr.length | (0|0)) - arg1) | (0|0));
                    /* IL_1C: nop */
                    
                    /* IL_1D: nop */
                    
                    case 0x1E:
                    /* IL_1E: ldarg.0 */
                    /* IL_1F: ldarg.2 */
                    /* IL_20: callvirt Object GetJsFunction()*/
                    /* IL_25: call Void Sort[T](T[], System.Object)*/
                    (arg0.jsarr.sort((asm0.x6000053)(arg2)));
                    /* IL_2A: nop */
                    
                    /* IL_2B: ret */
                    return ;
                }
            }
        };
    };;
    asm.x60000f8_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Array+<>c__DisplayClass4`1"])(T).init)();
            (((asm0)["System.NotImplementedException"])().init)();
            (((asm0)["System.Comparison`1"])(T).init)();
            asm.x60000f8 = asm.x60000f8_;
        };
    };;
    asm.x60000f8 = function (T)
    {
        return function (arg0,arg1,arg2,arg3)
        {
            ((asm.x60000f8_init)(T).apply)(this,arguments);
            return ((asm.x60000f8)(T).apply)(this,arguments);
        };
    };;
    asm.x60000f8_ = function (T)
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
            t1 = ((asm0)["System.Array+<>c__DisplayClass4`1"])(T);
            t2 = ((asm0)["System.NotImplementedException"])();
            t3 = ((asm0)["System.Comparison`1"])(T);
            __pos_0__ = 0x0;
            
            while (__pos_0__ >= 0){
                
                switch (__pos_0__){
                    case 0x0:
                    /* IL_00: newobj Void .ctor()*/
                    /* IL_05: stloc.0 */
                    loc0 = newobj(t1,asm0.x600014f,[ null ]);
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
                    throw newobj(t2,asm0.x60000af,[ null ]);
                    case 0x1C:
                    /* IL_1C: ldarg.0 */
                    /* IL_1D: ldarg.2 */
                    /* IL_1E: ldloc.0 */
                    /* IL_20: ldftn Int32 <Sort>b__3(T, T)*/
                    /* IL_25: newobj Void .ctor(System.Object, System.IntPtr)*/
                    /* IL_2A: call Void SortImpl[T](T[], System.Int32, System.Comparison`1[T])*/
                    ((asm0.x60000f7)(T))(arg0,arg2,newobj(t3,asm0.x6000057,[ null,loc0,(function ()
                    {
                        (asm0.x6000150_init)();
                        return asm0.x6000150;
                    })() ]));
                    /* IL_2F: nop */
                    
                    /* IL_30: nop */
                    
                    /* IL_31: ret */
                    return ;
                }
            }
        };
    };
    asm.x60000f9 = 
            function (a, b) {
                a.jsarr = a.jsarr.concat(b);
            }
            ;;
    asm.x60000fa = 
            function (array, howMany) {
                array.jsarr.splice(0, howMany);
            }
            ;;
    asm.x60000ff = function (T)
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
    asm.x6000100 = function GetLowerBound(arg0,arg1)
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
    asm.x6000101 = function get_Rank(arg0)
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
    asm.x6000102_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            asm.x6000102 = asm.x6000102_;
        };
    };;
    asm.x6000102 = function (T)
    {
        return function (arg0,arg1)
        {
            ((asm.x6000102_init)(T).apply)(this,arguments);
            return ((asm.x6000102)(T).apply)(this,arguments);
        };
    };;
    asm.x6000102_ = function (T)
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
                    throw newobj(t0,asm0.x600006b,[ null,new_string("Argument out of range") ]);
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
                    (loc2[loc4] = (loc0[loc4]));
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
    asm.x6000104 = function (T)
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
            loc0 = ((asm0.x6000105)(T))(arg0,arg1,arg2,arg3,null);
            /* IL_0E: ldloc.0 */
            /* IL_0F: ret */
            return loc0;
        };
    };;
    asm.x6000105_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Exception"])().init)();
            (((asm0)["System.Collections.Generic.IComparer`1"])(T).init)();
            asm.x6000105 = asm.x6000105_;
        };
    };;
    asm.x6000105 = function (T)
    {
        return function (arg0,arg1,arg2,arg3,arg4)
        {
            ((asm.x6000105_init)(T).apply)(this,arguments);
            return ((asm.x6000105)(T).apply)(this,arguments);
        };
    };;
    asm.x6000105_ = function (T)
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
                    throw newobj(t0,asm0.x600006b,[ null,new_string("array") ]);
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
                    throw newobj(t0,asm0.x600006b,[ null,new_string("index is less than the lower bound of array.") ]);
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
                    throw newobj(t0,asm0.x600006b,[ null,new_string("Value has to be >= 0.") ]);
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
                    throw newobj(t0,asm0.x600006b,[ null,new_string("index and length do not specify a valid range in array.") ]);
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
                    arg4 = asm1['System.Collections.Generic.Comparer']((asm0.x6000079)(new_handle(((asm0)["System.RuntimeTypeHandle"])(),t1)).ctor)._default;
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
                                loc2 = (((arg4)[t2].x6000015)())(arg4,(arg0.jsarr)[loc3],arg3);
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
                                /* IL_BF: leave.s IL_FE*/
                                __pos_1__ = -1;
                                __pos_0__ = 0xFE;
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
                                
                                /* IL_E7: leave.s IL_F7*/
                                __pos_1__ = -1;
                                __pos_0__ = 0xF7;
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
                            /* IL_F1: newobj Void .ctor(System.String)*/
                            /* IL_F6: throw */
                            throw newobj(t0,asm0.x600006b,[ null,new_string("Comparer threw an exception.") ]);
                        }
                    }
                    case 0xF7:
                    /* IL_F7: nop */
                    
                    /* IL_F8: ldloc.0 */
                    /* IL_F9: not */
                    /* IL_FA: stloc.s 5*/
                    loc5 = (~(loc0));
                    case 0xFE:
                    /* IL_FE: nop */
                    
                    /* IL_FF: ldloc.s 5*/
                    /* IL_101: ret */
                    return loc5;
                }
            }
        };
    };
    asm.x6000106 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000108_init = function ()
    {
        (((asm0)["System.Array`1+ArrayEnumerator"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
        asm.x6000108 = asm.x6000108_;
    };;
    asm.x6000108 = function (arg0)
    {
        (asm.x6000108_init.apply)(this,arguments);
        return (asm.x6000108.apply)(this,arguments);
    };;
    asm.x6000108_ = function GetEnumerator(arg0)
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
        loc0 = newobj(t1,asm0.x600010b,[ null,arg0 ]);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };
    asm.x6000109 = function GetEnumeratorImpl(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call IEnumerator`1 GetEnumerator()*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000108)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600010a = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000106)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x600010c = function get_Current(arg0)
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
    asm.x600010d = function MoveNext(arg0)
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
    asm.x600010e = function System_Collections_IEnumerator_get_Current(arg0)
    {
        var t0;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call T get_Current()*/
        /* IL_07: box T*/
        /* IL_0C: stloc.0 */
        loc0 = box((asm0.x600010c)(arg0),t0);
        /* IL_0F: ldloc.0 */
        /* IL_10: ret */
        return loc0;
    };;
    asm.x600010f = function Reset(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldc.i4.m1 */
        /* IL_03: stfld Int32 index*/
        arg0.index = (-1|0);
        /* IL_08: ret */
        return ;
    };;
    asm.x6000110 = function Dispose(arg0)
    {
        /* IL_00: nop */
        /* IL_01: ret */
        return ;
    };;
    asm.x600010b = function _ctor(arg0,arg1)
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
        arg0.length = (asm0.x60000e8)(arg1);
        /* IL_22: nop */
        /* IL_23: ret */
        return ;
    };;
    asm.x6000111 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000114 = function get_HasValue(arg0)
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
    asm.x6000115_init = function ()
    {
        (((asm0)["System.InvalidOperationException"])().init)();
        asm.x6000115 = asm.x6000115_;
    };;
    asm.x6000115 = function (arg0)
    {
        (asm.x6000115_init.apply)(this,arguments);
        return (asm.x6000115.apply)(this,arguments);
    };;
    asm.x6000115_ = function get_Value(arg0)
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
                throw newobj(t0,asm0.x60000bc,[ null,new_string("Nullable object must have a value.") ]);
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
    asm.x6000116_init = function ()
    {
        (((asm0)["System.Nullable`1"])((((arguments)[0].r)().constructor.GenericArguments)[0]).init)();
        asm.x6000116 = asm.x6000116_;
    };;
    asm.x6000116 = function (arg0,arg1)
    {
        (asm.x6000116_init.apply)(this,arguments);
        return (asm.x6000116.apply)(this,arguments);
    };;
    asm.x6000116_ = function Equals(arg0,arg1)
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
                loc0 = (asm0.x6000117)(arg0,clone_value(unbox_any(arg1,t1)));
                case 0x38:
                /* IL_38: ldloc.0 */
                /* IL_39: ret */
                return loc0;
            }
        }
    };
    asm.x6000117 = function Equals(arg0,arg1)
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
    asm.x6000118 = function GetHashCode(arg0)
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
    asm.x6000119 = function GetValueOrDefault(arg0)
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
    asm.x600011a = function GetValueOrDefault(arg0,arg1)
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
    asm.x600011b_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600011b = asm.x600011b_;
    };;
    asm.x600011b = function (arg0)
    {
        (asm.x600011b_init.apply)(this,arguments);
        return (asm.x600011b.apply)(this,arguments);
    };;
    asm.x600011b_ = function ToString(arg0)
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
    asm.x600011c_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x600011c = asm.x600011c_;
        };
    };;
    asm.x600011c = function (T)
    {
        return function (arg0)
        {
            ((asm.x600011c_init)(T).apply)(this,arguments);
            return ((asm.x600011c)(T).apply)(this,arguments);
        };
    };;
    asm.x600011c_ = function (T)
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
            loc0 = newobj(t1,asm0.x6000113,[ null,clone_value(arg0) ]);
            /* IL_0A: ldloc.0 */
            /* IL_0B: ret */
            return loc0;
        };
    };
    asm.x600011d = function (T)
    {
        return function op_Explicit(arg0)
        {
            var loc0;
            /* IL_00: nop */
            /* IL_01: ldarga.s 0*/
            /* IL_03: call T get_Value()*/
            /* IL_08: stloc.0 */
            loc0 = (asm0.x6000115)({
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
    asm.x600011e = function (T)
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
    asm.x600011f_init = function (T)
    {
        return function ()
        {
            (((asm0)["System.Nullable`1"])(T).init)();
            asm.x600011f = asm.x600011f_;
        };
    };;
    asm.x600011f = function (T)
    {
        return function (arg0)
        {
            ((asm.x600011f_init)(T).apply)(this,arguments);
            return ((asm.x600011f)(T).apply)(this,arguments);
        };
    };;
    asm.x600011f_ = function (T)
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
                    loc0 = newobj(t1,asm0.x6000113,[ null,clone_value(unbox_any(arg0,t0)) ]);
                    case 0x26:
                    /* IL_26: ldloc.0 */
                    /* IL_27: ret */
                    return loc0;
                }
            }
        };
    };
    asm.x6000113 = function _ctor(arg0,arg1)
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
    asm.x6000120 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
        /* IL_06: ret */
        return ;
    };;
    asm.x6000121 = function(o) { return o.jsstr.length; };;
    asm.x6000122 = function(a, b) { return a.jsstr === b.jsstr; };;
    asm.x6000123 = function (args) { return new_string(String.prototype.concat.apply('', args.jsarr)); };;
    asm.x6000124 = function (s, i) { return s.jsstr.charCodeAt(i); };;
    asm.x6000125 = function replaceAll(s, find, replace) {
                        function escapeRegExp(s2) {
                            return s2.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                        }
                      return new_string(s.jsstr.replace(new RegExp(escapeRegExp(find.jsstr), 'g'), replace.jsstr));
                    };;
    asm.x6000126 = function get_Chars(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Char GetChar(System.String, System.Int32)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000124)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x6000128_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000128 = asm.x6000128_;
    };;
    asm.x6000128 = function (arg0,arg1)
    {
        (asm.x6000128_init.apply)(this,arguments);
        return (asm.x6000128.apply)(this,arguments);
    };;
    asm.x6000128_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x6000123)(loc1);
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };
    asm.x6000129_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000129 = asm.x6000129_;
    };;
    asm.x6000129 = function (arg0,arg1,arg2)
    {
        (asm.x6000129_init.apply)(this,arguments);
        return (asm.x6000129.apply)(this,arguments);
    };;
    asm.x6000129_ = function Concat(arg0,arg1,arg2)
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
        loc0 = (asm0.x6000123)(loc1);
        /* IL_2C: ldloc.0 */
        /* IL_2D: ret */
        return loc0;
    };
    asm.x600012a_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600012a = asm.x600012a_;
    };;
    asm.x600012a = function (arg0,arg1,arg2)
    {
        (asm.x600012a_init.apply)(this,arguments);
        return (asm.x600012a.apply)(this,arguments);
    };;
    asm.x600012a_ = function Concat(arg0,arg1,arg2)
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
        loc0 = (asm0.x6000123)(loc1);
        /* IL_1D: ldloc.0 */
        /* IL_1E: ret */
        return loc0;
    };
    asm.x600012b_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600012b = asm.x600012b_;
    };;
    asm.x600012b = function (arg0,arg1,arg2,arg3)
    {
        (asm.x600012b_init.apply)(this,arguments);
        return (asm.x600012b.apply)(this,arguments);
    };;
    asm.x600012b_ = function Concat(arg0,arg1,arg2,arg3)
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
        loc0 = (asm0.x6000123)(loc1);
        /* IL_21: ldloc.0 */
        /* IL_22: ret */
        return loc0;
    };
    asm.x600012c_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x600012c = asm.x600012c_;
    };;
    asm.x600012c = function (arg0,arg1)
    {
        (asm.x600012c_init.apply)(this,arguments);
        return (asm.x600012c.apply)(this,arguments);
    };;
    asm.x600012c_ = function Concat(arg0,arg1)
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
        loc0 = (asm0.x6000123)(loc1);
        /* IL_23: ldloc.0 */
        /* IL_24: ret */
        return loc0;
    };
    asm.x600012d = function Concat(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call String ConcatImpl(System.String[])*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000123)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x600012e_init = function ()
    {
        (((asm0)["System.Exception"])().init)();
        asm.x600012e = asm.x600012e_;
    };;
    asm.x600012e = function (arg0)
    {
        (asm.x600012e_init.apply)(this,arguments);
        return (asm.x600012e.apply)(this,arguments);
    };;
    asm.x600012e_ = function Concat(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Exception"])();
        /* IL_00: nop */
        /* IL_01: ldstr Not implemented*/
        /* IL_06: newobj Void .ctor(System.String)*/
        /* IL_0B: throw */
        throw newobj(t0,asm0.x600006b,[ null,new_string("Not implemented") ]);
    };
    asm.x600012f = function Replace(arg0,arg1,arg2)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: ldarg.2 */
        /* IL_04: call String ReplaceImpl(System.String, System.String, System.String)*/
        /* IL_09: stloc.0 */
        loc0 = (asm0.x6000125)(arg0,arg1,arg2);
        /* IL_0C: ldloc.0 */
        /* IL_0D: ret */
        return loc0;
    };;
    asm.x6000130 = function get_Length(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetLengthImpl(System.Object)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000121)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000131 = function ToString(arg0)
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
    asm.x6000132 = function op_Inequality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: ldc.i4.0 */
        /* IL_0A: ceq */
        /* IL_0B: stloc.0 */
        loc0 = (((asm0.x6000122)(arg0,arg1) === (0|0)) ? (1) : (0));
        /* IL_0E: ldloc.0 */
        /* IL_0F: ret */
        return loc0;
    };;
    asm.x6000133 = function op_Equality(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000122)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x6000134 = function Equals(arg0,arg1)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: ldarg.1 */
        /* IL_03: call Boolean EqualsImpl(System.String, System.String)*/
        /* IL_08: stloc.0 */
        loc0 = (asm0.x6000122)(arg0,arg1);
        /* IL_0B: ldloc.0 */
        /* IL_0C: ret */
        return loc0;
    };;
    asm.x6000135_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000135 = asm.x6000135_;
    };;
    asm.x6000135 = function (arg0,arg1)
    {
        (asm.x6000135_init.apply)(this,arguments);
        return (asm.x6000135.apply)(this,arguments);
    };;
    asm.x6000135_ = function Equals(arg0,arg1)
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
        loc0 = (asm0.x6000134)(arg0,cast_class(arg1,t0));
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x6000136 = 
            function (o) {
                var str = o.jsstr;
                var length = str.length;
                var h = 0;
                for (var i = 0; i < length; i += 1)
                    h = (h << 5) - h + str.charCodeAt(i);
                return h;
            };;
    asm.x6000137 = function GetHashCode(arg0)
    {
        var loc0;
        /* IL_00: nop */
        /* IL_01: ldarg.0 */
        /* IL_02: call Int32 GetHashCodeImpl(System.String)*/
        /* IL_07: stloc.0 */
        loc0 = (asm0.x6000136)(arg0);
        /* IL_0A: ldloc.0 */
        /* IL_0B: ret */
        return loc0;
    };;
    asm.x6000138 = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000139_init = function ()
    {
        (((asm0)["System.String"])().init)();
        asm.x6000139 = asm.x6000139_;
    };;
    asm.x6000139 = function ()
    {
        (asm.x6000139_init.apply)(this,arguments);
        return (asm.x6000139.apply)(this,arguments);
    };;
    asm.x6000139_ = function _cctor()
    {
        var t0;
        t0 = ((asm0)["System.String"])();
        /* IL_00: ldstr */
        /* IL_05: stsfld String Empty*/
        (t0)["Empty"] = new_string("");
        /* IL_0A: ret */
        return ;
    };
    asm.x600013b = function get_MemberName(arg0)
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
    asm.x600013a = function _ctor(arg0,arg1)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        (asm0.x6000022)(arg0);
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
    asm.x600013d_init = function ()
    {
        (((asm0)["System.UInt16"])().init)();
        asm.x600013d = asm.x600013d_;
    };;
    asm.x600013d = function (arg0)
    {
        (asm.x600013d_init.apply)(this,arguments);
        return (asm.x600013d.apply)(this,arguments);
    };;
    asm.x600013d_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600013e_init = function ()
    {
        (((asm0)["System.UInt32"])().init)();
        asm.x600013e = asm.x600013e_;
    };;
    asm.x600013e = function (arg0)
    {
        (asm.x600013e_init.apply)(this,arguments);
        return (asm.x600013e.apply)(this,arguments);
    };;
    asm.x600013e_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': (arg0.r)(),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600013f = function ToString(arg0)
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
                loc2 = (asm0.x6000128)(new_string(loc3[0].toString()),loc2);
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
    asm.x6000141 = 
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
    asm.UInt64_RightShift = asm.x6000141;
    asm.x6000142 = 
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
    asm.UInt64_Division = asm.x6000142;
    asm.x6000143 = 
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
    asm.XInt64_Multiplication = asm.x6000143;
    asm.x6000144 = 
            function UInt64_GreaterThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] >= b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThanOrEqual = asm.x6000144;
    asm.x6000145 = 
            function UInt64_LessThanOrEqual (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] <= b[0] ? 1: 0;
            };;
    asm.UInt64_LessThanOrEqual = asm.x6000145;
    asm.x6000146 = 
            function UInt64_GreaterThan (a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff > 0)
                    return 1;

                if (bdiff < 0)
                    return 0;

                return a[0] > b[0] ? 1: 0;
            };;
    asm.UInt64_GreaterThan = asm.x6000146;
    asm.x6000147 = 
            function UInt64_LessThan(a, b) {
                var bdiff = a[1] - b[1];
                if (bdiff < 0)
                    return 1;

                if (bdiff > 0)
                    return 0;

                return a[0] < b[0] ? 1: 0;
            };;
    asm.UInt64_LessThan = asm.x6000147;
    asm.x6000148 = 
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
    asm.UInt64_Modulus = asm.x6000148;
    asm.x6000149 = function Equals(arg0,arg1)
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
    asm.x600014a = function GetHashCode(arg0)
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
    asm.x600014c_init = function ()
    {
        (((asm0)["System.UIntPtr"])().init)();
        asm.x600014c = asm.x600014c_;
    };;
    asm.x600014c = function (arg0)
    {
        (asm.x600014c_init.apply)(this,arguments);
        return (asm.x600014c.apply)(this,arguments);
    };;
    asm.x600014c_ = function ToString(arg0)
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
        loc0 = (asm0.x6000068)({
            'boxed': arg0,
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_14: ldloc.0 */
        /* IL_15: ret */
        return loc0;
    };
    asm.x600014e = function _LastIndexOf_b__0(arg0,arg1)
    {
        var t0;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        /* IL_00: ldarg.1 */
        /* IL_01: box T*/
        /* IL_06: ldarg.0 */
        /* IL_07: ldfld T item*/
        /* IL_0C: box T*/
        /* IL_11: call Boolean Equals(System.Object, System.Object)*/
        /* IL_16: stloc.0 */
        loc0 = (asm0.x600000b)(box(arg1,t0),box(arg0.item,t0));
        /* IL_19: ldloc.0 */
        /* IL_1A: ret */
        return loc0;
    };;
    asm.x600014d = function _ctor(arg0)
    {
        /* IL_00: ldarg.0 */
        /* IL_01: call Void .ctor()*/
        /* IL_06: ret */
        return ;
    };;
    asm.x6000150_init = function ()
    {
        (((asm0)["System.Collections.Generic.IComparer`1"])(((arguments)[0].constructor.GenericArguments)[0]).init)();
        asm.x6000150 = asm.x6000150_;
    };;
    asm.x6000150 = function (arg0,arg1,arg2)
    {
        (asm.x6000150_init.apply)(this,arguments);
        return (asm.x6000150.apply)(this,arguments);
    };;
    asm.x6000150_ = function _Sort_b__3(arg0,arg1,arg2)
    {
        var t0;
        var t1;
        var loc0;
        t0 = ((arguments)[0].constructor.GenericArguments)[0];
        t1 = ((asm0)["System.Collections.Generic.IComparer`1"])(((arguments)[0].constructor.GenericArguments)[0]);
        /* IL_00: ldarg.0 */
        /* IL_01: ldfld IComparer`1 comparer*/
        /* IL_06: ldarg.1 */
        /* IL_07: ldarg.2 */
        /* IL_08: callvirt Int32 Compare(T, T)*/
        /* IL_0D: stloc.0 */
        loc0 = (((arg0.comparer)[t1].x6000015)())(arg0.comparer,arg1,arg2);
        /* IL_10: ldloc.0 */
        /* IL_11: ret */
        return loc0;
    };
    asm.x600014f = function _ctor(arg0)
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
                $$Object.CustomAttributes = [  ];
                $$Object.BaseType = null;
                $$Object.FullName = "System.Object";
                $$Object.Assembly = asm;
                $$Object.Interfaces = [  ];
                $$Object.IsInst = function (t) { return t instanceof $$Object ? t : null; };
                $$Object.IsValueType = false;
                $$Object.IsPrimitive = false;
                $$Object.IsInterface = false;
                $$Object.IsGenericTypeDefinition = false;
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
                ValueType.BaseType = ((asm0)["System.Object"])();
                ValueType.FullName = "System.ValueType";
                ValueType.Assembly = asm;
                ValueType.Interfaces = [  ];
                ValueType.IsInst = function (t) { return t instanceof ValueType ? t : null; };
                ValueType.IsValueType = false;
                ValueType.IsPrimitive = false;
                ValueType.IsInterface = false;
                ValueType.IsGenericTypeDefinition = false;
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
    (asm)["System.Braille.JavaScript.Boolean"] = (function ()
    {
        var ct;
        ct = null;
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
                $$Boolean.BaseType = ((asm0)["System.ValueType"])();
                $$Boolean.FullName = "System.Braille.JavaScript.Boolean";
                $$Boolean.Assembly = asm;
                $$Boolean.Interfaces = [  ];
                $$Boolean.IsInst = function (t) { return t instanceof $$Boolean ? t : null; };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = false;
                $$Boolean.IsInterface = false;
                $$Boolean.IsGenericTypeDefinition = false;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.prototype.vtable = {
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
            $$Boolean.prototype = {
                
            };
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
                Marshal.CustomAttributes = [  ];
                Marshal.BaseType = ((asm0)["System.Object"])();
                Marshal.FullName = "Braille.Runtime.InteropServices.Marshal";
                Marshal.Assembly = asm;
                Marshal.Interfaces = [  ];
                Marshal.IsInst = function (t) { return t instanceof Marshal ? t : null; };
                Marshal.IsValueType = false;
                Marshal.IsPrimitive = false;
                Marshal.IsInterface = false;
                Marshal.IsGenericTypeDefinition = false;
                Marshal.IsNullable = false;
                Marshal.ArrayType = Array;
                Marshal.prototype.vtable = {
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
                Locale.CustomAttributes = [  ];
                Locale.BaseType = ((asm0)["System.Object"])();
                Locale.FullName = "System.Locale";
                Locale.Assembly = asm;
                Locale.Interfaces = [  ];
                Locale.IsInst = function (t) { return t instanceof Locale ? t : null; };
                Locale.IsValueType = false;
                Locale.IsPrimitive = false;
                Locale.IsInterface = false;
                Locale.IsGenericTypeDefinition = false;
                Locale.IsNullable = false;
                Locale.ArrayType = Array;
                Locale.prototype.vtable = {
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
            Locale.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Collections.Generic.IComparer`1"] = (function ()
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
            function IComparer_1()
            {
                (IComparer_1.init)();
                this.constructor = IComparer_1;
            };
            c = IComparer_1;
            tree_set([ T ],ct,c);
            IComparer_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                IComparer_1.CustomAttributes = [  ];
                IComparer_1.BaseType = null;
                IComparer_1.FullName = "System.Collections.Generic.IComparer`1";
                IComparer_1.Assembly = asm;
                IComparer_1.Interfaces = [  ];
                IComparer_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IComparer_1) != -1 ? t : null; };
                IComparer_1.IsValueType = false;
                IComparer_1.IsPrimitive = false;
                IComparer_1.IsInterface = true;
                IComparer_1.IsGenericTypeDefinition = true;
                IComparer_1.IsNullable = false;
                IComparer_1.ArrayType = Array;
                IComparer_1.GenericArguments = [ T ];
                IComparer_1.prototype.vtable = {
                    'asm0.x6000015': function ()
                    {
                        return asm0.x6000015;
                    }
                };
            };
            IComparer_1.prototype = {
                
            };
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
                IComparer.CustomAttributes = [  ];
                IComparer.BaseType = null;
                IComparer.FullName = "System.Collections.IComparer";
                IComparer.Assembly = asm;
                IComparer.Interfaces = [  ];
                IComparer.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IComparer) != -1 ? t : null; };
                IComparer.IsValueType = false;
                IComparer.IsPrimitive = false;
                IComparer.IsInterface = true;
                IComparer.IsGenericTypeDefinition = false;
                IComparer.IsNullable = false;
                IComparer.ArrayType = Array;
                IComparer.prototype.vtable = {
                    'asm0.x6000016': function ()
                    {
                        return asm0.x6000016;
                    }
                };
            };
            IComparer.prototype = {
                
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
                Assembly.BaseType = ((asm0)["System.Object"])();
                Assembly.FullName = "System.Reflection.Assembly";
                Assembly.Assembly = asm;
                Assembly.Interfaces = [  ];
                Assembly.IsInst = function (t) { return t instanceof Assembly ? t : null; };
                Assembly.IsValueType = false;
                Assembly.IsPrimitive = false;
                Assembly.IsInterface = false;
                Assembly.IsGenericTypeDefinition = false;
                Assembly.IsNullable = false;
                Assembly.ArrayType = Array;
                Assembly.prototype.System_ReflectionAssemblyrawAsm = null;
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
                jsAsm.CustomAttributes = [  ];
                jsAsm.BaseType = ((asm0)["System.Object"])();
                jsAsm.FullName = "System.Reflection.Assembly+jsAsm";
                jsAsm.Assembly = asm;
                jsAsm.Interfaces = [  ];
                jsAsm.IsInst = function (t) { return t instanceof jsAsm ? t : null; };
                jsAsm.IsValueType = false;
                jsAsm.IsPrimitive = false;
                jsAsm.IsInterface = false;
                jsAsm.IsGenericTypeDefinition = false;
                jsAsm.IsNullable = false;
                jsAsm.ArrayType = Array;
                jsAsm.prototype.FullName = null;
                jsAsm.prototype.ManagedInstance = null;
                jsAsm.prototype.vtable = {
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
                ICustomAttributeProvider.CustomAttributes = [  ];
                ICustomAttributeProvider.BaseType = null;
                ICustomAttributeProvider.FullName = "System.Reflection.ICustomAttributeProvider";
                ICustomAttributeProvider.Assembly = asm;
                ICustomAttributeProvider.Interfaces = [  ];
                ICustomAttributeProvider.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICustomAttributeProvider) != -1 ? t : null; };
                ICustomAttributeProvider.IsValueType = false;
                ICustomAttributeProvider.IsPrimitive = false;
                ICustomAttributeProvider.IsInterface = true;
                ICustomAttributeProvider.IsGenericTypeDefinition = false;
                ICustomAttributeProvider.IsNullable = false;
                ICustomAttributeProvider.ArrayType = Array;
                ICustomAttributeProvider.prototype.vtable = {
                    'asm0.x600001b': function ()
                    {
                        return asm0.x600001b;
                    },
                    'asm0.x600001c': function ()
                    {
                        return asm0.x600001c;
                    },
                    'asm0.x600001d': function ()
                    {
                        return asm0.x600001d;
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
                MemberInfo.BaseType = ((asm0)["System.Object"])();
                MemberInfo.FullName = "System.Reflection.MemberInfo";
                MemberInfo.Assembly = asm;
                MemberInfo.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                MemberInfo.IsInst = function (t) { return t instanceof MemberInfo ? t : null; };
                MemberInfo.IsValueType = false;
                MemberInfo.IsPrimitive = false;
                MemberInfo.IsInterface = false;
                MemberInfo.IsGenericTypeDefinition = false;
                MemberInfo.IsNullable = false;
                MemberInfo.ArrayType = Array;
                MemberInfo.prototype.vtable = {
                    'asm0.x600001e': function ()
                    {
                        return asm0.x600001e;
                    },
                    'asm0.x600001f': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000020': function ()
                    {
                        return asm0.x6000020;
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
                    'x600001b': function ()
                    {
                        return asm0.x600001e;
                    },
                    'x600001c': function ()
                    {
                        return asm0.x600001f;
                    },
                    'x600001d': function ()
                    {
                        return asm0.x6000020;
                    }
                };
            };
            MemberInfo.prototype = new (((asm0)["System.Object"])())();
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
                Attribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (32767|0) ],{
                    
                } ] ];
                Attribute.BaseType = ((asm0)["System.Object"])();
                Attribute.FullName = "System.Attribute";
                Attribute.Assembly = asm;
                Attribute.Interfaces = [  ];
                Attribute.IsInst = function (t) { return t instanceof Attribute ? t : null; };
                Attribute.IsValueType = false;
                Attribute.IsPrimitive = false;
                Attribute.IsInterface = false;
                Attribute.IsGenericTypeDefinition = false;
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
                InternalsVisibleToAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (1|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                InternalsVisibleToAttribute.BaseType = ((asm0)["System.Attribute"])();
                InternalsVisibleToAttribute.FullName = "System.Runtime.CompilerServices.InternalsVisibleToAttribute";
                InternalsVisibleToAttribute.Assembly = asm;
                InternalsVisibleToAttribute.Interfaces = [  ];
                InternalsVisibleToAttribute.IsInst = function (t) { return t instanceof InternalsVisibleToAttribute ? t : null; };
                InternalsVisibleToAttribute.IsValueType = false;
                InternalsVisibleToAttribute.IsPrimitive = false;
                InternalsVisibleToAttribute.IsInterface = false;
                InternalsVisibleToAttribute.IsGenericTypeDefinition = false;
                InternalsVisibleToAttribute.IsNullable = false;
                InternalsVisibleToAttribute.ArrayType = Array;
                InternalsVisibleToAttribute.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeassemblyName = null;
                InternalsVisibleToAttribute.prototype.System_Runtime_CompilerServicesInternalsVisibleToAttributeallInternalsVisible = false;
                InternalsVisibleToAttribute.prototype.vtable = {
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
                Enum.CustomAttributes = [  ];
                Enum.BaseType = ((asm0)["System.ValueType"])();
                Enum.FullName = "System.Enum";
                Enum.Assembly = asm;
                Enum.Interfaces = [  ];
                Enum.IsInst = function (t) { return t instanceof Enum ? t : null; };
                Enum.IsValueType = false;
                Enum.IsPrimitive = false;
                Enum.IsInterface = false;
                Enum.IsGenericTypeDefinition = false;
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
                MethodCodeType.CustomAttributes = [  ];
                MethodCodeType.BaseType = ((asm0)["System.Enum"])();
                MethodCodeType.FullName = "System.Runtime.CompilerServices.MethodCodeType";
                MethodCodeType.Assembly = asm;
                MethodCodeType.Interfaces = [  ];
                MethodCodeType.IsInst = function (t) { return t instanceof MethodCodeType ? t : null; };
                MethodCodeType.IsValueType = true;
                MethodCodeType.IsPrimitive = false;
                MethodCodeType.IsInterface = false;
                MethodCodeType.IsGenericTypeDefinition = false;
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
                MethodImplAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (96|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                MethodImplAttribute.BaseType = ((asm0)["System.Attribute"])();
                MethodImplAttribute.FullName = "System.Runtime.CompilerServices.MethodImplAttribute";
                MethodImplAttribute.Assembly = asm;
                MethodImplAttribute.Interfaces = [  ];
                MethodImplAttribute.IsInst = function (t) { return t instanceof MethodImplAttribute ? t : null; };
                MethodImplAttribute.IsValueType = false;
                MethodImplAttribute.IsPrimitive = false;
                MethodImplAttribute.IsInterface = false;
                MethodImplAttribute.IsGenericTypeDefinition = false;
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
                MethodImplOptions.CustomAttributes = [ [ ((asm0)["System.FlagsAttribute"])(),asm0.x600005f,[  ],{
                    
                } ] ];
                MethodImplOptions.BaseType = ((asm0)["System.Enum"])();
                MethodImplOptions.FullName = "System.Runtime.CompilerServices.MethodImplOptions";
                MethodImplOptions.Assembly = asm;
                MethodImplOptions.Interfaces = [  ];
                MethodImplOptions.IsInst = function (t) { return t instanceof MethodImplOptions ? t : null; };
                MethodImplOptions.IsValueType = true;
                MethodImplOptions.IsPrimitive = false;
                MethodImplOptions.IsInterface = false;
                MethodImplOptions.IsGenericTypeDefinition = false;
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
                Activator.CustomAttributes = [  ];
                Activator.BaseType = ((asm0)["System.Object"])();
                Activator.FullName = "System.Activator";
                Activator.Assembly = asm;
                Activator.Interfaces = [  ];
                Activator.IsInst = function (t) { return t instanceof Activator ? t : null; };
                Activator.IsValueType = false;
                Activator.IsPrimitive = false;
                Activator.IsInterface = false;
                Activator.IsGenericTypeDefinition = false;
                Activator.IsNullable = false;
                Activator.ArrayType = Array;
                Activator.prototype.vtable = {
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
                AttributeUsageAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (4|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                AttributeUsageAttribute.BaseType = ((asm0)["System.Attribute"])();
                AttributeUsageAttribute.FullName = "System.AttributeUsageAttribute";
                AttributeUsageAttribute.Assembly = asm;
                AttributeUsageAttribute.Interfaces = [  ];
                AttributeUsageAttribute.IsInst = function (t) { return t instanceof AttributeUsageAttribute ? t : null; };
                AttributeUsageAttribute.IsValueType = false;
                AttributeUsageAttribute.IsPrimitive = false;
                AttributeUsageAttribute.IsInterface = false;
                AttributeUsageAttribute.IsGenericTypeDefinition = false;
                AttributeUsageAttribute.IsNullable = false;
                AttributeUsageAttribute.ArrayType = Array;
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<ValidOn>k__BackingField"] = new (((asm0)["System.AttributeTargets"])())();
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<Inherited>k__BackingField"] = false;
                (AttributeUsageAttribute.prototype)["SystemAttributeUsageAttribute<AllowMultiple>k__BackingField"] = false;
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
                $$Boolean.BaseType = ((asm0)["System.ValueType"])();
                $$Boolean.FullName = "System.Boolean";
                $$Boolean.Assembly = asm;
                $$Boolean.Interfaces = [  ];
                $$Boolean.IsInst = function (t) { return typeof t == 'number'; };
                $$Boolean.IsValueType = true;
                $$Boolean.IsPrimitive = true;
                $$Boolean.IsInterface = false;
                $$Boolean.IsGenericTypeDefinition = false;
                $$Boolean.IsNullable = false;
                $$Boolean.ArrayType = Array;
                $$Boolean.prototype.vtable = {
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
                Byte.BaseType = ((asm0)["System.ValueType"])();
                Byte.FullName = "System.Byte";
                Byte.Assembly = asm;
                Byte.Interfaces = [  ];
                Byte.IsInst = function (t) { return typeof t == 'number'; };
                Byte.IsValueType = true;
                Byte.IsPrimitive = true;
                Byte.IsInterface = false;
                Byte.IsGenericTypeDefinition = false;
                Byte.IsNullable = false;
                Byte.ArrayType = Uint8Array;
                Byte.prototype.vtable = {
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
                Char.BaseType = ((asm0)["System.ValueType"])();
                Char.FullName = "System.Char";
                Char.Assembly = asm;
                Char.Interfaces = [  ];
                Char.IsInst = function (t) { return typeof t == 'number'; };
                Char.IsValueType = true;
                Char.IsPrimitive = true;
                Char.IsInterface = false;
                Char.IsGenericTypeDefinition = false;
                Char.IsNullable = false;
                Char.ArrayType = Uint16Array;
                Char.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000045;
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
                Delegate.BaseType = ((asm0)["System.Object"])();
                Delegate.FullName = "System.Delegate";
                Delegate.Assembly = asm;
                Delegate.Interfaces = [  ];
                Delegate.IsInst = function (t) { return t instanceof Delegate ? t : null; };
                Delegate.IsValueType = false;
                Delegate.IsPrimitive = false;
                Delegate.IsInterface = false;
                Delegate.IsGenericTypeDefinition = false;
                Delegate.IsNullable = false;
                Delegate.ArrayType = Array;
                Delegate.prototype._methodPtr = null;
                Delegate.prototype._target = null;
                Delegate.prototype.vtable = {
                    'asm0.x600004a': function ()
                    {
                        return asm0.x600004a;
                    },
                    'asm0.x600004b': function ()
                    {
                        return asm0.x600004b;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
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
                MulticastDelegate.BaseType = ((asm0)["System.Delegate"])();
                MulticastDelegate.FullName = "System.MulticastDelegate";
                MulticastDelegate.Assembly = asm;
                MulticastDelegate.Interfaces = [  ];
                MulticastDelegate.IsInst = function (t) { return t instanceof MulticastDelegate ? t : null; };
                MulticastDelegate.IsValueType = false;
                MulticastDelegate.IsPrimitive = false;
                MulticastDelegate.IsInterface = false;
                MulticastDelegate.IsGenericTypeDefinition = false;
                MulticastDelegate.IsNullable = false;
                MulticastDelegate.ArrayType = Array;
                MulticastDelegate.prototype._invocationList = null;
                MulticastDelegate.prototype._methodPtr = null;
                MulticastDelegate.prototype._target = null;
                MulticastDelegate.prototype.vtable = {
                    'asm0.x600004b': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x600004a': function ()
                    {
                        return asm0.x6000055;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
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
    (asm)["System.Comparison`1"] = (function ()
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
            function Comparison_1()
            {
                (Comparison_1.init)();
                this.constructor = Comparison_1;
            };
            c = Comparison_1;
            tree_set([ T ],ct,c);
            Comparison_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Comparison_1.CustomAttributes = [  ];
                Comparison_1.BaseType = ((asm0)["System.MulticastDelegate"])();
                Comparison_1.FullName = "System.Comparison`1";
                Comparison_1.Assembly = asm;
                Comparison_1.Interfaces = [  ];
                Comparison_1.IsInst = function (t) { return t instanceof Comparison_1 ? t : null; };
                Comparison_1.IsValueType = false;
                Comparison_1.IsPrimitive = false;
                Comparison_1.IsInterface = false;
                Comparison_1.IsGenericTypeDefinition = true;
                Comparison_1.IsNullable = false;
                Comparison_1.ArrayType = Array;
                Comparison_1.GenericArguments = [ T ];
                Comparison_1.prototype._invocationList = null;
                Comparison_1.prototype._methodPtr = null;
                Comparison_1.prototype._target = null;
                Comparison_1.prototype.vtable = {
                    'asm0.x6000058': function ()
                    {
                        return asm0.x6000058;
                    },
                    'asm0.x600004b': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x600004a': function ()
                    {
                        return asm0.x6000055;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
            };
            Comparison_1.prototype = {
                
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
                Console.BaseType = ((asm0)["System.Object"])();
                Console.FullName = "System.Console";
                Console.Assembly = asm;
                Console.Interfaces = [  ];
                Console.IsInst = function (t) { return t instanceof Console ? t : null; };
                Console.IsValueType = false;
                Console.IsPrimitive = false;
                Console.IsInterface = false;
                Console.IsGenericTypeDefinition = false;
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
                Double.BaseType = ((asm0)["System.ValueType"])();
                Double.FullName = "System.Double";
                Double.Assembly = asm;
                Double.Interfaces = [  ];
                Double.IsInst = function (t) { return typeof t == 'number'; };
                Double.IsValueType = true;
                Double.IsPrimitive = true;
                Double.IsInterface = false;
                Double.IsGenericTypeDefinition = false;
                Double.IsNullable = false;
                Double.ArrayType = Float64Array;
                Double.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600005c;
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
                Environment.BaseType = ((asm0)["System.Object"])();
                Environment.FullName = "System.Environment";
                Environment.Assembly = asm;
                Environment.Interfaces = [  ];
                Environment.IsInst = function (t) { return t instanceof Environment ? t : null; };
                Environment.IsValueType = false;
                Environment.IsPrimitive = false;
                Environment.IsInterface = false;
                Environment.IsGenericTypeDefinition = false;
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
                FlagsAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (16|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                FlagsAttribute.BaseType = ((asm0)["System.Attribute"])();
                FlagsAttribute.FullName = "System.FlagsAttribute";
                FlagsAttribute.Assembly = asm;
                FlagsAttribute.Interfaces = [  ];
                FlagsAttribute.IsInst = function (t) { return t instanceof FlagsAttribute ? t : null; };
                FlagsAttribute.IsValueType = false;
                FlagsAttribute.IsPrimitive = false;
                FlagsAttribute.IsInterface = false;
                FlagsAttribute.IsGenericTypeDefinition = false;
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
                Func_2.BaseType = ((asm0)["System.MulticastDelegate"])();
                Func_2.FullName = "System.Func`2";
                Func_2.Assembly = asm;
                Func_2.Interfaces = [  ];
                Func_2.IsInst = function (t) { return t instanceof Func_2 ? t : null; };
                Func_2.IsValueType = false;
                Func_2.IsPrimitive = false;
                Func_2.IsInterface = false;
                Func_2.IsGenericTypeDefinition = true;
                Func_2.IsNullable = false;
                Func_2.ArrayType = Array;
                Func_2.GenericArguments = [ T,TResult ];
                Func_2.prototype._invocationList = null;
                Func_2.prototype._methodPtr = null;
                Func_2.prototype._target = null;
                Func_2.prototype.vtable = {
                    'asm0.x6000061': function ()
                    {
                        return asm0.x6000061;
                    },
                    'asm0.x600004b': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x600004a': function ()
                    {
                        return asm0.x6000055;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
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
                ICloneable.BaseType = null;
                ICloneable.FullName = "System.ICloneable";
                ICloneable.Assembly = asm;
                ICloneable.Interfaces = [  ];
                ICloneable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(ICloneable) != -1 ? t : null; };
                ICloneable.IsValueType = false;
                ICloneable.IsPrimitive = false;
                ICloneable.IsInterface = true;
                ICloneable.IsGenericTypeDefinition = false;
                ICloneable.IsNullable = false;
                ICloneable.ArrayType = Array;
                ICloneable.prototype.vtable = {
                    'asm0.x6000062': function ()
                    {
                        return asm0.x6000062;
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
                IDisposable.BaseType = null;
                IDisposable.FullName = "System.IDisposable";
                IDisposable.Assembly = asm;
                IDisposable.Interfaces = [  ];
                IDisposable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IDisposable) != -1 ? t : null; };
                IDisposable.IsValueType = false;
                IDisposable.IsPrimitive = false;
                IDisposable.IsInterface = true;
                IDisposable.IsGenericTypeDefinition = false;
                IDisposable.IsNullable = false;
                IDisposable.ArrayType = Array;
                IDisposable.prototype.vtable = {
                    'asm0.x6000063': function ()
                    {
                        return asm0.x6000063;
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
                Int16.BaseType = ((asm0)["System.ValueType"])();
                Int16.FullName = "System.Int16";
                Int16.Assembly = asm;
                Int16.Interfaces = [  ];
                Int16.IsInst = function (t) { return typeof t == 'number'; };
                Int16.IsValueType = true;
                Int16.IsPrimitive = true;
                Int16.IsInterface = false;
                Int16.IsGenericTypeDefinition = false;
                Int16.IsNullable = false;
                Int16.ArrayType = Int16Array;
                Int16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000064;
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
                Int32.BaseType = ((asm0)["System.ValueType"])();
                Int32.FullName = "System.Int32";
                Int32.Assembly = asm;
                Int32.Interfaces = [  ];
                Int32.IsInst = function (t) { return typeof t == 'number'; };
                Int32.IsValueType = true;
                Int32.IsPrimitive = true;
                Int32.IsInterface = false;
                Int32.IsGenericTypeDefinition = false;
                Int32.IsNullable = false;
                Int32.ArrayType = Int32Array;
                Int32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000065;
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
                InternalFormatting.BaseType = ((asm0)["System.Object"])();
                InternalFormatting.FullName = "System.InternalFormatting";
                InternalFormatting.Assembly = asm;
                InternalFormatting.Interfaces = [  ];
                InternalFormatting.IsInst = function (t) { return t instanceof InternalFormatting ? t : null; };
                InternalFormatting.IsValueType = false;
                InternalFormatting.IsPrimitive = false;
                InternalFormatting.IsInterface = false;
                InternalFormatting.IsGenericTypeDefinition = false;
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
                IntPtr.BaseType = ((asm0)["System.ValueType"])();
                IntPtr.FullName = "System.IntPtr";
                IntPtr.Assembly = asm;
                IntPtr.Interfaces = [  ];
                IntPtr.IsInst = function (t) { return typeof t == 'number'; };
                IntPtr.IsValueType = true;
                IntPtr.IsPrimitive = true;
                IntPtr.IsInterface = false;
                IntPtr.IsGenericTypeDefinition = false;
                IntPtr.IsNullable = false;
                IntPtr.ArrayType = Array;
                IntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000069;
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
                Exception.BaseType = ((asm0)["System.Object"])();
                Exception.FullName = "System.Exception";
                Exception.Assembly = asm;
                Exception.Interfaces = [  ];
                Exception.IsInst = function (t) { return t instanceof Exception ? t : null; };
                Exception.IsValueType = false;
                Exception.IsPrimitive = false;
                Exception.IsInterface = false;
                Exception.IsGenericTypeDefinition = false;
                Exception.IsNullable = false;
                Exception.ArrayType = Array;
                (Exception.prototype)["SystemException<HResult>k__BackingField"] = 0;
                (Exception.prototype)["SystemException<Message>k__BackingField"] = null;
                (Exception.prototype)["SystemException<InnerException>k__BackingField"] = null;
                Exception.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                SystemException.CustomAttributes = [  ];
                SystemException.BaseType = ((asm0)["System.Exception"])();
                SystemException.FullName = "System.SystemException";
                SystemException.Assembly = asm;
                SystemException.Interfaces = [  ];
                SystemException.IsInst = function (t) { return t instanceof SystemException ? t : null; };
                SystemException.IsValueType = false;
                SystemException.IsPrimitive = false;
                SystemException.IsInterface = false;
                SystemException.IsGenericTypeDefinition = false;
                SystemException.IsNullable = false;
                SystemException.ArrayType = Array;
                SystemException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                NullReferenceException.CustomAttributes = [  ];
                NullReferenceException.BaseType = ((asm0)["System.SystemException"])();
                NullReferenceException.FullName = "System.NullReferenceException";
                NullReferenceException.Assembly = asm;
                NullReferenceException.Interfaces = [  ];
                NullReferenceException.IsInst = function (t) { return t instanceof NullReferenceException ? t : null; };
                NullReferenceException.IsValueType = false;
                NullReferenceException.IsPrimitive = false;
                NullReferenceException.IsInterface = false;
                NullReferenceException.IsGenericTypeDefinition = false;
                NullReferenceException.IsNullable = false;
                NullReferenceException.ArrayType = Array;
                NullReferenceException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                ParamArrayAttribute.CustomAttributes = [  ];
                ParamArrayAttribute.BaseType = ((asm0)["System.Attribute"])();
                ParamArrayAttribute.FullName = "System.ParamArrayAttribute";
                ParamArrayAttribute.Assembly = asm;
                ParamArrayAttribute.Interfaces = [  ];
                ParamArrayAttribute.IsInst = function (t) { return t instanceof ParamArrayAttribute ? t : null; };
                ParamArrayAttribute.IsValueType = false;
                ParamArrayAttribute.IsPrimitive = false;
                ParamArrayAttribute.IsInterface = false;
                ParamArrayAttribute.IsGenericTypeDefinition = false;
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
                RuntimeFieldHandle.BaseType = ((asm0)["System.ValueType"])();
                RuntimeFieldHandle.FullName = "System.RuntimeFieldHandle";
                RuntimeFieldHandle.Assembly = asm;
                RuntimeFieldHandle.Interfaces = [  ];
                RuntimeFieldHandle.IsInst = function (t) { return t instanceof RuntimeFieldHandle ? t : null; };
                RuntimeFieldHandle.IsValueType = true;
                RuntimeFieldHandle.IsPrimitive = false;
                RuntimeFieldHandle.IsInterface = false;
                RuntimeFieldHandle.IsGenericTypeDefinition = false;
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
                Type.BaseType = ((asm0)["System.Reflection.MemberInfo"])();
                Type.FullName = "System.Type";
                Type.Assembly = asm;
                Type.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                Type.IsInst = function (t) { return t instanceof Type ? t : null; };
                Type.IsValueType = false;
                Type.IsPrimitive = false;
                Type.IsInterface = false;
                Type.IsGenericTypeDefinition = false;
                Type.IsNullable = false;
                Type.ArrayType = Array;
                Type.prototype.vtable = {
                    'asm0.x6000078': function ()
                    {
                        return asm0.x6000078;
                    },
                    'asm0.x600007a': function ()
                    {
                        return asm0.x600007a;
                    },
                    'asm0.x600007c': function ()
                    {
                        return asm0.x600007c;
                    },
                    'asm0.x600007d': function ()
                    {
                        return asm0.x600007d;
                    },
                    'asm0.x600007e': function ()
                    {
                        return asm0.x600007e;
                    },
                    'asm0.x600007f': function ()
                    {
                        return asm0.x600007f;
                    },
                    'asm0.x6000080': function ()
                    {
                        return asm0.x6000080;
                    },
                    'asm0.x6000081': function ()
                    {
                        return asm0.x6000081;
                    },
                    'asm0.x6000082': function ()
                    {
                        return asm0.x6000082;
                    },
                    'asm0.x6000083': function ()
                    {
                        return asm0.x6000083;
                    },
                    'asm0.x6000084': function ()
                    {
                        return asm0.x6000084;
                    },
                    'asm0.x6000085': function ()
                    {
                        return asm0.x6000085;
                    },
                    'asm0.x6000086': function ()
                    {
                        return asm0.x6000086;
                    },
                    'asm0.x6000087': function ()
                    {
                        return asm0.x6000087;
                    },
                    'asm0.x600001e': function ()
                    {
                        return asm0.x600001e;
                    },
                    'asm0.x600001f': function ()
                    {
                        return asm0.x600001f;
                    },
                    'asm0.x6000020': function ()
                    {
                        return asm0.x6000020;
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
                    'x600001b': function ()
                    {
                        return asm0.x600001e;
                    },
                    'x600001c': function ()
                    {
                        return asm0.x600001f;
                    },
                    'x600001d': function ()
                    {
                        return asm0.x6000020;
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
                RuntimeType.BaseType = ((asm0)["System.Type"])();
                RuntimeType.FullName = "System.RuntimeType";
                RuntimeType.Assembly = asm;
                RuntimeType.Interfaces = [ ((asm0)["System.Reflection.ICustomAttributeProvider"])() ];
                RuntimeType.IsInst = function (t) { return t instanceof RuntimeType ? t : null; };
                RuntimeType.IsValueType = false;
                RuntimeType.IsPrimitive = false;
                RuntimeType.IsInterface = false;
                RuntimeType.IsGenericTypeDefinition = false;
                RuntimeType.IsNullable = false;
                RuntimeType.ArrayType = Array;
                RuntimeType.prototype.ctor = null;
                RuntimeType.prototype.vtable = {
                    'asm0.x600007c': function ()
                    {
                        return asm0.x600008e;
                    },
                    'asm0.x6000078': function ()
                    {
                        return asm0.x600008f;
                    },
                    'asm0.x600007e': function ()
                    {
                        return asm0.x6000090;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000091;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000092;
                    },
                    'asm0.x600001e': function ()
                    {
                        return asm0.x6000094;
                    },
                    'asm0.x600001f': function ()
                    {
                        return asm0.x6000095;
                    },
                    'asm0.x6000020': function ()
                    {
                        return asm0.x6000096;
                    },
                    'asm0.x6000080': function ()
                    {
                        return asm0.x6000097;
                    },
                    'asm0.x600007f': function ()
                    {
                        return asm0.x6000098;
                    },
                    'asm0.x6000081': function ()
                    {
                        return asm0.x6000099;
                    },
                    'asm0.x6000084': function ()
                    {
                        return asm0.x600009a;
                    },
                    'asm0.x6000082': function ()
                    {
                        return asm0.x600009b;
                    },
                    'asm0.x600007d': function ()
                    {
                        return asm0.x600009c;
                    },
                    'asm0.x6000083': function ()
                    {
                        return asm0.x600009d;
                    },
                    'asm0.x6000085': function ()
                    {
                        return asm0.x600009e;
                    },
                    'asm0.x6000086': function ()
                    {
                        return asm0.x60000a0;
                    },
                    'asm0.x6000087': function ()
                    {
                        return asm0.x60000a1;
                    },
                    'asm0.x600007a': function ()
                    {
                        return asm0.x600007a;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
                (RuntimeType.prototype)[((asm0)["System.Reflection.ICustomAttributeProvider"])()] = {
                    'x600001b': function ()
                    {
                        return asm0.x6000094;
                    },
                    'x600001c': function ()
                    {
                        return asm0.x6000095;
                    },
                    'x600001d': function ()
                    {
                        return asm0.x6000096;
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
                constructor.BaseType = ((asm0)["System.Object"])();
                constructor.FullName = "System.RuntimeType+constructor";
                constructor.Assembly = asm;
                constructor.Interfaces = [  ];
                constructor.IsInst = function (t) { return t instanceof constructor ? t : null; };
                constructor.IsValueType = false;
                constructor.IsPrimitive = false;
                constructor.IsInterface = false;
                constructor.IsGenericTypeDefinition = false;
                constructor.IsNullable = false;
                constructor.ArrayType = Array;
                constructor.prototype.FullName = null;
                constructor.prototype.BaseType = null;
                constructor.prototype.Assembly = null;
                constructor.prototype.CustomAttributes = null;
                constructor.prototype.TypeInstance = null;
                constructor.prototype.Hash = 0;
                constructor.prototype.IsGenericTypeDefinition = new (((asm0)["System.Braille.JavaScript.Boolean"])())();
                constructor.prototype.IsInterface = new (((asm0)["System.Braille.JavaScript.Boolean"])())();
                constructor.prototype.IsValueType = new (((asm0)["System.Braille.JavaScript.Boolean"])())();
                constructor.prototype.GenericArguments = null;
                constructor.prototype.Interfaces = null;
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
                RuntimeTypeHandle.BaseType = ((asm0)["System.ValueType"])();
                RuntimeTypeHandle.FullName = "System.RuntimeTypeHandle";
                RuntimeTypeHandle.Assembly = asm;
                RuntimeTypeHandle.Interfaces = [  ];
                RuntimeTypeHandle.IsInst = function (t) { return t instanceof RuntimeTypeHandle ? t : null; };
                RuntimeTypeHandle.IsValueType = true;
                RuntimeTypeHandle.IsPrimitive = false;
                RuntimeTypeHandle.IsInterface = false;
                RuntimeTypeHandle.IsGenericTypeDefinition = false;
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
                SByte.BaseType = ((asm0)["System.ValueType"])();
                SByte.FullName = "System.SByte";
                SByte.Assembly = asm;
                SByte.Interfaces = [  ];
                SByte.IsInst = function (t) { return typeof t == 'number'; };
                SByte.IsValueType = true;
                SByte.IsPrimitive = true;
                SByte.IsInterface = false;
                SByte.IsGenericTypeDefinition = false;
                SByte.IsNullable = false;
                SByte.ArrayType = Int8Array;
                SByte.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a4;
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
                Single.BaseType = ((asm0)["System.ValueType"])();
                Single.FullName = "System.Single";
                Single.Assembly = asm;
                Single.Interfaces = [  ];
                Single.IsInst = function (t) { return typeof t == 'number'; };
                Single.IsValueType = true;
                Single.IsPrimitive = true;
                Single.IsInterface = false;
                Single.IsGenericTypeDefinition = false;
                Single.IsNullable = false;
                Single.ArrayType = Float32Array;
                Single.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000a5;
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
                OutAttribute.BaseType = ((asm0)["System.Attribute"])();
                OutAttribute.FullName = "System.Runtime.InteropServices.OutAttribute";
                OutAttribute.Assembly = asm;
                OutAttribute.Interfaces = [  ];
                OutAttribute.IsInst = function (t) { return t instanceof OutAttribute ? t : null; };
                OutAttribute.IsValueType = false;
                OutAttribute.IsPrimitive = false;
                OutAttribute.IsInterface = false;
                OutAttribute.IsGenericTypeDefinition = false;
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
                IEnumerator.BaseType = null;
                IEnumerator.FullName = "System.Collections.IEnumerator";
                IEnumerator.Assembly = asm;
                IEnumerator.Interfaces = [ ((asm0)["System.IDisposable"])() ];
                IEnumerator.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator) != -1 ? t : null; };
                IEnumerator.IsValueType = false;
                IEnumerator.IsPrimitive = false;
                IEnumerator.IsInterface = true;
                IEnumerator.IsGenericTypeDefinition = false;
                IEnumerator.IsNullable = false;
                IEnumerator.ArrayType = Array;
                IEnumerator.prototype.vtable = {
                    'asm0.x60000a7': function ()
                    {
                        return asm0.x60000a7;
                    },
                    'asm0.x60000a8': function ()
                    {
                        return asm0.x60000a8;
                    },
                    'asm0.x60000a9': function ()
                    {
                        return asm0.x60000a9;
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
                IEnumerator_1.BaseType = null;
                IEnumerator_1.FullName = "System.Collections.Generic.IEnumerator`1";
                IEnumerator_1.Assembly = asm;
                IEnumerator_1.Interfaces = [ ((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
                IEnumerator_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerator_1) != -1 ? t : null; };
                IEnumerator_1.IsValueType = false;
                IEnumerator_1.IsPrimitive = false;
                IEnumerator_1.IsInterface = true;
                IEnumerator_1.IsGenericTypeDefinition = true;
                IEnumerator_1.IsNullable = false;
                IEnumerator_1.ArrayType = Array;
                IEnumerator_1.GenericArguments = [ T ];
                IEnumerator_1.prototype.vtable = {
                    'asm0.x60000aa': function ()
                    {
                        return asm0.x60000aa;
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
                IEnumerable.BaseType = null;
                IEnumerable.FullName = "System.Collections.IEnumerable";
                IEnumerable.Assembly = asm;
                IEnumerable.Interfaces = [  ];
                IEnumerable.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable) != -1 ? t : null; };
                IEnumerable.IsValueType = false;
                IEnumerable.IsPrimitive = false;
                IEnumerable.IsInterface = true;
                IEnumerable.IsGenericTypeDefinition = false;
                IEnumerable.IsNullable = false;
                IEnumerable.ArrayType = Array;
                IEnumerable.prototype.vtable = {
                    'asm0.x60000ab': function ()
                    {
                        return asm0.x60000ab;
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
                IEnumerable_1.BaseType = null;
                IEnumerable_1.FullName = "System.Collections.Generic.IEnumerable`1";
                IEnumerable_1.Assembly = asm;
                IEnumerable_1.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                IEnumerable_1.IsInst = function (t) { return t.constructor.Interfaces.indexOf(IEnumerable_1) != -1 ? t : null; };
                IEnumerable_1.IsValueType = false;
                IEnumerable_1.IsPrimitive = false;
                IEnumerable_1.IsInterface = true;
                IEnumerable_1.IsGenericTypeDefinition = true;
                IEnumerable_1.IsNullable = false;
                IEnumerable_1.ArrayType = Array;
                IEnumerable_1.GenericArguments = [ T ];
                IEnumerable_1.prototype.vtable = {
                    'asm0.x60000ac': function ()
                    {
                        return asm0.x60000ac;
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
                Debugger.BaseType = ((asm0)["System.Object"])();
                Debugger.FullName = "System.Diagnostics.Debugger";
                Debugger.Assembly = asm;
                Debugger.Interfaces = [  ];
                Debugger.IsInst = function (t) { return t instanceof Debugger ? t : null; };
                Debugger.IsValueType = false;
                Debugger.IsPrimitive = false;
                Debugger.IsInterface = false;
                Debugger.IsGenericTypeDefinition = false;
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
                NotImplementedException.BaseType = ((asm0)["System.Exception"])();
                NotImplementedException.FullName = "System.NotImplementedException";
                NotImplementedException.Assembly = asm;
                NotImplementedException.Interfaces = [  ];
                NotImplementedException.IsInst = function (t) { return t instanceof NotImplementedException ? t : null; };
                NotImplementedException.IsValueType = false;
                NotImplementedException.IsPrimitive = false;
                NotImplementedException.IsInterface = false;
                NotImplementedException.IsGenericTypeDefinition = false;
                NotImplementedException.IsNullable = false;
                NotImplementedException.ArrayType = Array;
                NotImplementedException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                NotSupportedException.BaseType = ((asm0)["System.Exception"])();
                NotSupportedException.FullName = "System.NotSupportedException";
                NotSupportedException.Assembly = asm;
                NotSupportedException.Interfaces = [  ];
                NotSupportedException.IsInst = function (t) { return t instanceof NotSupportedException ? t : null; };
                NotSupportedException.IsValueType = false;
                NotSupportedException.IsPrimitive = false;
                NotSupportedException.IsInterface = false;
                NotSupportedException.IsGenericTypeDefinition = false;
                NotSupportedException.IsNullable = false;
                NotSupportedException.ArrayType = Array;
                NotSupportedException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                Math.BaseType = ((asm0)["System.Object"])();
                Math.FullName = "System.Math";
                Math.Assembly = asm;
                Math.Interfaces = [  ];
                Math.IsInst = function (t) { return t instanceof Math ? t : null; };
                Math.IsValueType = false;
                Math.IsPrimitive = false;
                Math.IsInterface = false;
                Math.IsGenericTypeDefinition = false;
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
                InvalidCastException.BaseType = ((asm0)["System.Exception"])();
                InvalidCastException.FullName = "System.InvalidCastException";
                InvalidCastException.Assembly = asm;
                InvalidCastException.Interfaces = [  ];
                InvalidCastException.IsInst = function (t) { return t instanceof InvalidCastException ? t : null; };
                InvalidCastException.IsValueType = false;
                InvalidCastException.IsPrimitive = false;
                InvalidCastException.IsInterface = false;
                InvalidCastException.IsGenericTypeDefinition = false;
                InvalidCastException.IsNullable = false;
                InvalidCastException.ArrayType = Array;
                InvalidCastException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                InvalidOperationException.BaseType = ((asm0)["System.Exception"])();
                InvalidOperationException.FullName = "System.InvalidOperationException";
                InvalidOperationException.Assembly = asm;
                InvalidOperationException.Interfaces = [  ];
                InvalidOperationException.IsInst = function (t) { return t instanceof InvalidOperationException ? t : null; };
                InvalidOperationException.IsValueType = false;
                InvalidOperationException.IsPrimitive = false;
                InvalidOperationException.IsInterface = false;
                InvalidOperationException.IsGenericTypeDefinition = false;
                InvalidOperationException.IsNullable = false;
                InvalidOperationException.ArrayType = Array;
                InvalidOperationException.prototype.vtable = {
                    'asm0.x600006f': function ()
                    {
                        return asm0.x600006f;
                    },
                    'asm0.x6000070': function ()
                    {
                        return asm0.x6000070;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000071;
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
                Int64.BaseType = ((asm0)["System.ValueType"])();
                Int64.FullName = "System.Int64";
                Int64.Assembly = asm;
                Int64.Interfaces = [  ];
                Int64.IsInst = function (t) { return typeof t == 'number'; };
                Int64.IsValueType = true;
                Int64.IsPrimitive = true;
                Int64.IsInterface = false;
                Int64.IsGenericTypeDefinition = false;
                Int64.IsNullable = false;
                Int64.ArrayType = Array;
                Int64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x60000bd;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x60000be;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x60000bf;
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
                $$Number.CustomAttributes = [  ];
                $$Number.BaseType = ((asm0)["System.ValueType"])();
                $$Number.FullName = "Braille.JavaScript.Number";
                $$Number.Assembly = asm;
                $$Number.Interfaces = [  ];
                $$Number.IsInst = function (t) { return t instanceof $$Number ? t : null; };
                $$Number.IsValueType = true;
                $$Number.IsPrimitive = false;
                $$Number.IsInterface = false;
                $$Number.IsGenericTypeDefinition = false;
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
                ExtensionAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (64|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                ExtensionAttribute.BaseType = ((asm0)["System.Attribute"])();
                ExtensionAttribute.FullName = "System.Runtime.CompilerServices.ExtensionAttribute";
                ExtensionAttribute.Assembly = asm;
                ExtensionAttribute.Interfaces = [  ];
                ExtensionAttribute.IsInst = function (t) { return t instanceof ExtensionAttribute ? t : null; };
                ExtensionAttribute.IsValueType = false;
                ExtensionAttribute.IsPrimitive = false;
                ExtensionAttribute.IsInterface = false;
                ExtensionAttribute.IsGenericTypeDefinition = false;
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
                IndexerNameAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (128|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),true ]
                } ] ];
                IndexerNameAttribute.BaseType = ((asm0)["System.Attribute"])();
                IndexerNameAttribute.FullName = "System.Runtime.CompilerServices.IndexerNameAttribute";
                IndexerNameAttribute.Assembly = asm;
                IndexerNameAttribute.Interfaces = [  ];
                IndexerNameAttribute.IsInst = function (t) { return t instanceof IndexerNameAttribute ? t : null; };
                IndexerNameAttribute.IsValueType = false;
                IndexerNameAttribute.IsPrimitive = false;
                IndexerNameAttribute.IsInterface = false;
                IndexerNameAttribute.IsGenericTypeDefinition = false;
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
                RuntimeHelpers.BaseType = ((asm0)["System.Object"])();
                RuntimeHelpers.FullName = "System.Runtime.CompilerServices.RuntimeHelpers";
                RuntimeHelpers.Assembly = asm;
                RuntimeHelpers.Interfaces = [  ];
                RuntimeHelpers.IsInst = function (t) { return t instanceof RuntimeHelpers ? t : null; };
                RuntimeHelpers.IsValueType = false;
                RuntimeHelpers.IsPrimitive = false;
                RuntimeHelpers.IsInterface = false;
                RuntimeHelpers.IsGenericTypeDefinition = false;
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
                EventArgs.BaseType = ((asm0)["System.Object"])();
                EventArgs.FullName = "System.EventArgs";
                EventArgs.Assembly = asm;
                EventArgs.Interfaces = [  ];
                EventArgs.IsInst = function (t) { return t instanceof EventArgs ? t : null; };
                EventArgs.IsValueType = false;
                EventArgs.IsPrimitive = false;
                EventArgs.IsInterface = false;
                EventArgs.IsGenericTypeDefinition = false;
                EventArgs.IsNullable = false;
                EventArgs.ArrayType = Array;
                (asm0.x60000e3)();
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
                EventHandler.BaseType = ((asm0)["System.MulticastDelegate"])();
                EventHandler.FullName = "System.EventHandler";
                EventHandler.Assembly = asm;
                EventHandler.Interfaces = [  ];
                EventHandler.IsInst = function (t) { return t instanceof EventHandler ? t : null; };
                EventHandler.IsValueType = false;
                EventHandler.IsPrimitive = false;
                EventHandler.IsInterface = false;
                EventHandler.IsGenericTypeDefinition = false;
                EventHandler.IsNullable = false;
                EventHandler.ArrayType = Array;
                EventHandler.prototype._invocationList = null;
                EventHandler.prototype._methodPtr = null;
                EventHandler.prototype._target = null;
                EventHandler.prototype.vtable = {
                    'asm0.x60000e5': function ()
                    {
                        return asm0.x60000e5;
                    },
                    'asm0.x600004b': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x600004a': function ()
                    {
                        return asm0.x6000055;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
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
    (asm)["System.Predicate`1"] = (function ()
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
            function Predicate_1()
            {
                (Predicate_1.init)();
                this.constructor = Predicate_1;
            };
            c = Predicate_1;
            tree_set([ T ],ct,c);
            Predicate_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                Predicate_1.CustomAttributes = [  ];
                Predicate_1.BaseType = ((asm0)["System.MulticastDelegate"])();
                Predicate_1.FullName = "System.Predicate`1";
                Predicate_1.Assembly = asm;
                Predicate_1.Interfaces = [  ];
                Predicate_1.IsInst = function (t) { return t instanceof Predicate_1 ? t : null; };
                Predicate_1.IsValueType = false;
                Predicate_1.IsPrimitive = false;
                Predicate_1.IsInterface = false;
                Predicate_1.IsGenericTypeDefinition = true;
                Predicate_1.IsNullable = false;
                Predicate_1.ArrayType = Array;
                Predicate_1.GenericArguments = [ T ];
                Predicate_1.prototype._invocationList = null;
                Predicate_1.prototype._methodPtr = null;
                Predicate_1.prototype._target = null;
                Predicate_1.prototype.vtable = {
                    'asm0.x60000e7': function ()
                    {
                        return asm0.x60000e7;
                    },
                    'asm0.x600004b': function ()
                    {
                        return asm0.x6000054;
                    },
                    'asm0.x600004a': function ()
                    {
                        return asm0.x6000055;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x600004c;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600004f;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000005;
                    }
                };
            };
            Predicate_1.prototype = {
                
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
                Array.BaseType = ((asm0)["System.Object"])();
                Array.FullName = "System.Array";
                Array.Assembly = asm;
                Array.Interfaces = [ ((asm0)["System.Collections.IEnumerable"])() ];
                Array.IsInst = function (t) { return t instanceof Array ? t : null; };
                Array.IsValueType = false;
                Array.IsPrimitive = false;
                Array.IsInterface = false;
                Array.IsGenericTypeDefinition = false;
                Array.IsNullable = false;
                Array.ArrayType = Array;
                Array.prototype.type = null;
                Array.prototype.jsarr = null;
                Array.prototype.vtable = {
                    'asm0.x60000ed': function ()
                    {
                        return asm0.x60000ed;
                    },
                    'asm0.x60000ee': function ()
                    {
                        return asm0.x60000ee;
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
                    'x60000ab': function ()
                    {
                        return asm0.x60000ed;
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
                Array_1.BaseType = ((asm0)["System.Array"])();
                Array_1.FullName = "System.Array`1";
                Array_1.Assembly = asm;
                Array_1.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerable`1"])(T),((asm0)["System.Collections.IEnumerable"])() ];
                Array_1.IsInst = function (t) { return t instanceof asm0['System.Array']() && t.type.prototype instanceof T ? t : null; };
                Array_1.IsValueType = false;
                Array_1.IsPrimitive = false;
                Array_1.IsInterface = false;
                Array_1.IsGenericTypeDefinition = true;
                Array_1.IsNullable = false;
                Array_1.ArrayType = Array;
                Array_1.GenericArguments = [ T ];
                Array_1.prototype.type = null;
                Array_1.prototype.jsarr = null;
                Array_1.prototype.vtable = {
                    'asm0.x6000108': function ()
                    {
                        return asm0.x6000108;
                    },
                    'asm0.x60000ee': function ()
                    {
                        return asm0.x6000109;
                    },
                    'asm0.x60000ed': function ()
                    {
                        return asm0.x60000ed;
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
                    'x60000ac': function ()
                    {
                        return asm0.x6000108;
                    }
                };
                (Array_1.prototype)[((asm0)["System.Collections.IEnumerable"])()] = {
                    'x60000ab': function ()
                    {
                        return asm0.x60000ed;
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
                ArrayEnumerator.BaseType = ((asm0)["System.Object"])();
                ArrayEnumerator.FullName = "System.Array`1+ArrayEnumerator";
                ArrayEnumerator.Assembly = asm;
                ArrayEnumerator.Interfaces = [ ((asm0)["System.Collections.Generic.IEnumerator`1"])(T),((asm0)["System.Collections.IEnumerator"])(),((asm0)["System.IDisposable"])() ];
                ArrayEnumerator.IsInst = function (t) { return t instanceof ArrayEnumerator ? t : null; };
                ArrayEnumerator.IsValueType = false;
                ArrayEnumerator.IsPrimitive = false;
                ArrayEnumerator.IsInterface = false;
                ArrayEnumerator.IsGenericTypeDefinition = true;
                ArrayEnumerator.IsNullable = false;
                ArrayEnumerator.ArrayType = Array;
                ArrayEnumerator.GenericArguments = [ T ];
                ArrayEnumerator.prototype.index = 0;
                ArrayEnumerator.prototype.length = 0;
                ArrayEnumerator.prototype.source = null;
                ArrayEnumerator.prototype.vtable = {
                    'asm0.x600010c': function ()
                    {
                        return asm0.x600010c;
                    },
                    'asm0.x600010d': function ()
                    {
                        return asm0.x600010d;
                    },
                    'asm0.x600010e': function ()
                    {
                        return asm0.x600010e;
                    },
                    'asm0.x600010f': function ()
                    {
                        return asm0.x600010f;
                    },
                    'asm0.x6000110': function ()
                    {
                        return asm0.x6000110;
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
                    'x60000aa': function ()
                    {
                        return asm0.x600010c;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.Collections.IEnumerator"])()] = {
                    'x60000a7': function ()
                    {
                        return asm0.x600010e;
                    },
                    'x60000a8': function ()
                    {
                        return asm0.x600010d;
                    },
                    'x60000a9': function ()
                    {
                        return asm0.x600010f;
                    }
                };
                (ArrayEnumerator.prototype)[((asm0)["System.IDisposable"])()] = {
                    'x6000063': function ()
                    {
                        return asm0.x6000110;
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
                DebuggerStepThroughAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (108|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                DebuggerStepThroughAttribute.BaseType = ((asm0)["System.Attribute"])();
                DebuggerStepThroughAttribute.FullName = "System.Diagnostics.DebuggerStepThroughAttribute";
                DebuggerStepThroughAttribute.Assembly = asm;
                DebuggerStepThroughAttribute.Interfaces = [  ];
                DebuggerStepThroughAttribute.IsInst = function (t) { return t instanceof DebuggerStepThroughAttribute ? t : null; };
                DebuggerStepThroughAttribute.IsValueType = false;
                DebuggerStepThroughAttribute.IsPrimitive = false;
                DebuggerStepThroughAttribute.IsInterface = false;
                DebuggerStepThroughAttribute.IsGenericTypeDefinition = false;
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
                AttributeTargets.CustomAttributes = [ [ ((asm0)["System.FlagsAttribute"])(),asm0.x600005f,[  ],{
                    
                } ] ];
                AttributeTargets.BaseType = ((asm0)["System.Enum"])();
                AttributeTargets.FullName = "System.AttributeTargets";
                AttributeTargets.Assembly = asm;
                AttributeTargets.Interfaces = [  ];
                AttributeTargets.IsInst = function (t) { return t instanceof AttributeTargets ? t : null; };
                AttributeTargets.IsValueType = true;
                AttributeTargets.IsPrimitive = false;
                AttributeTargets.IsInterface = false;
                AttributeTargets.IsGenericTypeDefinition = false;
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
                Nullable_1.CustomAttributes = [ [ ((asm0)["System.Diagnostics.DebuggerStepThroughAttribute"])(),asm0.x6000111,[  ],{
                    
                } ] ];
                Nullable_1.BaseType = ((asm0)["System.ValueType"])();
                Nullable_1.FullName = "System.Nullable`1";
                Nullable_1.Assembly = asm;
                Nullable_1.Interfaces = [  ];
                Nullable_1.IsInst = function (t) { return t instanceof Nullable_1 ? t : null; };
                Nullable_1.IsValueType = true;
                Nullable_1.IsPrimitive = false;
                Nullable_1.IsInterface = false;
                Nullable_1.IsGenericTypeDefinition = true;
                Nullable_1.IsNullable = true;
                Nullable_1.ArrayType = Array;
                Nullable_1.GenericArguments = [ T ];
                Nullable_1.prototype.value = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                Nullable_1.prototype.has_value = false;
                Nullable_1.prototype.vtable = {
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000116;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000118;
                    },
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600011b;
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
                SerializableAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (4124|0) ],{
                    'Inherited': [ ((asm0)["System.Boolean"])(),false ]
                } ] ];
                SerializableAttribute.BaseType = ((asm0)["System.Attribute"])();
                SerializableAttribute.FullName = "System.SerializableAttribute";
                SerializableAttribute.Assembly = asm;
                SerializableAttribute.Interfaces = [  ];
                SerializableAttribute.IsInst = function (t) { return t instanceof SerializableAttribute ? t : null; };
                SerializableAttribute.IsValueType = false;
                SerializableAttribute.IsPrimitive = false;
                SerializableAttribute.IsInterface = false;
                SerializableAttribute.IsGenericTypeDefinition = false;
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
                $$String.CustomAttributes = [ [ ((asm0)["System.Reflection.DefaultMemberAttribute"])(),asm0.x600013a,[ new_string("Chars") ],{
                    
                } ] ];
                $$String.BaseType = ((asm0)["System.Object"])();
                $$String.FullName = "System.String";
                $$String.Assembly = asm;
                $$String.Interfaces = [  ];
                $$String.IsInst = function (t) { return t instanceof $$String ? t : null; };
                $$String.IsValueType = false;
                $$String.IsPrimitive = false;
                $$String.IsInterface = false;
                $$String.IsGenericTypeDefinition = false;
                $$String.IsNullable = false;
                $$String.ArrayType = Array;
                (asm0.x6000139)();
                $$String.prototype.jsstr = null;
                $$String.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x6000131;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000135;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x6000137;
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
                DefaultMemberAttribute.CustomAttributes = [ [ ((asm0)["System.AttributeUsageAttribute"])(),asm0.x600002f,[ (1036|0) ],{
                    
                } ] ];
                DefaultMemberAttribute.BaseType = ((asm0)["System.Attribute"])();
                DefaultMemberAttribute.FullName = "System.Reflection.DefaultMemberAttribute";
                DefaultMemberAttribute.Assembly = asm;
                DefaultMemberAttribute.Interfaces = [  ];
                DefaultMemberAttribute.IsInst = function (t) { return t instanceof DefaultMemberAttribute ? t : null; };
                DefaultMemberAttribute.IsValueType = false;
                DefaultMemberAttribute.IsPrimitive = false;
                DefaultMemberAttribute.IsInterface = false;
                DefaultMemberAttribute.IsGenericTypeDefinition = false;
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
                UInt16.BaseType = ((asm0)["System.ValueType"])();
                UInt16.FullName = "System.UInt16";
                UInt16.Assembly = asm;
                UInt16.Interfaces = [  ];
                UInt16.IsInst = function (t) { return typeof t == 'number'; };
                UInt16.IsValueType = true;
                UInt16.IsPrimitive = true;
                UInt16.IsInterface = false;
                UInt16.IsGenericTypeDefinition = false;
                UInt16.IsNullable = false;
                UInt16.ArrayType = Uint16Array;
                UInt16.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600013d;
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
                UInt32.BaseType = ((asm0)["System.ValueType"])();
                UInt32.FullName = "System.UInt32";
                UInt32.Assembly = asm;
                UInt32.Interfaces = [  ];
                UInt32.IsInst = function (t) { return typeof t == 'number'; };
                UInt32.IsValueType = true;
                UInt32.IsPrimitive = true;
                UInt32.IsInterface = false;
                UInt32.IsGenericTypeDefinition = false;
                UInt32.IsNullable = false;
                UInt32.ArrayType = Uint32Array;
                UInt32.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600013e;
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
                UInt64.BaseType = ((asm0)["System.ValueType"])();
                UInt64.FullName = "System.UInt64";
                UInt64.Assembly = asm;
                UInt64.Interfaces = [  ];
                UInt64.IsInst = function (t) { return typeof t == 'number'; };
                UInt64.IsValueType = true;
                UInt64.IsPrimitive = true;
                UInt64.IsInterface = false;
                UInt64.IsGenericTypeDefinition = false;
                UInt64.IsNullable = false;
                UInt64.ArrayType = Array;
                UInt64.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600013f;
                    },
                    'asm0.x6000009': function ()
                    {
                        return asm0.x6000149;
                    },
                    'asm0.x6000006': function ()
                    {
                        return asm0.x600014a;
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
                UIntPtr.BaseType = ((asm0)["System.ValueType"])();
                UIntPtr.FullName = "System.UIntPtr";
                UIntPtr.Assembly = asm;
                UIntPtr.Interfaces = [  ];
                UIntPtr.IsInst = function (t) { return typeof t == 'number'; };
                UIntPtr.IsValueType = true;
                UIntPtr.IsPrimitive = true;
                UIntPtr.IsInterface = false;
                UIntPtr.IsGenericTypeDefinition = false;
                UIntPtr.IsNullable = false;
                UIntPtr.ArrayType = Array;
                UIntPtr.prototype.vtable = {
                    'asm0.x6000005': function ()
                    {
                        return asm0.x600014c;
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
                Void.BaseType = ((asm0)["System.ValueType"])();
                Void.FullName = "System.Void";
                Void.Assembly = asm;
                Void.Interfaces = [  ];
                Void.IsInst = function (t) { return t instanceof Void ? t : null; };
                Void.IsValueType = true;
                Void.IsPrimitive = false;
                Void.IsInterface = false;
                Void.IsGenericTypeDefinition = false;
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
    (asm)["System.Array+<>c__DisplayClass1`1"] = (function ()
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
            function __c__DisplayClass1_1()
            {
                (__c__DisplayClass1_1.init)();
                this.constructor = __c__DisplayClass1_1;
            };
            c = __c__DisplayClass1_1;
            tree_set([ T ],ct,c);
            __c__DisplayClass1_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __c__DisplayClass1_1.CustomAttributes = [  ];
                __c__DisplayClass1_1.BaseType = ((asm0)["System.Object"])();
                __c__DisplayClass1_1.FullName = "System.Array+<>c__DisplayClass1`1";
                __c__DisplayClass1_1.Assembly = asm;
                __c__DisplayClass1_1.Interfaces = [  ];
                __c__DisplayClass1_1.IsInst = function (t) { return t instanceof __c__DisplayClass1_1 ? t : null; };
                __c__DisplayClass1_1.IsValueType = false;
                __c__DisplayClass1_1.IsPrimitive = false;
                __c__DisplayClass1_1.IsInterface = false;
                __c__DisplayClass1_1.IsGenericTypeDefinition = true;
                __c__DisplayClass1_1.IsNullable = false;
                __c__DisplayClass1_1.ArrayType = Array;
                __c__DisplayClass1_1.GenericArguments = [ T ];
                __c__DisplayClass1_1.prototype.item = ((T.IsValueType) ? (((T.IsPrimitive) ? (0) : (new T()))) : (null));
                __c__DisplayClass1_1.prototype.vtable = {
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
            __c__DisplayClass1_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
    (asm)["System.Array+<>c__DisplayClass4`1"] = (function ()
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
            function __c__DisplayClass4_1()
            {
                (__c__DisplayClass4_1.init)();
                this.constructor = __c__DisplayClass4_1;
            };
            c = __c__DisplayClass4_1;
            tree_set([ T ],ct,c);
            __c__DisplayClass4_1.init = function ()
            {
                
                if (initialized){
                    return;
                }
                initialized = true;
                __c__DisplayClass4_1.CustomAttributes = [  ];
                __c__DisplayClass4_1.BaseType = ((asm0)["System.Object"])();
                __c__DisplayClass4_1.FullName = "System.Array+<>c__DisplayClass4`1";
                __c__DisplayClass4_1.Assembly = asm;
                __c__DisplayClass4_1.Interfaces = [  ];
                __c__DisplayClass4_1.IsInst = function (t) { return t instanceof __c__DisplayClass4_1 ? t : null; };
                __c__DisplayClass4_1.IsValueType = false;
                __c__DisplayClass4_1.IsPrimitive = false;
                __c__DisplayClass4_1.IsInterface = false;
                __c__DisplayClass4_1.IsGenericTypeDefinition = true;
                __c__DisplayClass4_1.IsNullable = false;
                __c__DisplayClass4_1.ArrayType = Array;
                __c__DisplayClass4_1.GenericArguments = [ T ];
                __c__DisplayClass4_1.prototype.comparer = null;
                __c__DisplayClass4_1.prototype.vtable = {
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
            __c__DisplayClass4_1.prototype = new (((asm0)["System.Object"])())();
            return c;
        };
    })();
})(asm0 || (asm0 = {}));
var asm1; (function (asm)
{
    asm.FullName = "Negate.cs.brl, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null";
    
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
    asm.x600000c = function Main()
    {
        /* IL_00: ldc.i4.s 123*/
        /* IL_02: call Void Neg(System.Int32)*/
        (asm1.x600000d)((123|0));
        /* IL_07: ldc.i4.s 133*/
        /* IL_09: call Void Neg(System.Int32)*/
        (asm1.x600000d)((-123|0));
        /* IL_0E: ldc.i4 444123*/
        /* IL_13: call Void Neg(System.Int32)*/
        (asm1.x600000d)((444123|0));
        /* IL_18: ldc.i4 -518495*/
        /* IL_1D: call Void Neg(System.Int32)*/
        (asm1.x600000d)((-518495|0));
        /* IL_22: ldc.r8 123*/
        /* IL_2B: call Void Neg(System.Double)*/
        (asm1.x600000e)((+123));
        /* IL_30: ldc.r8 -123*/
        /* IL_39: call Void Neg(System.Double)*/
        (asm1.x600000e)((+-123));
        /* IL_3E: ldc.r8 444123*/
        /* IL_47: call Void Neg(System.Double)*/
        (asm1.x600000e)((+444123));
        /* IL_4C: ldc.r8 -518495*/
        /* IL_55: call Void Neg(System.Double)*/
        (asm1.x600000e)((+-518495));
        /* IL_5A: ret */
        return ;
    };;
    asm.x600000d_init = function ()
    {
        (((asm0)["System.Int32"])().init)();
        asm.x600000d = asm.x600000d_;
    };;
    asm.x600000d = function (arg0)
    {
        (asm.x600000d_init.apply)(this,arguments);
        return (asm.x600000d.apply)(this,arguments);
    };;
    asm.x600000d_ = function Neg(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Int32"])();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Int32*/
        /* IL_07: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (-(arg0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_0C: ret */
        return ;
    };
    asm.x600000e_init = function ()
    {
        (((asm0)["System.Double"])().init)();
        asm.x600000e = asm.x600000e_;
    };;
    asm.x600000e = function (arg0)
    {
        (asm.x600000e_init.apply)(this,arguments);
        return (asm.x600000e.apply)(this,arguments);
    };;
    asm.x600000e_ = function Neg(arg0)
    {
        var t0;
        t0 = ((asm0)["System.Double"])();
        /* IL_00: ldarg.0 */
        /* IL_01: neg */
        /* IL_02: box System.Double*/
        /* IL_07: call Void Log(System.Object)*/
        (asm1.x6000001)({
            'boxed': (-(arg0)),
            'type': t0,
            'vtable': t0.prototype.vtable
        });
        /* IL_0C: ret */
        return ;
    };
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
                TestLog.CustomAttributes = [  ];
                TestLog.BaseType = ((asm0)["System.Object"])();
                TestLog.FullName = "TestLog";
                TestLog.Assembly = asm;
                TestLog.Interfaces = [  ];
                TestLog.IsInst = function (t) { return t instanceof TestLog ? t : null; };
                TestLog.IsValueType = false;
                TestLog.IsPrimitive = false;
                TestLog.IsInterface = false;
                TestLog.IsGenericTypeDefinition = false;
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
                TestHelper.BaseType = ((asm0)["System.Object"])();
                TestHelper.FullName = "TestHelper";
                TestHelper.Assembly = asm;
                TestHelper.Interfaces = [  ];
                TestHelper.IsInst = function (t) { return t instanceof TestHelper ? t : null; };
                TestHelper.IsValueType = false;
                TestHelper.IsPrimitive = false;
                TestHelper.IsInterface = false;
                TestHelper.IsGenericTypeDefinition = false;
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
                Program.BaseType = ((asm0)["System.Object"])();
                Program.FullName = "Program";
                Program.Assembly = asm;
                Program.Interfaces = [  ];
                Program.IsInst = function (t) { return t instanceof Program ? t : null; };
                Program.IsValueType = false;
                Program.IsPrimitive = false;
                Program.IsInterface = false;
                Program.IsGenericTypeDefinition = false;
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
