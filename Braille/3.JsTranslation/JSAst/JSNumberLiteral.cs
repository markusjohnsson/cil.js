using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSNumberLiteral: JSExpression
    {
        public bool IsHex { get; set; }

        public double Value { get; set; }

        public override string ToString(Formatting formatting)
        {
            return IsHex ? "0x"+((int)Value).ToString("X") : Value.ToString(CultureInfo.InvariantCulture);
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
