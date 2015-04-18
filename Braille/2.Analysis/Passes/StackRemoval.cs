using CilJs.Ast;
using IKVM.Reflection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CilJs.Analysis.Passes
{
    class StackRemovalPass: IRewriter
    {
        public void Run(CilMethod method)
        {
            var counter = 0;

            foreach (var opInfo in method.OpTree)
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
