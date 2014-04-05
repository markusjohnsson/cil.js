using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSReturnExpression : JSExpression
    {
        public JSExpression Expression { get; set; }

        public override string ToString()
        {
            if (Expression == null)
                return "return";
            else
                return string.Format("return {0}", Expression.ToString());
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
