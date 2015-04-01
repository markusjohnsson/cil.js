using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSBoolLiteral: JSExpression
    {
        public bool Value { get; set; }

        public override void Emit(Emitter emitter)
        {
            if (Value)
                emitter.EmitString("true");
            else
                emitter.EmitString("false");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
