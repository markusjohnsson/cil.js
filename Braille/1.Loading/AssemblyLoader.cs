using Braille.Ast;
using Braille.JsTranslation;
using Braille.Loading.Model;
using IKVM.Reflection;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Loading
{
    class AssemblyLoader
    {
        private List<string> paths = new List<string>();

        public void AddAssembly(string path)
        {
            paths.Add(path);
        }

        public Context Load()
        {
            var universe = new Universe();

            var asms = paths
                .Select((p, i) => Process(universe, p, i))
                .ToList();

            return new Context
            {
                Assemblies = asms,
                ReflectionUniverse = universe
            };
        }

        private CilAssembly Process(Universe universe, string assembly, int index)
        {
            var asm = universe.LoadFile(assembly);

            var result = new CilAssembly();
            result.Name = asm.FullName;
            result.EntryPoint = asm.EntryPoint;
            result.ReflectionAssembly = asm;
            result.Identifier = "asm" + index;

            var types = new List<CilType>();
            result.Types = types;

            foreach (var type in asm.GetTypes())
            {
                types.Add(ProcessType(type));
            }

            return result;
        }

        private CilType ProcessType(IKVM.Reflection.Type type)
        {
            var result = new CilType
            {
                Name = type.Name,
                Namespace = type.Namespace,
                BaseType = type.BaseType != null ? type.BaseType.FullName : null,
                ReflectionType = type
            };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            var flags = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;

            foreach (var method in type.GetMethods(flags))
            {
                if (method.DeclaringType == type)
                    methods.Add(ProcessMethod(result, method));
            }

            foreach (var ctor in type.GetConstructors(flags))
            {
                if (ctor.DeclaringType == type)
                    methods.Add(ProcessMethod(result, ctor));
            }

            return result;
        }

        private CilMethod ProcessMethod(CilType type, MethodBase method)
        {
            return new CilMethod
            {
                Name = method.Name,
                ReflectionMethod = method,
                IsHideBySig = method.IsHideBySig,
                IsVirtual = method.IsVirtual,
                IlCode = GetIl(method),
                MetadataToken = method.MetadataToken,
                Resolver = new ModuleILResolver(method),
                DeclaringType = type
            };
        }

        private static byte[] GetIl(MethodBase method)
        {
            if (method.GetMethodBody() == null)
                return null;
            else
                return method.GetMethodBody().GetILAsByteArray();
        }
    }
}
