using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSNewExpression : JSExpression
    {
        public JSExpression Constructor { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSNewExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString(Formatting formatting)
        {
            return String.Format("new {0}({1})", WrapIfNeeded(formatting), Arguments == null ? "" : string.Join(",", Arguments.Select(a => a.ToString(formatting))));
        }

        private string WrapIfNeeded(Formatting formatting)
        {
            if (Constructor is JSIdentifier)
                return Constructor.ToString(formatting);
            else
                return "(" + Constructor.ToString(formatting) + ")";
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Constructor;
            if (Arguments != null)
            {
                foreach (var x in Arguments)
                    yield return x;
            }
        }
    }
}
