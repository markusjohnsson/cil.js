using Braille.Ast;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.Analysis
{
    abstract class FlowControlPass
    {
        private Stack<OpExpression> processStack;
        
        public FlowControlPass()
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

    class StackAnalyzer
    {
        public void Analyze(CilMethod method, List<OpExpression> infos)
        {
            if (infos.Any() == false)
                return;

            infos.First().StackBefore = new List<StackUseDefinition>();

            var methodBody = method
                .ReflectionMethod
                .GetMethodBody();

            var processStack = new Stack<OpExpression>();
            processStack.Push(infos.First());

            //foreach (var opInfo in infos)
            while (processStack.Any())
            {
                var opInfo = processStack.Pop();

                //
                // Part I

                var newStack = GetStackAfter(opInfo);

                //
                // Part II: update branch targets

                UpdateTargets(processStack, opInfo, newStack);
            }
        }

        private static void UpdateTargets(Stack<OpExpression> processStack, OpExpression opInfo, Stack<StackUseDefinition> newStack)
        {
            foreach (var target in opInfo.Targets)
            {
                if (target.IsHandlerStart)
                {
                    newStack.Push(new StackUseDefinition { Definitions = new List<Node> { new ExceptionNode() } });
                }

                if (UpdateTargetStack(newStack, target))
                    processStack.Push(target);

                if (target.IsHandlerStart)
                {
                    newStack.Pop();
                }
            }
        }

        private static Stack<StackUseDefinition> GetStackAfter(OpExpression opInfo)
        {
            var newStack = new Stack<StackUseDefinition>(
                opInfo.StackBefore ?? Enumerable.Empty<StackUseDefinition>());

            if (opInfo.InstructionPopCount == null)
            {
                newStack.Clear();
            }
            else
            {
                for (var i = 0; i < opInfo.InstructionPopCount; i++)
                {
                    newStack.Pop();
                }
            }

            for (var i = 0; i < opInfo.PushCount; i++)
            {
                newStack.Push(
                    new StackUseDefinition
                    {   
                        Definitions = new List<Node> { opInfo }
                    });
            }
            return newStack;
        }

        private static bool UpdateTargetStack(Stack<StackUseDefinition> newStack, OpExpression target)
        {
            var stackList = newStack.Reverse().ToList();

            var changed = false;
            if (target.StackBefore == null)
            {
                target.StackBefore = stackList
                    .Select(
                        n => new StackUseDefinition
                        {
                            Usage = target,
                            Definitions = n.Definitions.ToList()
                        })
                    .ToList();

                changed = true;
            }
            else
            {
                // Merging stacks described in ECMA - 335, III.1.8.1.3

                for (var i = 0; i < stackList.Count; i++)
                {
                    var oldDef = target.StackBefore[i];
                    var newDef = stackList[i];

                    var beforeCount = oldDef.Definitions.Count;

                    oldDef.Definitions = oldDef.Definitions.Concat(newDef.Definitions).Distinct().ToList();

                    if (oldDef.Definitions.Count != beforeCount)
                        changed = true;
                }
            }
            return changed;
        }

    }
}
