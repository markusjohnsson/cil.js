using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Braille.JSAst
{
    class JSTemplatedRawExpression : JSExpression
    {
        static Regex TemplateRegex = new Regex("{([0-9]+)}");
        public JSTemplatedRawExpression()
        {
            Arguments = new List<JSExpression>();
        }

        public override void Emit(Emitter emitter)
        {
            foreach (var part in GetParts())
            {
                if (part is TemplateToken)
                    emitter.EmitString(((TemplateToken)part).Value);
                if (part is PlaceToken)
                    Arguments[((PlaceToken)part).Index].Emit(emitter);
            }
        }

        class P { }
        class TemplateToken : P { public string Value; }
        class PlaceToken : P { public int Index; }

        IEnumerable<P> GetParts()
        {
            var s = TemplateString;
            var partStart = 0;
            bool inPlaceholder = false;
            var placeHolderStart = 0;
            for (int i = 0; i < s.Length; i++)
            {
                var c = s[i];
                if (inPlaceholder)
                {
                    if (c == '}')
                    {
                        if (placeHolderStart != i - 1)
                        {
                            if (partStart != placeHolderStart)
                                yield return new TemplateToken { Value = s.Substring(partStart, placeHolderStart - partStart) };
                            yield return new PlaceToken { Index = int.Parse(s.Substring(placeHolderStart + 1, i - 1 - placeHolderStart)) };
                            partStart = i + 1;
                        }
                        inPlaceholder = false;

                    }
                    else if (c < '0' || c > '9')
                    {
                        inPlaceholder = false;
                    }
                }

                if (c == '{')
                {
                    inPlaceholder = true;
                    placeHolderStart = i;
                }
            }
            if (partStart < s.Length)
                yield return new TemplateToken { Value = s.Substring(partStart) };
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            return Arguments;
        }

        public string TemplateString { get; set; }

        public List<JSExpression> Arguments { get; set; }
    }
}
