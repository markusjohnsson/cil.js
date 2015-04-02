using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    enum TypeHint
    {
        None,
        Integer,
        Float
    }

    class JSNumberLiteral : JSExpression
    {
        public bool IsHex { get; set; }

        public double Value { get; set; }

        public override void Emit(Emitter emitter)
        {
            if (IsHex)
            {
                emitter.EmitString("0x");
                emitter.EmitString(((ulong)Value).ToString("X"));
                return;
            }

            var value = Value.ToString(CultureInfo.InvariantCulture);

            if (TypeHint == TypeHint.Integer)
            {
                emitter.EmitString("(");
                emitter.EmitString(value);
                emitter.EmitString("|0)");
            }
            else if (TypeHint == TypeHint.Float)
            {
                emitter.EmitString("(+");
                emitter.EmitString(value);
                emitter.EmitString(")");
            }
            else
            {
                emitter.EmitString(value);
            }
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }

        public TypeHint TypeHint { get; set; }
    }
}
