
using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace Braille.JSAst
{
    class JSPropertyAccessExpression : JSExpression
    {
        static Regex regex = new Regex(@"^[\da-zA-Z_\$]+$");

        public override string ToString()
        {
            if (regex.IsMatch(Property))
                return Host.ToString() + "." + Property;
            else
                return new JSArrayLookupExpression
                {
                    Array = Host,
                    Indexer = new JSStringLiteral { Value = Property }
                }.ToString();
        }

        public string Property { get; set; }

        public JSExpression Host { get; set; }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Host;
        }
    }
}
