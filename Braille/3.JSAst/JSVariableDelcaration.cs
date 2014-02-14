using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSVariableDelcaration : JSExpression
    {
        public string Name { get; set; }
        public JSExpression Value { get; set; }
    }
}
