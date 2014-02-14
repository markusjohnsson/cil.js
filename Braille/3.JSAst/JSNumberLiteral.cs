using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNumberLiteral: JSExpression
    {
        public bool IsHex { get; set; }

        public double Value { get; set; }

        public override string ToString()
        {
            return IsHex ? "0x"+((int)Value).ToString("X") : Value.ToString();
        }
    }
}
