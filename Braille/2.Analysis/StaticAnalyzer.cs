using Braille.Analysis.Passes;
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
                        if (method.NeedTranslation && method.GetReplacement() == null)
                        {
                            foreach (var rewriter in GetPasses(ctx))
                            {
                                rewriter.Run(method);
                            }
                        }
                    }
                }
            }
        }

        public IEnumerable<IAnalysisPass> GetPasses(Context ctx)
        {
            yield return new OpExpressionBuilder(ctx);

            // - Flow analysis to determine from which instruction(s) each instruction can get its argument(s) from
            yield return new StackAnalyzer();

            yield return new StackRemovalPass();

            yield return new UnreachableRemoval();
            yield return new LocalsAnalyzer();
            yield return new TypeInference(ctx);
            yield return new TypeUsageAnalysis(ctx);
            yield return new InsertLabelsPass();
            
            yield return new CreateBlocksPass();
            yield return new AggregateBlocksPass();

            if (ctx.Settings.KeepFlatExpressions == false)
                yield return new AggregateExpressionsPass(ctx);


        }

    }
}
