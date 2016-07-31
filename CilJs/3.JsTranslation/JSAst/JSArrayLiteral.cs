using System.Collections.Generic;

namespace CilJs.JSAst
{
    class JSArrayLiteral: JSExpression
    {
        public IEnumerable<JSExpression> Values { get; set; }
        
        public bool Inline { get; set; }

        public override void Emit(Emitter emitter)
        {
            if (Values == null || Values.IsEmpty())
            {
                emitter.EmitString("[]");
                return;
            }

            emitter.EmitString("[");

            emitter.Formatting.IncreaseIndentation();

            {
                if (!Inline)
                {
                    emitter.EmitNewLine();
                    emitter.EmitIndentation();
                }

                bool first = true;

                foreach (var c in GetChildren())
                {
                    if (!first)
                    {
                        emitter.EmitString(",");

                        if (!Inline)
                        {
                            emitter.EmitNewLine();
                            emitter.EmitIndentation();
                        }
                        else
                        {
                            emitter.EmitString(" ");
                        }
                    }

                    first = false;

                    emitter.Emit(c);
                }

                if (!Inline)
                {
                    emitter.EmitNewLine();
                }
            }

            emitter.Formatting.DecreaseIndentation();

            if (!Inline)
                emitter.EmitIndentation();

            emitter.EmitString("]");
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            if (Values == null)
                yield break;

            foreach (var v in Values)
                yield return v;
        }
    }
}
