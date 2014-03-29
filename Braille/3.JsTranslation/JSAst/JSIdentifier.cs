using Braille.JsTranslation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    class JSIdentifier : JSExpression
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
                if (string.IsNullOrWhiteSpace(value))
                    throw new InvalidOperationException();
                _Name = value;
            }
        }

        public override string ToString()
        {
            return Name;
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield break;
        }

        public static JSExpression Create(params string[] ns)
        {
            if (ns.Length == 1)
            {
                return new JSIdentifier { Name = ns[0] };
            }
            else
            {
                return new JSPropertyAccessExpression
                {
                    Host = Create(ns.Take(ns.Length - 1).ToArray()),
                    Property = ns.Last()
                };
            }
        }
        public static JSExpression Create(JSIdentifier ifier, params string[] ns)
        {
            return Create(ns.StartWith(ifier.Name).ToArray());
        }
    }
}
