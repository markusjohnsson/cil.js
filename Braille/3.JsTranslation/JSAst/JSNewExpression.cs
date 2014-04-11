using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNewExpression : JSExpression
    {
        public JSExpression Constructor { get; set; }
        public List<JSExpression> Arguments { get; set; }

        public JSNewExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString()
        {
            return String.Format("new {0}({1})", WrapIfNeeded(), Arguments == null ? "" : string.Join(",", Arguments));
        }

        private string WrapIfNeeded()
        {
            if (Constructor is JSIdentifier)
                return Constructor.ToString();
            else
                return "(" + Constructor.ToString() + ")";
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
