using System;
using System.IO;

namespace CilJs.JSAst
{
    class Emitter
    {
        public readonly Formatting Formatting;
        private TextWriter writer;

        private long position;
        public long Position { get { return position; } }

        public void EmitMultiLine(string value)
        {
            bool first = true;
            foreach (var s in value.Split('\n'))
            {
                if (first)
                {
                    first = false;
                }
                else
                {
                    EmitNewLine();
                }

                EmitString(s);
            }
        }

        public int Line { get; set; }

        public Emitter(Formatting formatting, TextWriter writer)
        {
            this.Formatting = formatting;
            this.writer = writer;
        }

        public void EmitParenthesized(JSExpression node)
        {
            EmitString("(");
            node.Emit(this);
            EmitString(")");
        }

        public void Emit(JSExpression node)
        {
            node.Emit(this);
        }

        public void EmitString(string s)
        {
            EmitString(s, false);
        }

        private void EmitString(string s, bool allowNewline)
        {
            if (s == null || (s.Contains("\n") && allowNewline == false))
                throw new ArgumentNullException("s");

            position += s.Length;
            writer.Write(s);
        }

        public void EmitNewLine()
        {
            EmitString(Formatting.NewLine, true);
            Line += 1;
        }

        public void EmitIndentation()
        {
            EmitString(Formatting.Indentation);
        }

        public void EmitBracketed(JSExpression node)
        {
            EmitString("[");
            node.Emit(this);
            EmitString("]");
        }

        public void EmitParenthesizedIf(JSExpression node, bool condition)
        {
            if (condition)
                EmitParenthesized(node);
            else
                node.Emit(this);
        }

        public void EmitNewLineAndIndentation()
        {
            EmitNewLine();
            EmitIndentation();
        }
    }
}
