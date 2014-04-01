using IKVM.Reflection;
using System.Collections.Generic;

namespace Braille.Ast
{
    class CilAssembly
    {
        public string Name { get; set; }
        public IEnumerable<CilType> Types { get; set; }
        public MethodInfo EntryPoint { get; set; }

        public Assembly ReflectionAssembly { get; set; }

    }
}
