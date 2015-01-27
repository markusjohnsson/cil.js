using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;

namespace Braille.JsTranslation
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

        public JSExpression Translate(List<CilAssembly> world, CilAssembly asm)
        {
            return new JSFunctionDelcaration
            {
                Parameters = new List<JSFunctionParameter> { new JSFunctionParameter { Name = "asm" } },
                Body = GetBody(world, asm).Select(JSFactory.Statement).ToList()
            };
        }

        private IEnumerable<JSExpression> GetBody(List<CilAssembly> world, CilAssembly asm)
        {
            yield return JSFactory
                .Assignment(
                    JSFactory.Identifier("asm", "FullName"), 
                    JSFactory.Literal(asm.ReflectionAssembly.FullName));

            yield return JSFactory.Assignment(
                JSFactory.Identifier("asm", "next_hash"),
                JSFactory.Literal(1));

            foreach (var type in asm.Types)
            {
                if (type.IsIgnored || type.IsInterface)
                    continue;

                foreach (var method in type.Methods)
                {
                    var function = methodTranslator.Translate(asm, type, method);

                    if (function == null)
                        continue;

                    yield return new JSLineComment { Text = (method.ReflectionMethod.IsStatic ? "static " : "") + method.ReflectionMethod.ToString() };

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