using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSStatement : JSExpression
    {
        public JSExpression Expression { get; set; }

        public override string ToString()
        {
            return Expression.ToString() + ";";
        }
    }
}
