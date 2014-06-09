using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.JSAst
{
    static class JSFactory
    {
        #region Assignment
        public static JSExpression Assignment(JSExpression asignee, JSExpression value)
        {
            return new JSBinaryExpression
            {
                Left = asignee,
                Operator = "=",
                Right = value
            };
        }
        public static JSExpression Assignment(string identifier, JSExpression value)
        {
            return Assignment(Identifier(identifier), value);
        }
        #endregion

        #region Identifier

        public static JSExpression Identifier(params string[] ns)
        {
            if (ns.Length == 0)
                throw new ArgumentException("ns");

            if (ns.Length == 1)
            {
                return new JSIdentifier { Name = ns[0] };
            }
            else
            {
                return new JSPropertyAccessExpression
                {
                    Host = Identifier(ns.Take(ns.Length - 1).ToArray()),
                    Property = ns.Last()
                };
            }
        }

        public static JSExpression Identifier(JSExpression ifier, params string[] ns)
        {
            if (ns.Length == 0)
                return ifier;

            if (ns.Length == 1)
            {
                return new JSPropertyAccessExpression
                {
                    Host = ifier,
                    Property = ns[0]
                };
            }
            else
            {
                return new JSPropertyAccessExpression
                {
                    Host = Identifier(ifier, ns.Take(ns.Length - 1).ToArray()),
                    Property = ns.Last()
                };
            }
        }
        #endregion


    }
}
