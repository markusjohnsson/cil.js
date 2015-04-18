using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSTemplatedRawExpression: JSExpression
    {
        public JSTemplatedRawExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString(Formatting formatting)
        {
            return string.Format(TemplateString, Arguments.Select(a => (object)a.ToString(formatting)).ToArray());
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Arguments;
        }

        public string TemplateString { get; set; }

        public List<JSExpression> Arguments { get; set; }
    }
}
