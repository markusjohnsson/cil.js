
"use strict";

declare var asm0: any;

type CilJsType = Function & {
    new(): CilJsInstance;
    FullName: string;
    Assembly: any;
    IsValueType: boolean;
    IsPrimitive: boolean;
    IsInterface: boolean;
    IsGenericTypeDefinition: boolean;
    IsNullable: boolean;
    Is64BitPrimitive?: boolean;

    CustomAttributes: any;
    Methods: any;
    BaseType: CilJsType;
    IsInst: (v: any) => boolean;
    ArrayType: any;
    MetadataName: string;

    Interfaces: CilJsType[];
    GenericArguments: any;

    Default: any;
}

type CilJsMethodMap = {
    [m: string]: () => Function;
}

type CilJsLong = Uint32Array;

type CilJsString = {
    jsstr: string;
}

type CilJsArray = {
    jsarr: any[];
    etype: CilJsType;
};

type CilJsInstance = {
    constructor: CilJsType;
    vtable: any; // CilJsMethodMap
    ifacemap: any; // Tree<CilJsMethodMap>
    [s: string]: CilJsValue | CilJsInstance;
};

type CilJsValue = number | Function | CilJsInstance;

type CilJsNullableValue = {
    has_value: boolean;
    value: CilJsValue;
} & CilJsInstance;

type CilJsDelegate = {
    _methodPtr: Function;
    _target: CilJsValue;
};

type CilJsPointer = {
    w: (v: CilJsValue) => void;
    r: () => CilJsValue;
};

type CilJsBox = {
    boxed: CilJsValue;
    type: CilJsType;
    vtable: CilJsInstance["vtable"];
    ifacemap: CilJsInstance["ifacemap"];
};

type CilJsAsyncResult = {
    asyncState: CilJsValue;
    result: CilJsValue;
};

function isBoxed(o: any): o is CilJsBox {
    return "boxed" in o;
}

function isPointer(p: any): p is CilJsPointer {
    return typeof p.r === "function" &&
        typeof p.w === "function";
}

namespace CILJS {

    export function nop() { };

    export let next_hash = 1;

    export function entry_point() {
        var a = 0;
        var result = null;
        while ((window as any)["asm" + a]) {
            if (typeof (window as any)["asm" + a].entryPoint == 'function') {
                result = (window as any)["asm" + a].entryPoint;
            }

            a++;
        }

        if (result != null)
            return result.apply(null, arguments);
    }

    export function declare_type(name: string, genericArgs: string[], baseType: CilJsType, init: Function, ctortext: string) {
        const isGeneric = genericArgs && genericArgs.length > 0;

        const ctor = ctortext; //"function " + name + "() { c.init(); }";

        if (isGeneric) {
            const cacheTree = {};
            const gA = genericArgs.join(",");
            const gAmD = genericArgs.map(function (a) { return a + ".GenericTypeMetadataName"; }).join(",");
            const s = /* js */`
                return function t(${gA}) {
                    var cachedType = ciljs.tree_get([${gAmD}], cacheTree);
                    if (cachedType) {
                        return cachedType
                    };

                    cachedType = new Function('${genericArgs}', 'var c = ${ctor}; return c;')(${gA});
                    ciljs.tree_set([${gAmD}], cacheTree, cachedType);

                    cachedType.init = init.bind(cachedType, ${gA});
                    var baseCtor = baseType(${gA});
                    cachedType.prototype = (typeof baseCtor === 'function') ? (new baseCtor()) : baseCtor;
                    cachedType.prototype.constructor = cachedType;
                    return cachedType;
                }
            `;

            const t = new Function("ciljs", "cacheTree", "baseType", "init", s)
                (CILJS, cacheTree, baseType, init);

            return t;
        }
        else {

            let cacheTree: any = null;
            const s = /* js */`
                return function t() {
                    var cachedType = cacheTree;
                    if (cachedType) {
                        return cachedType;
                    }

                    cachedType = new Function('var c = ${ctor}; return c;')();
                    cacheTree = cachedType;

                    cachedType.init = init.bind(cachedType);
                    var baseCtor = baseType();
                    cachedType.prototype = (typeof baseCtor === 'function') ? (new baseCtor()) : baseCtor;
                    cachedType.prototype.constructor = cachedType;
                    return cachedType;
                }
            `;

            const t = new Function("ciljs", "cacheTree", "baseType", "init", s)
                (CILJS, cacheTree, baseType, init);

            return t;
        }
    }

    export function init_base_types() {
        asm0['System.Object']().init();
        asm0['System.ValueType']().init();
        asm0['System.Array']().init();
        asm0['System.String']().init();
        asm0['System.Delegate']().init();
        asm0['System.Exception']().init();
        asm0['System.Enum']().init();
        asm0['System.Type']().init();
        asm0['System.Boolean']().init();
        asm0['System.Char']().init();
        asm0['System.Byte']().init();
        asm0['System.SByte']().init();
        asm0['System.Int16']().init();
        asm0['System.UInt16']().init();
        asm0['System.Int32']().init();
        asm0['System.UInt32']().init();
        asm0['System.Int64']().init();
        asm0['System.UInt64']().init();
        asm0['System.Single']().init();
        asm0['System.Double']().init();
    }

    export function init_type(
        type: CilJsType, assembly: any, fullname: string, isValueType: boolean, isPrimitive: boolean, isInterface: boolean, isGenericTypeDefinition: boolean, isNullable: boolean, customAttributes: any, methods: any, baseType: CilJsType, isInst: (v: any) => boolean, arrayType: any, metadataName: string, defaultValue: any) {
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

        type.Interfaces = [];
        type.GenericArguments = {};
        type.prototype.vtable = {};
        type.prototype.ifacemap = {};

        type.Default = defaultValue;
    }

    function make_trampoline(map: CilJsMethodMap, slot: string, target: string): () => Function {
        return new Function('map', 'slot',
            /* js */ `
                return function (...args) {
                    if (${target}_init) {
                        ${target}_init(...args);
                    }
                    map[slot] = ${target};
                    return ${target}(...args);
                }
            `)(map, slot);
    }

    export function implement_interface(type: CilJsType, iface: CilJsType[], implementation: [string, string][]) {
        type.Interfaces.push(iface[0]);
        if (implementation !== null) {
            const map: CilJsMethodMap = {};
            implementation.forEach(
                curr => {
                    const target = curr[1];
                    const slot = curr[0];
                    map[slot] = make_trampoline(map, slot, target)
                });
            tree_set(iface, type.prototype.ifacemap, map);
        }
    }

    export function declare_virtual(type: CilJsType, slot: string, target: string) {
        type.prototype.vtable[slot] = make_trampoline(type.prototype.vtable, slot, target)
    }

    export function is_inst_interface(interfaceType: CilJsType) {
        return function (t: any) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) !== -1 ? t : null; } catch (e) { return null; } };
    }

    export function is_inst_primitive(primitiveType: CilJsType) {
        return function (t: any) { try { return t.type === primitiveType ? t : null; } catch (e) { return null; } }
    }

    export function is_inst_array(T: CilJsType) {
        return function (t: any) { return t instanceof asm0['System.Array']() && (t.etype === T || T === asm0['System.Object']() || t.etype.prototype instanceof T) ? t : null; };
    }

    export function is_inst_default(type: CilJsType) {
        return function (t: any) { return t instanceof type ? t : null; };
    }

    export function is_inst_value_type(type: CilJsType) {
        return function (t: any) { return (t != null && t.boxed instanceof type) ? t : t instanceof type ? t : null; };
    }

    export function is_inst_delegate(delegateType: CilJsType) {
        return function (t: CilJsDelegate) { return (t && typeof t._methodPtr === 'function') ? t : null; };
    }

    export function clone_value(v: CilJsValue | CilJsInstance) {
        if (v === null) return v;
        if (typeof v === "number") return v;
        if (typeof v === "function") return v;
        if (!v.constructor.IsValueType) return v;
        var result: any = new v.constructor();
        for (var p in v) {
            if (v.hasOwnProperty(p))
                result[p] = clone_value(v[p]);
        }
        return result;
    }

    export function value_equals(a: CilJsValue, b: CilJsValue) {

        if (typeof a !== typeof b)
            return 0;

        if (a === null)
            return b === null ? 1 : 0;

        if (typeof a === "object" && typeof a.constructor !== "undefined" && a.constructor.IsValueType) {
            if (typeof b === "object" && typeof b.constructor !== "undefined" && b.constructor.IsValueType) {

                for (let p in a) {
                    let av = a[p];
                    let bv = b[p];

                    if (!value_equals(av, bv))
                        return 0;
                }

                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            return a === b ? 1 : 0;
        }
    }

    export function unsigned_value(a: number) {
        if (a < 0)
            return 0xffffffff + a + 1;
        else
            return a;
    }

    function isNullable(v: unknown, t: CilJsType): v is CilJsNullableValue {
        return t.IsNullable;
    }

    function isReference(v: unknown, t: CilJsType): v is CilJsInstance {
        return !t.IsValueType;
    }

    export function box(v: CilJsValue | CilJsNullableValue | CilJsInstance, type: CilJsType): CilJsBox | CilJsInstance | null {
        if (v === null)
            return v;

        if (isNullable(v, type)) {
            const nv = v as CilJsNullableValue;
            if (nv.has_value)
                return box(nv.value, type.GenericArguments[type.MetadataName][0]);
            else
                return null;
        }

        if (isReference(v, type))
            return v;

        if (!type.IsPrimitive)
            v = clone_value(v) as CilJsInstance;

        return make_box(v, type);
    }

    export function make_box(v: CilJsValue, type: CilJsType): CilJsBox {
        return {
            boxed: v,
            type: type,
            vtable: type.prototype.vtable,
            ifacemap: type.prototype.ifacemap
        };
    }

    // perhaps unused
    export function unbox(o: CilJsBox, type: CilJsType) {
        if (o === null) {
            var t = asm0['System.InvalidCastException']();
            var e = new t();
            e.stack = new Error().stack;
            throw e;
        }
        return cast_class(o.boxed, type);
    }

    export function unbox_any(o: CilJsBox, type: CilJsType) {
        if (type.IsNullable) {
            let result = new type() as CilJsNullableValue;
            if (o !== null) {
                result.value = cast_class(o.boxed, type.GenericArguments[type.MetadataName][0]) as CilJsValue;
                result.has_value = true;
            }
            return result;
        }

        if (type.IsValueType) {

            if (o === null) {
                var t = asm0['System.InvalidCastException']();
                throw new t();
            }

            return cast_class(o.boxed, type);
        }
        else {
            return cast_class(o as any, type);
        }
    }

    export function stelem_ref(array: CilJsArray, index: number, element: CilJsValue) {
        var castedElement = cast_class(element, array.etype);
        array.jsarr[index] = castedElement;
    }

    export function ldelem_ref(array: CilJsArray, index: number) {
        return box(array.jsarr[index], array.etype);
    }


    export function convert_box_to_pointer_as_needed(o: CilJsBox | CilJsPointer): CilJsPointer {
        if (isBoxed(o)) {
            return {
                'r': function () { return o.boxed; },
                'w': function (v) { return o.boxed = v; }
            };
        }
        else {
            return o;
        }
    }

    export function dereference_pointer_as_needed(p: CilJsPointer | CilJsValue) {
        if (isPointer(p)) {
            var v = p.r();
            if (typeof v !== 'number' && !(v.constructor as CilJsType).IsValueType) {
                return v;
            }
        }

        return p;
    }

    export function tree_get(a: any[], s: any) {
        var c = s;
        for (var i = 0; c && i < a.length; i++)
            c = c[a[i]];
        return c;
    }

    export function tree_set(a: any[], s: any, v: any) {
        if (a.length === 1) {
            s[a[0]] = v;
        }
        else {
            var c = s[a[0]];
            if (!c) s[a[0]] = c = {};
            tree_set(a.slice(1), c, v);
        }
    }

    export function new_string(jsstr: string) {
        var r = new (asm0['System.String']())();
        r.jsstr = jsstr;
        return r;
    }

    export function new_handle(type: CilJsType, value: any) {
        var r = new type();
        r.value = value;
        return r;
    }

    export function new_array(type: CilJsType, length: number): CilJsArray {
        var ctor = type.ArrayType || Array;
        var r = new (asm0['System.Array`1'](type))();
        r.etype = type;
        r.jsarr = new ctor(length);
        var i;
        if (type.IsValueType === false) {
            for (i = 0; i < length; i++)
                r.jsarr[i] = null;
        }
        else if (type.IsPrimitive === false) {
            for (i = 0; i < length; i++)
                r.jsarr[i] = new type();
        }
        else if (type.FullName === "System.Int64" || type.FullName === "System.UInt64") {
            for (i = 0; i < length; i++)
                r.jsarr[i] = [0, 0];
        }
        else {
            for (i = 0; i < length; i++)
                r.jsarr[i] = 0;
        }
        return r;
    }

    export function newobj(type: CilJsType, ctor: Function, args: any[]): CilJsValue {
        let result: CilJsValue = new type();

        if (type.IsValueType)
            args[0] = {
                w: function (a) { result = a; },
                r: function () { return result; }
            } as CilJsPointer;
        else
            args[0] = result;

        ctor.apply(null, args);

        return result;
    }

    export function cast_class(obj: CilJsValue, type: CilJsType) {
        if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
            return obj;
        }
        else if (type.IsPrimitive) {
            if (typeof obj === 'undefined' || obj === null) {
            }
            else if (typeof obj === 'number') {
                return obj;
            }
            else if (typeof obj.length === 'number' && obj.length === 2) {
                return obj; /* this is for (u)int64 */
            }
        }
        else if (
            (type === asm0['System.Object']() || type === asm0['System.ValueType']()) &&
            isBoxed(obj)) {
            return obj;
        }

        throw_invalid_cast();
    }

    function throw_invalid_cast(): never {
        var t = asm0['System.InvalidCastException']();
        var e = new t();
        e.stack = new Error().stack;
        throw e;
    }

    export function conv_u8(n: number) {
        if (n < 0) {
            /* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */
            n = 0x100000000 + n;
        }

        return make_uint64(n);
    }

    export function conv_i8(n: number) {
        if (n < 0) {
            /* signed 32 bit int */
            n = 0x100000000 + n;

            /* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */
            return new Uint32Array([n | 0, 0xffffffff]);
        }

        return make_uint64(n);
    }

    export function make_uint64(n: number): CilJsLong {
        var bits32 = 0xffffffff;

        var floorN = Math.floor(n);
        var low = floorN | 0;
        var high = (floorN / 0x100000000) | 0;

        low = low & bits32;
        high = high & bits32;

        return new Uint32Array([low, high]);
    }

    export function to_number_signed(n: CilJsLong) {
        if (asm0.Int64_isNegative(n)) {
            n = asm0.Int64_UnaryNegation(n);
            return -to_number_unsigned(n);
        }

        return to_number_unsigned(n);
    }

    export function to_number_unsigned(n: CilJsLong) {
        return n[1] * 4294967296 + n[0];
    }

    export function array_set_value(dest: CilJsArray, value: CilJsValue | CilJsBox, pos: number) {

        // value is either an object or a boxed value type.
        var etype = dest.etype;
        var vtype = value != null ? isBoxed(value) ? value.type : value.constructor as CilJsType : null;

        if (dest.etype.IsNullable) {
            throw "not implemented";
        }

        if (vtype == null) {

            // Null is the universal zero...

            if (!etype.IsValueType)
                dest.jsarr[pos] = null; // reference type
            else if (etype.Is64BitPrimitive)
                dest.jsarr[pos] = [0, 0];
            else if (etype.IsPrimitive)
                dest.jsarr[pos] = 0
            else // value type
                dest.jsarr[pos] = new etype();
        }
        else if (etype == asm0['System.Object']()) {

            // Everything is compatible with Object

            dest.jsarr[pos] = value;
        }
        else if (!etype.IsValueType) {
            dest.jsarr[pos] = cast_class(value as CilJsValue, etype)
        }
        else {

            if (etype.IsInst(value)) {
                dest.jsarr[pos] = (value as CilJsBox).boxed;
            }
            else {
                if (!etype.IsPrimitive || !vtype.IsPrimitive) {
                    throw_invalid_cast();
                }

                dest.jsarr[pos] = value;
            }
        }
    }

    export function delegate_invoke(self: CilJsDelegate, ..._: any[]) {
        var m = self._methodPtr;
        var t = self._target;

        var args = new Array(arguments.length);

        for (var i = 0; i < arguments.length; i++)
            args[i] = arguments[i];

        if (t != null)
            args[0] = t;
        else
            args = Array.prototype.slice.call(args, 1);

        return m.apply(null, args);
    }

    export function delegate_begin_invoke(self: CilJsDelegate /* , [delegate arguments], callback, state */) {
        var asyncResult = asm0.CreateAsyncResult(self) as CilJsAsyncResult;

        asyncResult.result = delegate_invoke.apply(null, arguments as any);
        asyncResult.asyncState = arguments[arguments.length - 1];

        var asyncCallback = arguments[arguments.length - 2];
        if (asyncCallback != null) {
            delegate_invoke(asyncCallback, asyncResult);
        }

        return asyncResult;
    }

    export function delegate_end_invoke(self: CilJsDelegate, asyncResult: CilJsAsyncResult) {
        return asyncResult.result;
    }

    export function delegate_ctor(self: CilJsDelegate, target: CilJsValue, methodPtr: Function) {
        self._methodPtr = methodPtr;
        self._target = target;
    }

    export let console_write_line = function console_write_line(managedStr: CilJsString) {
        console.log(managedStr.jsstr);
    }

    export function set_console_writer(f: (s: CilJsString) => void) {
        console_write_line = f;
    }

}

declare var module: any;
if (module) {
    module.exports = CILJS;
}