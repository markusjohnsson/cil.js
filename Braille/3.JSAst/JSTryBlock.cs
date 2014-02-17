using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSTryBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public override string ToString()
        {
            return "try {\n" + string.Join("\n", Statements) + "\n}";
        }
    }

    class JSCatchBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public JSIdentifier Error { get; set; }

        public override string ToString()
        {
            return "catch (" + Error.ToString() + ") {\n" + string.Join("\n", Statements) + "\n}";
        }
    }

    class JSFinallyBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public JSIdentifier Error { get; set; }

        public override string ToString()
        {
            return "finally {\n" + string.Join("\n", Statements) + "\n}";
        }
    }
}
