using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSThrowExpression: JSExpression
    {

        public override string ToString(Formatting formatting)
        {
            return "throw " + Expression.ToString(formatting);
        }

        public JSExpression Expression { get; set; }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
