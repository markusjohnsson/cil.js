using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.JSAst
{
    class JSVariableDelcaration : JSExpression
    {
        private string _Name;
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                if (value == "locs")
                    throw new NotSupportedException();
                _Name = value;
            }
        }
        public JSExpression Value { get; set; }
        public bool ForceDeclaration { get; set; }

        public override void Emit(Emitter emitter)
        {
            if (ForceDeclaration)
            {
                emitter.EmitString("var ");
                emitter.EmitString(Name);

                if (Value == null)
                    return;

                emitter.EmitString(" = ");
                Value.Emit(emitter);
            }
            else
            {
                if (Value == null)
                    return;

                emitter.EmitString(Name);
                emitter.EmitString(" = ");
                Value.Emit(emitter);
            }
        }


        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Value;
        }

    }
}
