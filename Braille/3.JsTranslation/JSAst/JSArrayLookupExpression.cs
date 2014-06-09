using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSArrayLookupExpression: JSExpression
    {
        private JSExpression _Array;
        public JSExpression Array
        {
            get
            {
                return _Array;
            }
            set
            {
                if (value == null)
                    throw new InvalidOperationException();
                _Array = value;
            }
        }
        private JSExpression _Indexer;
        public JSExpression Indexer
        {
            get
            {
                return _Indexer;
            }
            set
            {
                if (value == null)
                    throw new InvalidOperationException();
                _Indexer = value;
            }
        }

        public override string ToString(Formatting formatting)
        {
            return string.Format("({0})[{1}]", Array.ToString(formatting), Indexer.ToString(formatting));
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Array;
            yield return Indexer;
        }
    }
}
