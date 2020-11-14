using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using CilJs.Ast;
using CilJs.JSAst;
using CilJs.Loading.Model;
using Managed.Reflection;

namespace CilJs.JsTranslation
{
    class AssemblyTranslator : AbstractTranslator
    {
        private readonly TypeTranslator typeTranslator;
        private readonly MethodTranslator methodTranslator;

        public AssemblyTranslator(Context context, SourceMapBuilder sourceMapBuilder) : base(context, sourceMapBuilder)
        {
            typeTranslator = new TypeTranslator(context, sourceMapBuilder);
            methodTranslator = new MethodTranslator(context, sourceMapBuilder);
        }

        public IEnumerable<JSStatement> Translate(List<CilAssembly> world, CilAssembly asm)
        {
            var name = "asm" + world.IndexOf(asm);
            var ifier = JSFactory.Identifier(name);

            yield return new JSVariableDelcaration { Name = name, ForceDeclaration = true, Value = new JSObjectLiteral() }.ToStatement();
            yield return new JSVariableDelcaration { Name = "asm", ForceDeclaration = true, Value = JSFactory.Identifier(name) }.ToStatement();

            foreach (var refAsm in asm.ReflectionAssembly.GetReferencedAssemblies())
                yield return new JSVariableDelcaration 
                {
                    Name = "asm" + world.TakeWhile(c => c.ReflectionAssembly.GetName().FullName != refAsm.FullName).Count(),
                    ForceDeclaration = true,
                    Value = JSFactory.Call(JSFactory.Identifier("CILJS", "find_assembly"), JSFactory.Literal(refAsm.Name))
                }.ToStatement();

            foreach (var s in GetBody(world, asm).Select(JSFactory.Statement))
                yield return s;

            yield return new JSIfStatement
            {
                Condition = JSFactory.Binary(JSFactory.Identifier("typeof module"), "!=", JSFactory.Literal("undefined")),
                Statements =
                {
                    JSFactory
                        .Assignment(
                            JSFactory.Identifier("module", "exports"),
                            ifier)
                        .ToStatement()
                }
            };
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

                    yield return new JSLineComment
                    {
                        Text =
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

            yield return JSFactory
                .Call(
                    JSFactory.Identifier("CILJS", "declare_assembly"),
                    JSFactory.Literal(asm.ReflectionAssembly.GetName().Name),
                    JSFactory.Identifier("asm"));
        }
    }
}