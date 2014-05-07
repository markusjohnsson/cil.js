using Braille.Ast;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Analysis
{
    abstract class AbstractFlowControlPass
    {
        private Stack<OpExpression> processStack;

        public AbstractFlowControlPass()
        {
            processStack = new Stack<OpExpression>();
        }

        public void Run(CilMethod method, List<OpExpression> infos)
        {
            processStack.Push(infos.First());

            //foreach (var opInfo in infos)
            while (processStack.Any())
            {
                var opInfo = processStack.Pop();

                Process(opInfo);
            }
        }

        protected virtual void Process(OpExpression opInfo)
        {
        }

        protected void MarkTargetForUpdate(OpExpression target)
        {
            processStack.Push(target);
        }
    }
}
