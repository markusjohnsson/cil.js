using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Loading.Model
{
    class Context
    {
        public Universe ReflectionUniverse { get; set; }

        public List<CilAssembly> Assemblies { get; set; }


        struct MethodId
        {
            public int assembly; public int metadataToken;
            public MethodId(int asm, MethodBase mb)
            {
                assembly = asm;
                metadataToken = mb.MetadataToken;
            }
        }
        private Dictionary<MethodId, CilMethod> methodLookup;

        public CilMethod LookupMethod(MethodBase mb)
        {
            if (methodLookup == null)
            {
                methodLookup = Assemblies
                    .SelectMany(
                        (a, i) => a
                            .Types
                            .SelectMany(t => t.Methods)
                            .Select(m => new { i, m }))
                    .ToDictionary(
                        m => new MethodId(m.i, m.m.ReflectionMethod), m => m.m);
            }

            var idx = new MethodId(Assemblies.Select(a => a.ReflectionAssembly).IndexOf(mb.DeclaringType.Assembly), mb);

            return methodLookup[idx];
        }
    }
}
