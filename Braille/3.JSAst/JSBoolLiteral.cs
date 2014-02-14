using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSBoolLiteral: JSExpression
    {
        public bool Value { get; set; }

        public override string ToString()
        {
            return Value ? "true": "false";
        }
    }
}
