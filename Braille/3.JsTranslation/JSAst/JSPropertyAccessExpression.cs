
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
namespace Braille.JSAst
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

        public override void Emit(Emitter emitter)
        {
            if (SafeChars.IsMatch(Property))
            {
                Host.Emit(emitter);
                emitter.EmitString(".");
                emitter.EmitString(Property);
            }
            else
            {
                new JSArrayLookupExpression
                {
                    Array = Host,
                    Indexer = new JSStringLiteral { Value = Property }
                }.Emit(emitter);
            }
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
