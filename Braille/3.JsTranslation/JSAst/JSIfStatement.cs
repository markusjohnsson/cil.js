using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSIfStatement : JSStatement
    {
        public JSIfStatement()
        {
            Statements = new List<JSStatement>();
        }

        public JSExpression Condition { get; set; }

        public List<JSStatement> Statements { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("if");
            emitter.EmitParenthesized(Condition);
            emitter.EmitString("{");

            emitter.Formatting.IncreaseIndentation();

            if (Statements != null)
            {
                foreach (var s in Statements)
                {
                    emitter.EmitNewLineAndIndentation();
                    s.Emit(emitter);
                }
            }

            emitter.Formatting.DecreaseIndentation();

            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("}");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Condition;

            if (Statements != null)
            {
                foreach (var s in Statements)
                    yield return s;
            }
        }
    }
}
