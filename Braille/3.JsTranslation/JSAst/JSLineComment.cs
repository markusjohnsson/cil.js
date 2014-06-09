using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSLineComment: JSExpression
    {
        public string Text { get; set; }

        public override string ToString(Formatting formatting)
        {
            return string.Join(formatting.NewLine + formatting.Indentation, Text.Split('\n').Select(t => "/* " + t.Replace("*/", "* /") + "*/"));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
