using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.JsTranslation
{
    class MethodTranslator : AbstractTranslator
    {
        public MethodTranslator(Context context)
            : base(context)
        {
        }

        public JSFunctionDelcaration GetInitializer(CilAssembly assembly, CilType type, CilMethod method)
        {
            if (type.IsIgnored)
            {
                throw new ArgumentException("cannot translate method of ignored class");
            }

            if (method.NeedInitializer == false)
                return null;

            var functionBlock = new List<JSStatement>();

            var thisScope = GetThisScope(method.ReflectionMethod, method.ReflectionMethod.DeclaringType);

            foreach (var t in method.ReferencedTypes)
            {
                if (t.IsGenericParameter) // types shall be initialized before they are used as generic parameters 
                    continue;

                functionBlock.Add(
                    new JSCallExpression
                    {
                        Function = JSFactory.Identifier(GetTypeIdentifier(t, method.ReflectionMethod, method.ReflectionMethod.DeclaringType, thisScope), "init")
                    }
                    .ToStatement());
            }

            functionBlock.Add(
                JSFactory
                    .Assignment(
                        JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod)),
                        JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod) + "_"))
                    .ToStatement());

            var f = new JSFunctionDelcaration
            {
                Body = functionBlock
            };

            return HasGenericParameters(method) ? CreateGenericFunction(method, f) : f;
        }

        public JSFunctionDelcaration GetFirstCallInitializer(CilAssembly assembly, CilType type, CilMethod method)
        {
            if (type.IsIgnored)
            {
                throw new ArgumentException("cannot translate method of ignored class");
            }

            if (!method.NeedInitializer)
            {
                throw new ArgumentException("method need no initialization");
            }

            var functionBlock = new List<JSStatement>();

            JSExpression closedMethodInitializer;
            JSExpression openMethodInitializer = JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod) + "_init");

            if (HasGenericParameters(method))
            {
                closedMethodInitializer = new JSCallExpression
                {
                    Function = openMethodInitializer,
                    Arguments = GetGenericParameterList(method.ReflectionMethod)
                        .Select(t => JSFactory.Identifier(t.Name))
                        .ToList()
                };
            }
            else
                closedMethodInitializer = openMethodInitializer;

            functionBlock.Add(
                new JSCallExpression
                {
                    Function = JSFactory.Identifier(closedMethodInitializer, "apply"),
                    Arguments = { JSFactory.Identifier("this"), JSFactory.Identifier("arguments") }

                }.ToStatement());

            JSExpression openMethodImplementation = JSFactory.Identifier("asm", GetMethodIdentifier(method.ReflectionMethod));
            JSExpression closedMethodImplementation;

            if (HasGenericParameters(method))
            {
                closedMethodImplementation = new JSCallExpression
                {
                    Function = openMethodImplementation,
                    Arguments = GetGenericParameterList(method.ReflectionMethod)
                        .Select(t => JSFactory.Identifier(t.Name))
                        .ToList()
                };
            }
            else
                closedMethodImplementation = openMethodImplementation;

            functionBlock.Add(
                new JSReturnExpression
                {
                    Expression = new JSCallExpression
                    {
                        Function = JSFactory.Identifier(closedMethodImplementation, "apply"),
                        Arguments = { JSFactory.Identifier("this"), JSFactory.Identifier("arguments") }
                    }
                }.ToStatement());

            var ps = GetParameterCount(method);

            var f = new JSFunctionDelcaration
            {
                Body = functionBlock,
                Parameters = Enumerable.Range(0, ps).Select(i => new JSFunctionParameter { Name = "arg" + i }).ToList()
            };

            return HasGenericParameters(method) ? CreateGenericFunction(method, f) : f;
        }

        public JSExpression Translate(CilAssembly assembly, CilType type, CilMethod method)
        {
            if (type.IsIgnored)
            {
                throw new ArgumentException("cannot translate method of ignored class");
            }

            if (method.NeedTranslation == false)
            {
                return null;
            }

            var r = method.GetReplacement();
            if (r != null && r.Kind == ReplacementKind.Function)
            {
                return new JSIdentifier { Name = r.Replacement };
            }

            if (type.IsUserDelegate)
            {
                return TranslateDelegateMethod(method);
            }
            else
            {
                return TransformNormalMethod(assembly, type, method);
            }
        }

        private JSFunctionDelcaration TranslateDelegateMethod(CilMethod method)
        {
            // TODO: we should avoid the extra trampoline for invoking delegates. 
            // We could leave the codegen here though as it can be useful for reflection later

            switch (method.Name)
            {
                case "Invoke":
                    return new JSFunctionDelcaration
                    {
                        Name = "Invoke",
                        Body = new List<JSStatement> 
                            {
                                new JSStatement 
                                {
                                    Expression = new JSIdentifier 
                                    {
                                        Name = @"
                                            var m = arguments[0]._methodPtr;
                                            var t = arguments[0]._target;
                                            if (t != null)
                                                arguments[0] = t;
                                            else
                                                arguments = Array.prototype.slice.call(arguments, 1);
                                            return m.apply(null, arguments)"
                                    }
                                }
                            }
                    };
                case ".ctor":
                    return new JSFunctionDelcaration
                    {
                        Name = "ctor",
                        Body = new List<JSStatement> 
                            {
                                new JSStatement 
                                {
                                    Expression = new JSIdentifier 
                                    {
                                        Name = "arguments[0]._methodPtr = arguments[2]; arguments[0]._target = arguments[1];"
                                    }
                                }
                            }
                    };
                default:
                    return JSFunctionDelcaration.Empty;
            }
        }

        private JSFunctionDelcaration TransformNormalMethod(CilAssembly asm, CilType type, CilMethod method)
        {
            var functionBlock = new List<JSStatement>();

            var thisScope = GetThisScope(method.ReflectionMethod, method.ReflectionMethod.DeclaringType);

            if (method.ReferencedTypes != null)
            {
                var tIdx = 0;
                foreach (var t in method.ReferencedTypes)
                {
                    functionBlock.Add(
                        new JSVariableDelcaration
                        {
                            Name = "t" + tIdx,
                            Value = GetTypeIdentifier(t, method.ReflectionMethod, method.ReflectionMethod.DeclaringType, thisScope)
                        }
                        .ToStatement());

                    tIdx++;
                }
            }

            if (method.ReflectionMethod.GetMethodBody().InitLocals)
            {
                var locIdx = 0;

                foreach (var loc in method.ReflectionMethod.GetMethodBody().LocalVariables)
                {
                    if (method.Locals[locIdx].NeedInit)
                    {
                        functionBlock.Add(
                            new JSStatement
                            {
                                Expression = new JSVariableDelcaration
                                {
                                    Name = "loc" + locIdx,
                                    Value = GetDefaultValue(loc.LocalType, methodScope: method.ReflectionMethod, typeScope: method.ReflectionMethod.DeclaringType, thisScope: thisScope)
                                }
                            });
                    }

                    locIdx++;
                }
            }

            functionBlock.AddRange(
                method
                    .OpTree
                    .SelectMany(op => op.StoreLocations)
                    .Distinct()
                    .Select(
                        n => new JSStatement
                        {
                            Expression = new JSVariableDelcaration
                            {
                                Name = n.Name
                            }
                        }));

            var blockTranslator = new BlockTranslator(context, asm, type, method, thisScope);

            functionBlock.AddRange(blockTranslator.Transform(method.Block).Where(s => !(s.Expression is JSBreakExpression)));

            var ps = GetParameterCount(method);

            var function = new JSFunctionDelcaration
            {
                Body = functionBlock,
                Name = method.Name.Replace("<", "_").Replace(">", "_").Replace("`", "_").Replace(".", "_"),
                Parameters = Enumerable.Range(0, ps).Select(i => new JSFunctionParameter { Name = "arg" + i }).ToList()
            };

            return
                HasGenericParameters(method) ?
                    CreateGenericFunction(method, function) :
                    function;
        }

        private static int GetParameterCount(CilMethod method)
        {
            var ps = method
                .ReflectionMethod
                .GetParameters()
                .Length;

            if (false == method.ReflectionMethod.IsStatic)
                ps++;

            return ps;
        }

        private static bool HasGenericParameters(CilMethod method)
        {
            return (method.ReflectionMethod.IsGenericMethodDefinition) ||
                   (method.ReflectionMethod.IsStatic && method.ReflectionMethod.DeclaringType.IsGenericType);
        }

        private JSFunctionDelcaration CreateGenericFunction(CilMethod method, JSFunctionDelcaration function)
        {
            var mi = method.ReflectionMethod;

            // For static methods on generic classes, the type arguments are passed to 
            // the method at the call site rather than wired through the generic class type.

            var types = GetGenericParameterList(mi);

            return new JSFunctionDelcaration
            {
                Body = { new JSStatement { Expression = new JSReturnExpression { Expression = function } } },
                Parameters = types.Select(t => new JSFunctionParameter { Name = t.Name }).ToList()
            };
        }

        private static IEnumerable<Type> GetGenericParameterList(MethodBase mi)
        {
            var classGenArgs = (mi.IsStatic && mi.DeclaringType.IsGenericType) ? mi.DeclaringType.GetGenericArguments() : new Type[0];
            var methodGenArgs = mi.IsGenericMethod ? mi.GetGenericArguments() : new Type[0];
            return classGenArgs.Concat(methodGenArgs);
        }
    }
}
