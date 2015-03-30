using Braille.Ast;
using Braille.Loading.Model;
using IKVM.Reflection;
using Mono.Cecil;
using Mono.Cecil.Pdb;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Braille.Loading
{
    class AssemblyLoader
    {
        private CompileSettings settings;
        private ReaderParameters readerParameters; // cecil.

        public AssemblyLoader(CompileSettings settings)
        {
            this.settings = settings;

            // load using Cecil too so that we can do source maps
            var assemblyResolver = new DefaultAssemblyResolver();
            readerParameters = new ReaderParameters { AssemblyResolver = assemblyResolver };
            var symbolReaderProvider = new PdbReaderProvider();
            readerParameters.SymbolReaderProvider = symbolReaderProvider;
            readerParameters.ReadSymbols = true;
        }

        public Context Load()
        {
            var universe = new Universe();

            var asms = settings
                .Assemblies
                .Select((p, i) => Process(universe, p, i))
                .ToList();

            return new Context(universe, asms, settings);
        }

        private CilAssembly Process(Universe universe, AssemblySettings settings, int index)
        {
            var asm = universe.LoadFile(settings.Path);

            // load using Cecil too so that we can do source maps
            var assemblyDefinition = AssemblyDefinition.ReadAssembly(settings.Path, readerParameters);

            var result = new CilAssembly
            {
                Name = asm.FullName,
                EntryPoint = asm.EntryPoint,
                ReflectionAssembly = asm,
                Identifier = "asm" + index,
                Settings = settings
            };

            var types = new List<CilType>();
            result.Types = types;

            var module = assemblyDefinition.MainModule;

            foreach (var type in asm.GetTypes())
            {
                types.Add(ProcessType(type, module.GetType(type.FullName.Replace("+","/"))));
            }

            return result;
        }

        private CilType ProcessType(IKVM.Reflection.Type type, Mono.Cecil.TypeDefinition cecilType)
        {
            var result = new CilType
            {
                Name = type.Name,
                Namespace = type.Namespace,
                BaseType = type.BaseType != null ? type.BaseType.FullName : null,
                ReflectionType = type,
                CecilType = cecilType
            };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            var flags = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;

            foreach (var method in type.GetMethods(flags))
            {
                if (method.DeclaringType == type)
                {
                    var cecilMethod = cecilType
                        .Methods
                        .First(m => m.MetadataToken.ToInt32() == method.MetadataToken);

                    methods.Add(ProcessMethod(result, method, cecilMethod));
                }
            }

            foreach (var ctor in type.GetConstructors(flags))
            {
                if (ctor.DeclaringType == type)
                {
                    var cecilMethod = cecilType
                        .Methods
                        .First(m => m.MetadataToken.ToInt32() == ctor.MetadataToken);
                    
                    methods.Add(ProcessMethod(result, ctor, cecilMethod));
                }
            }

            return result;
        }

        private CilMethod ProcessMethod(CilType type, MethodBase method, MethodDefinition cecilMethod)
        {
            return new CilMethod
            {
                Name = method.Name,
                ReflectionMethod = method,
                CeclilMethod = cecilMethod,
                IsHideBySig = method.IsHideBySig,
                IsVirtual = method.IsVirtual,
                MethodBody = method.GetMethodBody(),
                MetadataToken = method.MetadataToken,
                Resolver = new ModuleILResolver(method),
                DeclaringType = type
            };
        }

    }
}
