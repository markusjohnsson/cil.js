using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSReturnExpression : JSExpression
    {
        public JSExpression Expression { get; set; }

        public override string ToString(Formatting formatting)
        {
            if (Expression == null)
                return "return";
            else
                return string.Format("return {0}", Expression.ToString(formatting));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
