using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSIdentifier : JSExpression
    {
        public string Name { get; set; }

        public override string ToString()
        {
            return Name;
        }
    }
}
