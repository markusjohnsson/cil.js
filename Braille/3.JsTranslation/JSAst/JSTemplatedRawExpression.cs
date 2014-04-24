using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSTemplatedRawExpression: JSExpression
    {
        public JSTemplatedRawExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override string ToString()
        {
            return string.Format(TemplateString, Arguments.Cast<object>().ToArray());
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Arguments;
        }

        public string TemplateString { get; set; }

        public List<JSExpression> Arguments { get; set; }
    }
}
