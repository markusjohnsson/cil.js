using CilJs.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSBinaryExpression: JSExpression
    {
        private JSExpression _Left;
        public JSExpression Left
        {
            get
            {
                return _Left;
            }
            set
            {
                if (value == null) throw new ArgumentNullException();
                _Left = value;
            }
        }
        private JSExpression _Right;
        public JSExpression Right
        {
            get
            {
                return _Right;
            }
            set
            {
                if (value == null) throw new ArgumentNullException();
                _Right = value;
            }
        }

        public string Operator { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitParenthesizedIf(Left, Left is JSBinaryExpression);
            emitter.EmitString(" ");
            emitter.EmitString(Operator);
            emitter.EmitString(" ");
            emitter.EmitParenthesizedIf(Right, Right is JSBinaryExpression);
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Left;
            yield return Right;
        }
    }
}
