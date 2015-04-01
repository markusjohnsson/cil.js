using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class Emitter
    {
        public readonly Formatting Formatting;
        private TextWriter writer;

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

        public void EmitString(string s)
        {
            writer.Write(s);
        }

        public void EmitNewLine()
        {
            writer.Write(Formatting.NewLine);
        }

        public void EmitIndentation()
        {
            writer.Write(Formatting.Indentation);
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

        private static int CountLines(string s)
        {
            int n = 0;
            foreach (var c in s)
            {
                if (c == '\n') n++;
            }
            return n + 1;
        }

    }
}
