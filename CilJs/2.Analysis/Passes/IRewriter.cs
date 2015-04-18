using CilJs.Ast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.Analysis.Passes
{
    interface IAnalysisPass
    {
        void Run(CilMethod method);
    }

    interface IRewriter: IAnalysisPass
    {
    }
}
