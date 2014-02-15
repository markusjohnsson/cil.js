using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSArrayLookupExpression: JSExpression
    {
        public JSExpression Array { get; set; }
        public JSExpression Indexer { get; set; }

        public override string ToString()
        {
            return string.Format("({0})[{1}]", Array.ToString(), Indexer.ToString());
        }
    }
}
