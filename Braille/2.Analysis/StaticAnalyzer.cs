using Braille.Ast;
using Braille.Loading.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Analysis
{
    class StaticAnalyzer
    {
        public void Analyze(Context ctx)
        {
            var expressionBuilder = new OpExpressionBuilder(ctx);
            foreach (var asm in ctx.Assemblies)
            {
                foreach (var t in asm.Types)
                {
                    if (t.IsIgnored || t.IsUserDelegate)
                        continue;

                    foreach (var method in t.Methods)
                    {
                        if (method.NeedTranslation)
                        {
                            var opInfos = expressionBuilder.Build(method); // static analysis happens here

                            // Turn stack based OpInstructions into variable based OpExpressions

                            // - Flow analysis to determine from which instruction(s) each instruction can get its arguments from
                            var stackAnalyzer = new StackAnalyzer();
                            stackAnalyzer.Analyze(method, opInfos);

                            // - Introduce variables to replace stack based on flow analysis
                            ReplaceStack(method, opInfos);

                            var localsAnalyzer = new LocalsAnalyzer();
                            localsAnalyzer.Analyze(method, opInfos);

                            opInfos = opInfos
                                .Where(o => o.StackBefore != null) // unreachable
                                .Where(
                                    o => false == (
                                        o.Instruction.OpCode.Name == "br.s" &&
                                        o.Targeting.Count == 1 && o.Targeting[0] == o.Prev &&
                                        o.Targets.Count == 1 && o.Targets[0] == o.Next))
                                .ToList();

                            // 
                            var typeInference = new TypeInference(ctx.ReflectionUniverse);
                            typeInference.InferTypes(method, opInfos);

                            var typeUsage = new TypeUsageAnalysis(ctx.ReflectionUniverse);
                            typeUsage.FindTypes(method, opInfos);

                            method.OpTree = opInfos;
                        }
                    }
                }
            }
        }

        private static void ReplaceStack(CilMethod method, IList<OpExpression> opInfos)
        {
            var counter = 0;

            foreach (var opInfo in opInfos)
            {
                if (opInfo.StackBefore == null)
                    continue;

                foreach (var usage in opInfo.StackBefore.Skip(opInfo.StackBefore.Count() - opInfo.GetRealPopCount()))
                {
                    usage.Variable = new VariableInfo
                    {
                        Name = string.Format("st_{0:X2}", counter++),
                        ResultType = usage.Type
                    };

                    foreach (var def in usage.Definitions)
                    {
                        if (def is OpExpression)
                        {
                            ((OpExpression)def).StoreLocations.Add(usage.Variable);
                        }
                        else if (def is ExceptionNode)
                        {
                            ((ExceptionNode)def).StoreLocations.Add(usage.Variable);
                        }
                        else
                        {
                            throw new NotImplementedException();
                        }
                    }
                }
            }
        }

    }
}
