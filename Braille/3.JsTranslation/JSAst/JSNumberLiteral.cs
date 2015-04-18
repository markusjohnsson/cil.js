using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    enum TypeHint
    {
        None,
        Integer,
        Float
    }

    class JSNumberLiteral: JSExpression
    {
        public bool IsHex { get; set; }

        public double Value { get; set; }

        public override string ToString(Formatting formatting)
        {
            if (IsHex)
                return "0x"+((ulong)Value).ToString("X");

            var value = Value.ToString(CultureInfo.InvariantCulture);

            if (TypeHint == TypeHint.Integer)
                return "(" + value + "|0)";

            if (TypeHint == TypeHint.Float)
                return "(+" + value + ")";

            return value;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }

        public TypeHint TypeHint { get; set; }
    }
}
