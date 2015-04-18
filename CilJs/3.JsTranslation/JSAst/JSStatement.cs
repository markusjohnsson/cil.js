using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    abstract class JSStatement : JSExpression
    {   
    }

    class JSExpressionStatement: JSStatement
    {
        private JSExpression _Expression;
        public JSExpression Expression
        {
            get
            {
                return _Expression;
            }
            set
            {
                if (value == null)
                    throw new InvalidOperationException();
                _Expression = value;
            }
        }

        public JSExpressionStatement()
        {
        }

        public JSExpressionStatement(JSExpression expression)
        {
            Expression = expression;
        }

        public override void Emit(Emitter emitter)
        {
            if (Expression is JSEmptyExpression)
                return;

            if (Expression is JSLineComment)
            {
                Expression.Emit(emitter);
                return;
            }

            var loc = emitter.Position;
            Expression.Emit(emitter);

            if (loc != emitter.Position)
                emitter.EmitString(";");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Expression;
        }
    }
}
