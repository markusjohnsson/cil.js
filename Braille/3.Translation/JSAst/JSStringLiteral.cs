using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSStringLiteral: JSExpression
    {
        private string _Value;
        public string Value
        {
            get
            {
                return _Value;
            }
            set
            {
                if (value == null)
                    throw new NotSupportedException();

                _Value = value;
            }
        }

        public override string ToString()
        {
            return string.Format(@"""{0}""", Value.Replace("\n", "\\n").Replace("\\", "\\\\").Replace("\"", "\\\""));
        }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
