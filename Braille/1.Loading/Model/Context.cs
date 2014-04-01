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
    }
}
