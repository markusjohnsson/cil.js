﻿using System;
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
            var result = new CilType { Name = type.Name, Namespace = type.Namespace, BaseType = type.BaseType != null ? type.BaseType.FullName : null };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            foreach (var method in type.GetMethods((BindingFlags) int.MaxValue))
            {
                if (method.DeclaringType == type)
                    methods.Add(ProcessMethod(method));
            }

            return result;
        }

        private CilMethod ProcessMethod(MethodInfo method)
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

        private static byte[] GetIl(MethodInfo method)
        {
            if (method.GetMethodBody() == null)
                return new byte[0];
            else
                return method.GetMethodBody().GetILAsByteArray();
        }
    }
}
