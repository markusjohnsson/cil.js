using CilJs.Analysis.Passes;
using CilJs.Ast;
using CilJs.Loading.Model;
using Managed.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = Managed.Reflection.Type;

namespace CilJs.Analysis
{
    class TypeUsageAnalysis: IAnalysisPass
    {
        private Context context;

        public TypeUsageAnalysis(Context context)
        {
            this.context = context;
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
            if (t.IsGenericTypeDefinition)
            {
                yield return context.SystemTypes.UnboundGenericParameter;
            }

            if (t.IsArray)
            {
                foreach (var g in ExpandGenericTypes(t.GetElementType()))
                    yield return g;
            }

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
                case "castclass":
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
                case "ldtoken":
                    var type = op.Instruction.Data as Type;
                    if (type != null)
                        yield return type;
                    yield break;
                case "ldsfld":
                case "stsfld":
                case "newobj":
                    yield return ((MemberInfo)op.Instruction.Data).DeclaringType;
                    break;
                default:
                    break;
            }
        }
    }
}
