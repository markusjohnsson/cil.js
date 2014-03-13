
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace Braille.JSAst
{
    class JSPropertyAccessExpression : JSExpression
    {
        public static Regex SafeChars = new Regex(@"^[\da-zA-Z_\$]+$");

        public override string ToString()
        {
            if (SafeChars.IsMatch(Property))
                return Host.ToString() + "." + Property;
            else
                return new JSArrayLookupExpression
                {
                    Array = Host,
                    Indexer = new JSStringLiteral { Value = Property }
                }.ToString();
        }

        private string _Property;
        public string Property
        {
            get
            {
                return _Property;
            }
            set
            {
                if (value == null)
                    throw new NotSupportedException();

                _Property = value;
            }
        }

        public JSExpression Host { get; set; }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Host;
        }
    }
}
