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

        public override string ToString()
        {
            var lines = Text.Split('\n');
            var s = "";
            foreach (var line in lines)
                s += "// " + line + "\n";
            return s;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
