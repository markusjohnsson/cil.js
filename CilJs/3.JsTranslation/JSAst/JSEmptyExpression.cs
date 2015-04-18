using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
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
