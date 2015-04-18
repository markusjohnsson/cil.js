using CilJs.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSUnaryExpression: JSExpression
    {
        public string Operator { get; set; }

        public JSExpression Operand { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitString("(");
            emitter.EmitString(Operator);
            emitter.EmitParenthesized(Operand);
            emitter.EmitString(")");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Operand;
        }
    }
}
