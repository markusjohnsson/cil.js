using Braille.Ast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Analysis.Passes
{
    interface IRewriter: IAnalysisPass
    {
    }

    interface IAnalysisPass
    {
        void Run(CilMethod method);
    }
}
