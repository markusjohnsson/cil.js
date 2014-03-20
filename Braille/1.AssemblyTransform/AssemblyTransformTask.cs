using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using Braille.JSAst;
using Braille.MethodTransform;

namespace Braille.AssemblyTransform
{
    class AssemblyTransformTask
    {
        private List<string> paths = new List<string>();

        public void AddAssembly(string path)
        {
            paths.Add(path);
        }

        public IEnumerable<CilAssembly> Process()
        {
            foreach (var assembly in paths)
            {
                yield return Process(assembly);
            }
        }

        private CilAssembly Process(string assembly)
        {
            var asm = Assembly.LoadFile(assembly);

            var result = new CilAssembly(); 
            result.Name = asm.FullName;
            result.EntryPoint = asm.EntryPoint;
            result.ReflectionAssembly = asm;

            var types = new List<CilType>();
            result.Types = types;

            foreach (var type in asm.GetTypes())
            {
                types.Add(ProcessType(type));
            }

            return result;
        }

        private CilType ProcessType(Type type)
        {
            var result = new CilType { Name = type.Name, Namespace = type.Namespace, BaseType = type.BaseType != null ? type.BaseType.FullName : null, ReflectionType = type };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            foreach (var method in type.GetMethods((BindingFlags) int.MaxValue))
            {
                if (method.DeclaringType == type)
                    methods.Add(ProcessMethod(method));
            }

            foreach (var ctor in type.GetConstructors((BindingFlags)int.MaxValue))
            {
                if (ctor.DeclaringType == type)
                    methods.Add(ProcessMethod(ctor));
            }

            return result;
        }

        private CilMethod ProcessMethod(MethodBase method)
        {
            return new CilMethod
            {
                Name = method.Name,
                ReflectionMethod = method,
                IsHideBySig = method.IsHideBySig,
                IsVirtual = method.IsVirtual,
                IlCode = GetIl(method),
                MetadataToken = method.MetadataToken,
                Resolver = new ModuleILResolver(method)
            };
        }

        private static byte[] GetIl(MethodBase method)
        {
            if (method.GetMethodBody() == null)
                return new byte[0];
            else
                return method.GetMethodBody().GetILAsByteArray();
        }
    }
}
