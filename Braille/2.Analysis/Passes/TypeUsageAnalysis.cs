using Braille.Analysis.Passes;
using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class TypeUsageAnalysis: IAnalysisPass
    {
        private Universe universe;

        public TypeUsageAnalysis(Universe universe)
        {
            this.universe = universe;
        }

        public void Run(CilMethod method)
        {
            IEnumerable<OpExpression> opAst = method.OpTree;

            method.ReferencedTypes = opAst
                .SelectMany(op => FindTypes(method, op))
                .SelectMany(t => ExpandGenericTypes(t))
                .Distinct()
                .ToArray();
        }

        private IEnumerable<Type> ExpandGenericTypes(Type t)
        {
            if (t.IsGenericType)
            {
                foreach (var genericArgument in t.GetGenericArguments())
                    foreach (var g in ExpandGenericTypes(genericArgument))
                        yield return g;
            }
            yield return t;
        }

        private IEnumerable<Type> FindTypes(CilMethod method, OpExpression op)
        {
            var opc = op.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "initobj":
                case "isinst":
                case "newarr":
                case "box":
                    var d = (Type)op.Instruction.Data;
                    yield return d;
                    break;
                case "call":
                case "callvirt":
                    var mi = (MethodBase)op.Instruction.Data;
                    if (mi.IsGenericMethod)
                        foreach (var g in mi.GetGenericArguments())
                            yield return g;

                    if (mi.DeclaringType.IsInterface)
                        yield return mi.DeclaringType;

                    break;
                case "ldsfld":
                case "newobj":
                case "stsfld":
                    yield return ((MemberInfo)op.Instruction.Data).DeclaringType;
                    break;
                default:
                    break;
            }
        }
    }
}
