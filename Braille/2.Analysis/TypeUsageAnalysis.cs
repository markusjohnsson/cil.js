using Braille.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class TypeUsageAnalysis
    {
        private Universe universe;

        public TypeUsageAnalysis(Universe universe)
        {
            this.universe = universe;
        }

        public void FindTypes(CilMethod method, IEnumerable<OpExpression> opAst)
        {
            method.ReferencedTypes = opAst.SelectMany(op => FindTypes(method, op)).ToArray();
        }

        private IEnumerable<Type> FindTypes(CilMethod method, OpExpression op)
        {
            var opc = op.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;

            switch (opc_)
            {
                case "box":
                    var d = (IKVM.Reflection.Type)op.Instruction.Data;
                    if (d.IsGenericParameter)
                        yield return d;
                    break;
                case "initobj":
                case "isinst":
                case "newarr":
                    yield return (Type)op.Instruction.Data;
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
