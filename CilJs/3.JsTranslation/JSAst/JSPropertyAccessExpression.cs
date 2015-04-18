
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace CilJs.JSAst
{
    class JSPropertyAccessExpression : JSExpression
    {
        public static Regex SafeChars = new Regex(@"^[\da-zA-Z_\$]+$");

        public JSPropertyAccessExpression(JSExpression host, string property)
        {
            this.Host = host;
            this.Property = property;
        }

        public JSPropertyAccessExpression()
        {

        }

        public override string ToString(Formatting formatting)
        {
            if (SafeChars.IsMatch(Property))
                return Host.ToString(formatting) + "." + Property;
            else
                return new JSArrayLookupExpression
                {
                    Array = Host,
                    Indexer = new JSStringLiteral { Value = Property }
                }.ToString(formatting);
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

        private JSExpression _Host;
        public JSExpression Host
        {
            get
            {
                return _Host;
            }
            set
            {
                if (value == null) throw new ArgumentNullException();

                _Host = value;
            }
        }

        public override IEnumerable<JSExpression> GetChildren()
        {
            yield return Host;
        }
    }
}
