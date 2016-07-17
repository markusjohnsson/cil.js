using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSWhileLoopStatement : JSStatement
    {
        public JSWhileLoopStatement()
        {
            Statements = new List<JSStatement>();
        }

        public JSExpression Condition { get; set; }

        public List<JSStatement> Statements { get; set; }

        public string Name { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("while ");
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

            foreach (var x in Statements)
                yield return x;
        }
    }
}
