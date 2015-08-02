using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using IKVM.Reflection;

namespace CilJs.JsTranslation
{
    class AssemblyTranslator: AbstractTranslator
    {
        private readonly TypeTranslator typeTranslator;
        private readonly MethodTranslator methodTranslator;

        public AssemblyTranslator(Context context): base(context)
        {
            typeTranslator = new TypeTranslator(context);
            methodTranslator = new MethodTranslator(context);
        }

        public IEnumerable<JSStatement> Translate(List<CilAssembly> world, CilAssembly asm)
        {
            var name = "asm" + world.IndexOf(asm);
            var ifier = JSFactory.Identifier(name);

            yield return new JSVariableDelcaration { Name = name, ForceDeclaration = true }.ToStatement();

            yield return new JSCallExpression
            {
                Function = new JSFunctionDelcaration
                {
                    Parameters = new List<JSFunctionParameter> { new JSFunctionParameter { Name = "asm" } },
                    Body = GetBody(world, asm).Select(JSFactory.Statement).ToList()
                },
                Arguments = 
                {
                    new JSBinaryExpression 
                    {
                        Left = ifier,
                        Operator = "||",
                        Right = JSFactory.Assignment(ifier, new JSObjectLiteral())
                    }
                }
            }.ToStatement();
        }

        private IEnumerable<JSExpression> GetBody(List<CilAssembly> world, CilAssembly asm)
        {
            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier("asm", "FullName"), 
                    JSFactory.Literal(asm.ReflectionAssembly.FullName));

            foreach (var type in asm.Types)
            {
                if (type.IsIgnored || type.IsInterface)
                    continue;

                foreach (var method in type.Methods)
                {
                    var function = methodTranslator.Translate(asm, type, method);

                    if (function == null)
                        continue;

                    var rmtd = method.ReflectionMethod;
                    var mtdInfo = rmtd as MethodInfo;

                    yield return new JSLineComment { Text = 
                        string.Format("{0}{1} {2}.{3}{4}({5})",
                            rmtd.IsStatic ? "static " : "",
                            mtdInfo != null ? mtdInfo.ReturnType.ToString() : null,
                            method.DeclaringType.Name,
                            method.Name,
                            rmtd.IsGenericMethod ? "<" + string.Join(",", rmtd.GetGenericArguments().Select(g => g.Name)) + ">" : "",
                            string.Join(",", rmtd.GetParameters().Select(p => p.ParameterType.Name)))
                    };

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
                        typeTranslator.Translate(t));
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