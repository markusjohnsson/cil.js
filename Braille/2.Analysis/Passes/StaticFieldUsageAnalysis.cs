using Braille.Ast;
using Braille.Loading.Model;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis.Passes
{
    class StaticFieldUsageAnalysis : IAnalysisPass
    {
        private Universe universe;
        private Context context;

        public StaticFieldUsageAnalysis(Context context)
        {
            this.context = context;
            this.universe = context.ReflectionUniverse;
        }

        public void Run(CilMethod method)
        {
            IEnumerable<OpExpression> opAst = method.OpTree;

            foreach (var op in opAst)
                ProcessOp(op, op);
        }

        private void ProcessOp(OpExpression rootOp, OpExpression op)
        {
            rootOp.RequireFieldInitTypes = new List<Type>();

            var opc = op.Instruction.OpCode.Name;

            var i = opc.IndexOf(".");
            var opc_ = i > 0 ? opc.Substring(0, i) : opc;


            switch (opc_)
            {
                case "call":
                case "callvirt":
                    var mi = (MethodBase)op.Instruction.Data;

                    if (mi.DeclaringType.IsInterface)
                        rootOp.RequireFieldInitTypes.Add(mi.DeclaringType);

                    break;
                case "ldsfld":
                case "stsfld":
                    rootOp.RequireFieldInitTypes.Add(((MemberInfo)op.Instruction.Data).DeclaringType);
                    break;
                case "newobj":
                    var t = ((MemberInfo)op.Instruction.Data).DeclaringType;

                    while (t != null)
                    {
                        rootOp.RequireFieldInitTypes.Add(t);
                        t = t.BaseType;
                    }
                    break;
                default:
                    break;
            }

            foreach (var subop in op.Arguments.OfType<OpExpression>())
                ProcessOp(rootOp, subop);
        }
    }
}
