
"use strict";

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
    GenericArguments: Dict<CilJsType[]>;
    TypeMetadataName: string;

    Default: any;

    init: Function;
}

type Dict<T> = {
    [m: string]: T;
}

type CilJsMethodMap = Dict<() => Function>;

type CilJsLong = Uint32Array;

type CilJsString = {
    jsstr: string;
}

type CilJsArray = {
    jsarr: any[];
    etype: CilJsType;
};

type Tree<T> = any;

type CilJsInstance = {
    constructor: CilJsType;
    vtable: CilJsMethodMap
    ifacemap: Tree<CilJsMethodMap>
} & {
    [s: string]: CilJsValue;
};

type CilJsValue = number | CilJsLong | Function | CilJsInstance;

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

type CilJsBox<V extends CilJsValue = CilJsValue> = {
    boxed: V;
    type: CilJsType;
    vtable: CilJsInstance["vtable"];
    ifacemap: CilJsInstance["ifacemap"];
};

type CilJsAsyncResult = {
    asyncState: CilJsValue;
    result: CilJsValue;
};

type CilJsAssembly = {
    entryPoint?: Function;
} & {
    [s: string]: any;
};

function isBoxed(o: any): o is CilJsBox {
    return "boxed" in o;
}

function isPointer(p: any): p is CilJsPointer {
    return typeof p.r === "function" &&
        typeof p.w === "function";
}

function isInt64(obj: any): obj is CilJsLong {
    return 'length' in obj && typeof obj.length === 'number' && obj.length === 2;
}

export function nop() { };

export let next_hash = 1;

let asm0: CilJsAssembly;
const assemblies: { [name: string]: CilJsAssembly; } = {};

export function entryPoint() {
    let result = null;

    for (let asmName in assemblies) {
        const asm = assemblies[asmName];
        if (typeof asm.entryPoint == 'function') {
            result = asm.entryPoint;
        }
    }

    if (result != null)
        return result.apply(null, arguments);
}

export function declareAssembly(name: string, asm: CilJsAssembly) {
    if (name == "mscorlib")
        asm0 = asm;
    assemblies[name] = asm;
}

export function findAssembly(name: string) {
    return assemblies[name];
}

type CilJsTypeAccessor = (...typeargs: CilJsType[]) => CilJsType;
type CilJsValueBaseTypeAccessor = (...typeargs: CilJsType[]) => {};

type CilJsTypeInitializer = (type: CilJsType, ...typeargs: CilJsType[]) => void;

export function declareType(
    genericArgs: string[], baseType: CilJsTypeAccessor | CilJsValueBaseTypeAccessor, init: CilJsTypeInitializer, createType: CilJsTypeAccessor): CilJsTypeAccessor {

    const isGeneric = genericArgs && genericArgs.length > 0;
    function isClassType(t: CilJsType | {}): t is CilJsType {
        return typeof t === 'function';
    }

    if (isGeneric) {
        const cacheTree = {};
        return function t(...ga: CilJsType[]) {
            const key = ga.map(t => t.TypeMetadataName);
            let cachedType = treeGet<CilJsType>(key, cacheTree);
            if (cachedType) {
                return cachedType
            }
            cachedType = createType(...ga);
            treeSet(key, cacheTree, cachedType);
            cachedType.init = () => init(cachedType, ...ga);
            const baseCtor = baseType(...ga);
            cachedType.prototype = isClassType(baseCtor) ? (new baseCtor()) : baseCtor;
            cachedType.prototype.constructor = cachedType;
            return cachedType;
        }
    }
    else {
        let cachedType: CilJsType | null = null;
        return function t() {
            if (cachedType) {
                return cachedType;
            }
            cachedType = createType();
            cachedType.init = () => init(cachedType!);
            const baseCtor = baseType();
            cachedType.prototype = isClassType(baseCtor) ? (new baseCtor()) : baseCtor;
            cachedType.prototype.constructor = cachedType;
            return cachedType;
        }
    }
}

export function initBaseTypes() {
    const asm = findAssembly("mscorlib") as any;
    asm['System.Object']().init();
    asm['System.ValueType']().init();
    asm['System.Array']().init();
    asm['System.String']().init();
    asm['System.Delegate']().init();
    asm['System.Exception']().init();
    asm['System.Enum']().init();
    asm['System.Type']().init();
    asm['System.Boolean']().init();
    asm['System.Char']().init();
    asm['System.Byte']().init();
    asm['System.SByte']().init();
    asm['System.Int16']().init();
    asm['System.UInt16']().init();
    asm['System.Int32']().init();
    asm['System.UInt32']().init();
    asm['System.Int64']().init();
    asm['System.UInt64']().init();
    asm['System.Single']().init();
    asm['System.Double']().init();
}

export function initType(
    type: CilJsType,
    assembly: any,
    fullname: string,
    isValueType: boolean,
    isPrimitive: boolean,
    isInterface: boolean,
    isGenericTypeDefinition: boolean,
    isNullable: boolean,
    customAttributes: any,
    methods: any,
    baseType: CilJsType,
    isInst: (v: any) => boolean,
    arrayType: any,
    metadataName: string,
    defaultValue: any) {

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

function makeTrampoline(map: CilJsMethodMap, slot: string, assembly: CilJsAssembly, target: string): () => Function {
    return function (...args) {
        if (assembly[target + '_init']) {
            assembly[target + '_init'](...args);
        }
        map[slot] = assembly[target];
        return assembly[target](...args);
    }
}

export function implementInterface(type: CilJsType, iface: CilJsType[], implementation: [string, CilJsAssembly, string][]) {
    type.Interfaces.push(iface[0]);
    if (implementation !== null) {
        const map: CilJsMethodMap = {};
        for (const [slot, asm, target] of implementation) {
            map[slot] = makeTrampoline(map, slot, asm, target)
        }
        treeSet(iface, type.prototype.ifacemap, map);
    }
}

export function declareVirtual(type: CilJsType, slot: string, assembly: CilJsAssembly, target: string) {
    type.prototype.vtable[slot] = makeTrampoline(type.prototype.vtable, slot, assembly, target)
}

export function isInstInterface(interfaceType: CilJsType) {
    return function (t: any) { try { return (t.type || t.constructor).Interfaces.indexOf(interfaceType) !== -1 ? t : null; } catch (e) { return null; } };
}

export function isInstPrimitive(primitiveType: CilJsType) {
    return function (t: any) { try { return t.type === primitiveType ? t : null; } catch (e) { return null; } }
}

export function isInstArray(T: CilJsType) {
    return function (t: any) { return t instanceof asm0['System.Array']() && (t.etype === T || T === asm0['System.Object']() || t.etype.prototype instanceof T) ? t : null; };
}

export function isInstDefault(type: CilJsType) {
    return function (t: any) { return t instanceof type ? t : null; };
}

export function isInstValueType(type: CilJsType) {
    return function (t: any) { return (t != null && t.boxed instanceof type) ? t : t instanceof type ? t : null; };
}

export function isInstDelegate(delegateType: CilJsType) {
    return function (t: CilJsDelegate) { return (t && typeof t._methodPtr === 'function') ? t : null; };
}

export function cloneValue(v: CilJsValue) {
    if (v === null) return v;
    if (typeof v === "number") return v;
    if (typeof v === "function") return v;
    if (v instanceof Uint32Array) return v;
    if (!v.constructor.IsValueType) return v;
    const result: any = new v.constructor();
    for (let p in v) {
        if (v.hasOwnProperty(p))
            result[p] = cloneValue(v[p]);
    }
    return result;
}

export function valueEquals(a: CilJsValue, b: CilJsValue) {

    if (a === b)
        return 1;

    if (typeof a !== typeof b)
        return 0;

    if (a === null)
        return b === null ? 1 : 0;

    // TODO: Remove, since this function is not actually used for int64
    if (a instanceof Uint32Array) {
        if (!(b instanceof Uint32Array))
            return 0;
        else
            return (a[0] == b[0] && a[1] == b[1]) ? 1 : 0;
    }

    if (b instanceof Uint32Array)
        return 0;

    if (typeof a === "object" && a && typeof a.constructor !== "undefined") {
        if (a.constructor.IsValueType) {
            if (typeof b === "object" && typeof b.constructor !== "undefined" && b.constructor.IsValueType) {

                for (let p in a) {
                    let av = a[p];
                    let bv = b[p];

                    if (!valueEquals(av, bv))
                        return 0;
                }

                return 1;
            }
            else {
                return 0;
            }
        }
        else {
            // a is reference type
            if (typeof b === "object" && b && typeof b.constructor !== "undefined" && b.constructor.IsValueType == false) {
                // both are reference types
                return asm0.Equals(a, b);
            }
            else {
                return 0;
            }
        }
    }

    // primitive
    return a === b ? 1 : 0;
}

export function unsignedValue(a: number) {
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
        if (v.has_value)
            return box(v.value, type.GenericArguments[type.MetadataName][0]);
        else
            return null;
    }

    if (isReference(v, type))
        return v;

    if (!type.IsPrimitive)
        v = cloneValue(v) as CilJsInstance;

    return makeBox(v, type);
}

export function makeBox<V extends CilJsValue>(v: V, type: CilJsType): CilJsBox {
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
        const t = asm0['System.InvalidCastException']();
        const e = new t();
        e.stack = new Error().stack;
        throw e;
    }
    return castClass(o.boxed, type);
}

export function unboxAny(o: CilJsBox, type: CilJsType): CilJsValue | null {
    if (type.IsNullable) {
        let result = new type() as CilJsNullableValue;
        if (o !== null) {
            result.value = castClass(o.boxed, type.GenericArguments[type.MetadataName][0]) as CilJsValue;
            result.has_value = true;
        }
        return result;
    }

    if (type.IsValueType) {
        if (o === null) {
            const t = asm0['System.InvalidCastException']();
            throw new t();
        }
        return castClass(o.boxed, type) as CilJsValue;
    }
    else {
        return castClass(o as any, type) as CilJsValue;
    }
}

export function stelemRef(array: CilJsArray, index: number, element: CilJsValue | CilJsBox<CilJsValue> | null) {
    const castedElement = castClass(element, array.etype);
    array.jsarr[index] = castedElement;
}

export function ldelemRef(array: CilJsArray, index: number) {
    return box(array.jsarr[index], array.etype);
}


export function convertBoxToPointerAsNeeded(o: CilJsBox | CilJsPointer): CilJsPointer {
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

export function dereferencePointerAsNeeded(p: CilJsPointer | CilJsValue) {
    if (isPointer(p)) {
        const v = p.r();
        if (typeof v !== 'number' && !(v.constructor as CilJsType).IsValueType) {
            return v;
        }
    }

    return p;
}

export function treeGet<T>(key: string[] | object[], tree: Tree<T>): T {
    let c = tree;
    for (let i = 0; c && i < key.length; i++)
        c = c[String(key[i])];
    return c;
}

export function treeSet<T>(key: string[] | object[], tree: Tree<T>, value: T) {
    if (key.length === 1) {
        tree[String(key[0])] = value;
    }
    else {
        let c = tree[String(key[0])];
        if (!c) tree[String(key[0])] = c = {};
        treeSet(key.slice(1), c, value);
    }
}

export function newString(jsstr: string) {
    const r = new (asm0['System.String']())();
    r.jsstr = jsstr;
    return r;
}

export function newHandle(type: CilJsType, value: any) {
    const r = new type();
    r.value = value;
    return r;
}

export function newArray(type: CilJsType, length: number): CilJsArray {
    const ctor = type.ArrayType || Array;
    const r = new (asm0['System.Array`1'](type))();
    r.etype = type;
    r.jsarr = new ctor(length);
    if (type.IsValueType === false) {
        for (let i = 0; i < length; i++)
            r.jsarr[i] = null;
    }
    else if (type.IsPrimitive === false) {
        for (let i = 0; i < length; i++)
            r.jsarr[i] = new type();
    }
    else if (type.FullName === "System.Int64" || type.FullName === "System.UInt64") {
        for (let i = 0; i < length; i++)
            r.jsarr[i] = [0, 0];
    }
    else {
        for (let i = 0; i < length; i++)
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

export function castClass(obj: CilJsValue | CilJsBox | null, type: CilJsType) {
    if (type.IsInst(obj) || (!type.IsValueType && obj === null)) {
        return obj;
    }
    else if (type.IsPrimitive) {
        if (typeof obj === 'undefined' || obj === null) {
        }
        else if (typeof obj === 'number') {
            return obj;
        }
        else if (isInt64(obj)) {
            return obj;
        }
    }
    else if (
        (type === asm0['System.Object']() || type === asm0['System.ValueType']()) &&
        isBoxed(obj)) {
        return obj;
    }

    throwInvalidCast();
}

function throwInvalidCast(): never {
    const t = asm0['System.InvalidCastException']();
    const e = new t();
    e.stack = new Error().stack;
    throw e;
}

export function convU8(n: number) {
    if (n < 0) {
        /* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */
        n = 0x100000000 + n;
    }

    return makeUint64(n);
}

export function convI8(n: number) {
    if (n < 0) {
        /* signed 32 bit int */
        n = 0x100000000 + n;

        /* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */
        return new Uint32Array([n | 0, 0xffffffff]);
    }

    return makeUint64(n);
}

export function makeUint64(n: number): CilJsLong {
    const bits32 = 0xffffffff;

    const floorN = Math.floor(n);
    let low = floorN | 0;
    let high = (floorN / 0x100000000) | 0;

    low = low & bits32;
    high = high & bits32;

    return new Uint32Array([low, high]);
}

export function toNumberSigned(n: CilJsLong) {
    if (asm0.Int64_isNegative(n)) {
        n = asm0.Int64_UnaryNegation(n);
        return -toNumberUnsigned(n);
    }

    return toNumberUnsigned(n);
}

export function toNumberUnsigned(n: CilJsLong) {
    return n[1] * 4294967296 + n[0];
}

export function arraySetValue(dest: CilJsArray, value: CilJsValue | CilJsBox, pos: number) {

    // value is either an object or a boxed value type.
    const etype = dest.etype;
    const vtype = value != null ? isBoxed(value) ? value.type : value.constructor as CilJsType : null;

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
        dest.jsarr[pos] = castClass(value as CilJsValue, etype)
    }
    else {

        if (etype.IsInst(value)) {
            dest.jsarr[pos] = (value as CilJsBox).boxed;
        }
        else {
            if (!etype.IsPrimitive || !vtype.IsPrimitive) {
                throwInvalidCast();
            }

            dest.jsarr[pos] = value;
        }
    }
}

export function delegateInvoke(self: CilJsDelegate, ..._: any[]) {
    const m = self._methodPtr;
    const t = self._target;

    let args = new Array(arguments.length);

    for (let i = 0; i < arguments.length; i++)
        args[i] = arguments[i];

    if (t != null)
        args[0] = t;
    else
        args = Array.prototype.slice.call(args, 1);

    return m.apply(null, args);
}

export function delegateBeginInvoke(self: CilJsDelegate /* , [delegate arguments], callback, state */) {
    const asyncResult = asm0.CreateAsyncResult(self) as CilJsAsyncResult;

    asyncResult.result = delegateInvoke.apply(null, arguments as any);
    asyncResult.asyncState = arguments[arguments.length - 1];

    const asyncCallback = arguments[arguments.length - 2];
    if (asyncCallback != null) {
        delegateInvoke(asyncCallback, asyncResult);
    }

    return asyncResult;
}

export function delegateEndInvoke(self: CilJsDelegate, asyncResult: CilJsAsyncResult) {
    return asyncResult.result;
}

export function delegateCtor(self: CilJsDelegate, target: CilJsValue, methodPtr: Function) {
    self._methodPtr = methodPtr;
    self._target = target;
}

export let consoleWriteLine = function consoleWriteLine(managedStr: CilJsString) {
    console.log(managedStr.jsstr);
}

export function setConsoleWriter(f: (s: CilJsString) => void) {
    consoleWriteLine = f;
}

