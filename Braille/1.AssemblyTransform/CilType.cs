using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Reflection;
using Braille.JSAst;

namespace Braille.AssemblyTransform
{
    class CilType
    {
        public string Namespace { get; set; }
        public string Name { get; set; }
        public IEnumerable<CilMethod> Methods { get; set; }
        public string BaseType { get; set; }
        public Type ReflectionType { get; set; }

    }
}
