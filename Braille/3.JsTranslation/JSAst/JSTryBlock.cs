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
            var result = "try {\n" + string.Join("\n", Statements) + "\n}";

            if (InsertEmptyCatch)
            {
                result += "catch (e) {}";
            }

            return result;
        }

        public bool InsertEmptyCatch { get; set; }
    }

    class JSCatchBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public JSIdentifier Error { get; set; }

        public override string ToString()
        {
            return string.Format("catch ({0}) {{\n{1}\n}}", Error, Statements == null ? "" : string.Join("\n", Statements));
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
