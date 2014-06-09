using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSEmptyExpression : JSExpression
    {
        public override string ToString(Formatting formatting)
        {
            return "";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
