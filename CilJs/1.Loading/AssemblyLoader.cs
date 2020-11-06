using CilJs.Ast;
using CilJs.Loading.Model;
using Managed.Reflection;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace CilJs.Loading
{
    class AssemblyLoader
    {
        private CompileSettings settings;

        public AssemblyLoader(CompileSettings settings)
        {
            this.settings = settings;
        }

        public Context Load()
        {
            var universe = new Universe();

            var allPaths = new HashSet<string>(settings.Assemblies.Select(k => Path.GetFileNameWithoutExtension(k.Path)));

            var dependencyOrdered = settings.Assemblies
                .SelectMany(asmSettings => AddReferencedAssemblies(universe, allPaths, asmSettings))
                ;

            var asms = new List<CilAssembly>();
            foreach (var p in dependencyOrdered)
            {
                asms.Add(Process(universe, p, asms.Count));
            }

            return new Context(universe, asms, settings);
        }

        class AssemblyData
        {
            public AssemblySettings Settings;
            public Assembly Assembly;
        }

        private static IEnumerable<AssemblyData> AddReferencedAssemblies(
            Universe universe, HashSet<string> allPaths, AssemblySettings p)
        {
            var asm = GetAssembly(universe, p);
            var dir = Path.GetDirectoryName(p.Path);
            foreach (var r in asm.GetReferencedAssemblies())
            {
                var path = Path.Combine(dir, r.Name + ".dll");

                if (allPaths.Add(r.Name) && File.Exists(path))
                {
                    var asmSettings = new AssemblySettings
                    {
                        Path = path,
                        Translate = p.Translate,
                        SourceMap = p.SourceMap
                    };

                    foreach (var sub in AddReferencedAssemblies(universe, allPaths, asmSettings))
                        yield return sub;
                }
            }

            yield return new AssemblyData { Settings = p, Assembly = asm };
        }

        private CilAssembly Process(Universe universe, AssemblyData data, int index)
        {
            var asm = data.Assembly;
            var settings = data.Settings;

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

            //var module = assemblyDefinition.MainModule;

            foreach (var type in asm.GetTypes())
            {
                types.Add(ProcessType(type));
            }

            if (data.Settings.SourceMap)
            {
                if (data.Settings.PdbStream != null)
                {
                    var debugLoader = new DebugInfoLoader(data.Settings.PdbStream);
                    debugLoader.ReadDebugInfo(result);
                }
                else if (File.Exists(Path.ChangeExtension(data.Settings.Path, "pdb")))
                {
                    using (var pdbFile = File.OpenRead(Path.ChangeExtension(data.Settings.Path, "pdb")))
                    {
                        var debugLoader = new DebugInfoLoader(pdbFile);
                        debugLoader.ReadDebugInfo(result);
                    }
                }
            }

            return result;
        }

        private static Assembly GetAssembly(Universe universe, AssemblySettings settings)
        {
            Assembly asm;
            if (settings.Stream == null)
                asm = universe.LoadFile(settings.Path);
            else
                asm = universe.LoadAssembly(universe.OpenRawModule(settings.Stream, null));
            return asm;
        }

        private CilType ProcessType(Managed.Reflection.Type type)
        {
            var result = new CilType
            {
                Name = type.Name,
                Namespace = type.Namespace,
                BaseType = type.BaseType != null ? type.BaseType.FullName : null,
                ReflectionType = type,
                //CecilType = cecilType
            };
            var methods = new List<CilMethod>();
            result.Methods = methods;

            var flags = BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static;

            foreach (var method in type.GetMethods(flags))
            {
                if (method.DeclaringType == type)
                {
                    methods.Add(ProcessMethod(result, method));
                }
            }

            foreach (var ctor in type.GetConstructors(flags))
            {
                if (ctor.DeclaringType == type)
                {
                    methods.Add(ProcessMethod(result, ctor));
                }
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
                MethodBody = method.GetMethodBody(),
                MetadataToken = method.MetadataToken,
                Resolver = new ModuleILResolver(method),
                DeclaringType = type
            };
        }

    }
}
