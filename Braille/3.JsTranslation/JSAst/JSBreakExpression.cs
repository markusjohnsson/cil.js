using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSBreakExpression: JSExpression
    {
        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("break");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
