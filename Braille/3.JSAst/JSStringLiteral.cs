using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSStringLiteral: JSExpression
    {
        public string Value { get; set; }

        public override string ToString()
        {
            return string.Format(@"""{0}""", Value);
        }
    }
}
