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

        public static JSExpression Array(params JSExpression[] exprs)
        {
            return new JSArrayLiteral { Values = exprs.ToList() };
        }

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

        public static JSStatement Statement(JSExpression s)
        {
            return new JSExpressionStatement(s);
        }

        public static JSStatement RawStatement(string p)
        {
            return Statement(RawExpression(p));
        }

        public static JSExpression RawExpression(string p)
        {
            return new JSIdentifier { Name = p };
        }

        public static JSExpression Templated(string template, params JSExpression[] exprs)
        {
            return new JSTemplatedRawExpression { TemplateString = template, Arguments = exprs.ToList() };
        }

        public static JSExpression Truncate(JSExpression expr)
        {
            return new JSBinaryExpression { Left = expr, Operator = "|", Right = Number(0) };
        }

        public static JSExpression Number(int p)
        {
            return new JSNumberLiteral { Value = p };
        }

        public static JSExpression Hex(int p)
        {
            return new JSNumberLiteral { Value = p, IsHex = true };
        }

        public static JSExpression Hex(uint p)
        {
            return new JSNumberLiteral { Value = p, IsHex = true };
        }

        public static JSExpression Call(JSExpression function, params JSExpression[] args)
        {
            return new JSCallExpression { Function = function, Arguments = args.ToList() };
        }

        public static JSExpression String(string p)
        {
            return new JSStringLiteral { Value = p };
        }
    }
}
