
namespace Braille.JSAst
{
    class JSPropertyAccessExpression: JSExpression
    {
        public override string ToString()
        {
            return Host.ToString() + "." + Property;
        }

        public string Property { get; set; }

        public JSExpression Host { get; set; }
    }
}
