using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSSwitchStatement: JSStatement
    {

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("switch ");
            emitter.EmitParenthesized(Value);
            emitter.EmitString("{");

            emitter.Formatting.IncreaseIndentation();
            
            if (Statements != null)
            {
                foreach (var stmnt in Statements)
                {
                    emitter.EmitNewLineAndIndentation();
                    stmnt.Emit(emitter);
                }
            }

            emitter.Formatting.DecreaseIndentation();
            
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("}");
        }

        public JSIdentifier Value { get; set; }

        public List<JSStatement> Statements { get; set; }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Value;

            foreach (var s in Statements)
                yield return s;
        }
    }
}
