using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Braille.JsTranslation
{
    class AssemblyTranslator: AbstractTranslator
    {
        private TypeTranslator typeTranslator;
        private MethodTranslator methodTranslator;

        public AssemblyTranslator(Context context): base(context)
        {
            this.typeTranslator = new TypeTranslator(context);
            this.methodTranslator = new MethodTranslator(context);
        }

        public JSExpression Translate(List<CilAssembly> world, CilAssembly asm)
        {
            return new JSFunctionDelcaration
            {
                Parameters = new List<JSFunctionParameter> { new JSFunctionParameter { Name = "asm" } },
                Body = GetBody(world, asm).Select(s => JSFactory.Statement(s)).ToList()
            };
        }

        private IEnumerable<JSExpression> GetBody(List<CilAssembly> world, CilAssembly asm)
        {
            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier("asm", "FullName"), 
                    JSFactory.Literal(asm.ReflectionAssembly.FullName));

            yield return new JSIdentifier
            {
                // Helper functions to manage a multi-key dictionary.
                // Used to cache constructed generic types.
                // A constructed generic type should always have the same constructor instance (for the same type arguments)
                Name =
                    @"
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
            'vtable': type.prototype.vtable,
            'ifacemap': type.prototype.ifacemap
        };
    }

    function unbox(o, type) {
        if (o == null) {
            var t = asm0['System.InvalidCastException']();
            throw new t();
        }
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
        if (typeof o.boxed !== ""undefined"" &&
            typeof o.type !== ""undefined"" &&
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
                return obj; " /* this is for (u)int64 */ + @"
            }
        }
        
        var t = asm0['System.InvalidCastException']();
        throw new t();
    }

    function conv_u8(n) {
        if (n < 0) {
            "/* signed 32 bit int that need to be converted to 32 bit unsigned before 64 bit conversion */ + @"
            n = 0x100000000 + n;
        }

        return make_uint64(n);
    }

    function conv_i8(n) {
        if (n < 0) {
            "/* signed 32 bit int */ + @"
            n = 0x100000000 + n;
            
            "/* here, n should be positive and less than 0xffffffff, otherwise, input would not have fit in 32 bit */ + @"
            
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
"
            };

            foreach (var type in asm.Types)
            {
                if (type.IsIgnored || type.IsInterface)
                    continue;

                foreach (var method in type.Methods)
                {
                    var function = methodTranslator.Translate(asm, type, method);

                    if (function == null)
                        continue;
                    
                    var accessor = JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod));

                    var initializer = methodTranslator.GetInitializer(asm, type, method);

                    JSExpression firstCallFunction = null;

                    if (initializer != null)
                    {
                        firstCallFunction = methodTranslator.GetFirstCallInitializer(asm, type, method);

                        yield return JSFactory
                            .Assignment(
                                JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod) + "_init"),
                                initializer)
                            .ToStatement();
                    }

                    yield return JSFactory
                        .Assignment(
                            accessor,
                            firstCallFunction ?? function)
                        .ToStatement();

                    if (firstCallFunction != null)
                    {
                        yield return JSFactory
                            .Assignment(
                                JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod) + "_"),
                                function);
                    }

                    if (method.IsAssemblyStatic)
                    {
                        Debug.Assert(method.ReflectionMethod.IsStatic);

                        var name = method.AssemblyStaticName ?? method.Name;

                        yield return JSFactory
                            .Assignment(
                                new JSPropertyAccessExpression 
                                {
                                    Host = new JSIdentifier { Name = "asm" },

                                    // CHECKER TODO: check that there are no name conflicts for Assembly Statics

                                    Property = name
                                },
                                accessor);
                    }
                }
            }

            foreach (var t in asm.Types)
            {
                if (t.IsIgnored)
                    continue;

                yield return JSFactory
                    .Assignment(
                        new JSPropertyAccessExpression
                        {
                            Host = new JSIdentifier { Name = "asm" },
                            Property = t.ReflectionType.FullName
                        },
                        new JSCallExpression
                        {
                            Function = typeTranslator.Translate(t)
                        });
            }

            if (asm.EntryPoint != null)
            {
                yield return JSFactory
                    .Assignment(
                        JSFactory.Identifier("asm", "entryPoint"),
                        JSFactory.Identifier("asm", "x" + asm.EntryPoint.MetadataToken.ToString("x")));
            }
        }
    }
}