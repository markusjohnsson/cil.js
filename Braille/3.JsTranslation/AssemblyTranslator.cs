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
                Body = GetBody(world, asm).Select(s => new JSStatement { Expression = s }).ToList()
            };
        }

        private IEnumerable<JSExpression> GetBody(List<CilAssembly> world, CilAssembly asm)
        {
            yield return new JSIdentifier
            {
                // Helper functions to manage a multi-key dictionary.
                // Used to cache constructed generic types.
                // A constructed generic type should always have the same constructor instance (for the same type arguments)
                Name =
                    @"
function clone_value(v) {
    if (v == null) return v;
    if (typeof v === 'number') return v;
    if (typeof v === 'function') return v;
    if (!v.constructor.IsValueType) return v;
    var result = new v.constructor();
//    var result = {};
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
        'vtable': type.prototype.vtable
    };
}

function unbox(o, type) {
    return o.boxed;
}

function unbox_any(o, type) {
    if (type.IsNullable) {
        var result = new type();
        if (o !== null) {
            result.value = o.boxed;
            result.has_value = true;
        }
        return result;
    }
    
    if (type.IsValueType)
        return o.boxed;
    else
        return o;
}

function tree_get(a, s) {
    if (a.length == 0) return s;
    var c = s[a[0]];
    return c && tree_get(a.slice(1), c);
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
    var r = new asm0['System.String']();
    r.jsstr = str;
    return r;
}

function new_array(type, length) {
    var r = new asm0['System.Array']();
    r.type = type;
    r.jsarr = new Array(length);
    return r;
}
"
            };

            yield return new JSVariableDelcaration { Name = "self" };

            foreach (var type in asm.Types)
            {
                if (type.IsIgnored || type.IsInterface)
                    continue;

                foreach (var method in type.Methods)
                {
                    var function = methodTranslator.Translate(asm, type, method);

                    if (function == null)
                        continue;
                    
                    var accessor = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = GetMethodIdentifier(method.ReflectionMethod)
                    };

                    yield return new JSBinaryExpression
                    {
                        Left = accessor,
                        Operator = "=",
                        Right = function
                    };

                    if (method.IsAssemblyStatic)
                    {
                        Debug.Assert(method.ReflectionMethod.IsStatic);

                        yield return new JSBinaryExpression
                        {
                            Left = new JSPropertyAccessExpression 
                            {
                                Host = new JSIdentifier { Name = "asm" },

                                // CHECKER TODO: check that there are no name conflicts for Assembly Statics

                                Property = method.Name
                            },
                            Operator = "=",
                            Right = accessor
                        };
                    }
                }
            }

            foreach (var t in asm.Types)
            {
                if (t.IsIgnored)
                    continue;

                yield return new JSBinaryExpression
                {
                    Left = new JSIdentifier { Name = "self" },
                    Operator = "=",
                    Right = new JSCallExpression
                    {
                        Function = typeTranslator.Translate(t)
                    }
                };

                yield return new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = t.ReflectionType.FullName
                    },
                    Operator = "=",
                    Right = new JSIdentifier { Name = "self" }
                };
            }

            if (asm.EntryPoint != null)
            {
                yield return new JSBinaryExpression
                {
                    Left = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = "entryPoint"
                    },
                    Operator = "=",
                    Right = new JSPropertyAccessExpression
                    {
                        Host = new JSIdentifier { Name = "asm" },
                        Property = "x" + asm.EntryPoint.MetadataToken.ToString("x")
                    }
                };
            }
        }
    }
}