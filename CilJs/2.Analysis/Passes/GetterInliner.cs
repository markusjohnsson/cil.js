using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CilJs.Ast;

namespace CilJs.Analysis.Passes
{
    class GetterInliner : IAnalysisPass
    {
        public void Run(CilMethod method)
        {
            if (method.IsVirtual)
                return;

            if (method.Locals.Length > 0)
                return;

            if (method.Block.Ast.OfType<OpExpression>().Count() == 1)
            {
                method.CanInline = true;
            }
        }
    }
}
