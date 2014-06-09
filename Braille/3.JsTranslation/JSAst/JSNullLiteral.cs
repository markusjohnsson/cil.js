using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNullLiteral: JSExpression
    {
        public override string ToString(Formatting formatting)
        {
            return "null";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
