using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSBoolLiteral: JSExpression
    {
        public bool Value { get; set; }

        public override string ToString(Formatting formatting)
        {
            return Value ? "true": "false";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
