using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSTryBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("try {");
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
            foreach (var s in Statements)
                yield return s;
        }
    }

    class JSCatchBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public JSIdentifier Error { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("catch (");
            Error.Emit(emitter);
            emitter.EmitString(") {");
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
            foreach (var s in Statements)
                yield return s;

            if (Error != null)
                yield return Error;
        }
    }

    class JSFinallyBlock : JSStatement
    {
        public List<JSStatement> Statements { get; set; }

        public override void Emit(Emitter emitter)
        {
            emitter.EmitNewLineAndIndentation();
            emitter.EmitString("finally {");
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
            foreach (var s in Statements)
                yield return s;
        }
    }
}
