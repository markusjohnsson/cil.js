using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSEmptyExpression : JSExpression
    {
        public override void Emit(Emitter emitter)
        {
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }
    }
}
