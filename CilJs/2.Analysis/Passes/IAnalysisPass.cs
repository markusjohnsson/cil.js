using CilJs.Ast;

namespace CilJs.Analysis.Passes
{
    interface IAnalysisPass
    {
        void Run(CilMethod method);
    }
}
