
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using CilJs.JSAst;

namespace CilJs.JsTranslation
{
    class SourceMapBuilder
    {
        public SourceMapBuilder(string jsOutputName, string sourceRoot)
        {
            this.jsOutputName = jsOutputName;
            this.sourceRoot = sourceRoot;
        }
        private List<SourceMapping> mappings = new List<SourceMapping>();
        private readonly string jsOutputName;
        private readonly string sourceRoot;

        class SourceMapping
        {
            public int JsLine;
            public int JsColumn;
            public string DocumentName;
            public int StartLine;
            public int EndLine;
            public int StartColumn;
            public int EndColumn;

            public SourceMapping(int jsLine, int jsColumn, string documentName, int startLine, int endLine, int startColumn, int endColumn)
            {
                this.JsLine = jsLine;
                this.JsColumn = jsColumn;
                this.DocumentName = documentName;
                this.StartLine = startLine;
                this.EndLine = endLine;
                this.StartColumn = startColumn;
                this.EndColumn = endColumn;
            }
        }

        internal void AddMapping(int jsLine, int jsColumn, string documentName, int startLine, int endLine, int startColumn, int endColumn)
        {
            this.mappings.Add(new SourceMapping(jsLine, jsColumn, documentName, startLine, endLine, startColumn, endColumn));
        }

        internal void Write(TextWriter writer)
        {
            // foreach (var mapping in mappings)
            // {
            //     // yield return JSFactory
            //     //     .Comment($"{mapping.DocumentName}:{mapping.StartLine}:{mapping.StartColumn} ")
            //     //     .ToStatement()
            //     //     ;
            // }

            if (mappings.Count == 0)
                return;

            var sources = mappings
                .Select(s => s.DocumentName)
                .Distinct()
                .ToList()
                ;

            var max = mappings.Max(m => m.JsLine);
            var q = mappings.ToLookup(m => m.JsLine);
            var mapping = new StringBuilder();

            int previousSourceLine = -1;
            int previousSourceIndex = -1;
            int previousSourceColumn = -1;

            for (var i = 0; i < max; i++)
            {
                if (i > 0)
                    mapping.Append(';');

                int previousJsColumn = -1;

                foreach (var m in q[i].OrderBy(m => m.JsColumn))
                {
                    if (previousJsColumn != -1)
                        mapping.Append(',');

                    int jsColumn = m.JsColumn;
                    int relativeJsColumn = previousJsColumn == -1 ? jsColumn : jsColumn - previousJsColumn;

                    int sourceIndex = sources.IndexOf(m.DocumentName);
                    int relativeSourceIndex = previousSourceIndex == -1 ? sourceIndex : sourceIndex - previousSourceIndex;

                    int sourceLine = m.StartLine;
                    int relativeSourceLine = previousSourceLine == -1 ? sourceLine : sourceLine - previousSourceLine;

                    int sourceColumn = m.StartColumn;
                    int relativeSourceColumn = previousSourceColumn == -1 ? sourceColumn : sourceColumn - previousSourceColumn;

                    Base64VLQ.Encode(mapping, relativeJsColumn);
                    Base64VLQ.Encode(mapping, relativeSourceIndex);
                    Base64VLQ.Encode(mapping, relativeSourceLine);
                    Base64VLQ.Encode(mapping, relativeSourceColumn);

                    previousSourceIndex = sourceIndex;
                    previousJsColumn = jsColumn;
                    previousSourceLine = sourceLine;
                }
            }

            var root = new Uri(sourceRoot);
            string MakeRelative(string x)
            {
                if (x == "") return x;
                return root.MakeRelativeUri(new Uri(x)).ToString();
            }

            writer.WriteLine("{");
            writer.WriteLine("\"version\": 3,");
            writer.WriteLine("\"file\": \"" + jsOutputName + "\",");
            writer.WriteLine("\"sourceRoot\": \"\",");
            writer.WriteLine("\"names\": [],");
            writer.WriteLine("\"sources\": [\"" + string.Join("\",\"", sources.Select(MakeRelative)) + "\"],");
            writer.WriteLine("\"mappings\": \"" + mapping.ToString() + "\"");
            writer.WriteLine("}");

        }
    }
    public class Base64VLQ
    {
        // A Base64 VLQ digit can represent 5 bits, so it is base-32.
        private const int VLQ_BASE_SHIFT = 5;
        private const int VLQ_BASE = 1 << VLQ_BASE_SHIFT;

        // A mask of bits for a VLQ digit (11111), 31 decimal.
        private const int VLQ_BASE_MASK = VLQ_BASE - 1;

        // The continuation bit is the 6th bit.
        private const int VLQ_CONTINUATION_BIT = VLQ_BASE;

        private static int ToVLQSigned(int value)
        {
            if (value < 0)
            {
                return ((-value) << 1) + 1;
            }
            else
            {
                return (value << 1) + 0;
            }
        }

        public static void Encode(StringBuilder output, int val)
        {
            val = ToVLQSigned(val);
            do
            {
                int digit = val & VLQ_BASE_MASK;
                val = (int)(((uint)val) >> VLQ_BASE_SHIFT);
                if (val > 0)
                {
                    digit |= VLQ_CONTINUATION_BIT;
                }
                output.Append(ToBase64(digit) + "");
            } while (val > 0);
        }

        static char ToBase64(int d)
        {
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[d];
        }
    }

}