using CilJs.Ast;
using CilJs.Loading.Model;
using IKVM.Reflection;
using Mono.Cecil;
using Mono.Cecil.Pdb;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace CilJs.Loading
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

            var assemblySettings = settings.Assemblies.ToDictionary(a => a.Path);

            var allPaths = new HashSet<string>(assemblySettings.Keys.Select(k => Path.GetFileNameWithoutExtension(k)));

            var dependencyOrdered = assemblySettings
                .SelectMany(p => AddReferencedAssemblies(universe, allPaths, p.Key))
                .Distinct()
                .ToList();

            var asms = new List<CilAssembly>();
            foreach (var p in dependencyOrdered)
            {
                AssemblySettings asmSettings;
                if (false == assemblySettings.TryGetValue(p, out asmSettings))
                {
                    Console.WriteLine("Adding assembly: {0}", Path.GetFileName(p));
                    asmSettings = new AssemblySettings { Path = p, Translate = true };
                    assemblySettings.Add(p, asmSettings);
                }

                asms.Add(Process(universe, asmSettings, asms.Count));
            }

            return new Context(universe, asms, settings);
        }

        private static IEnumerable<string> AddReferencedAssemblies(Universe universe, HashSet<string> allPaths, string p)
        {
            var asm = universe.LoadFile(p);
            var dir = Path.GetDirectoryName(p);
            foreach (var r in asm.GetReferencedAssemblies())
            {
                var path = Path.Combine(dir, r.Name + ".dll");

                if (allPaths.Add(r.Name) && File.Exists(path))
                {
                    foreach (var sub in AddReferencedAssemblies(universe, allPaths, path))
                        yield return sub;
                }
            }

            yield return p;
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
