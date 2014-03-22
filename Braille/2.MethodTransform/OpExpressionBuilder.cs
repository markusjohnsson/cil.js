using Braille.AssemblyTransform;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Threading;

namespace Braille.MethodTransform
{
    class OpExpression : OpNode
    {
        public OpInstruction Instruction;
        public List<OpInstruction> Prefixes;
        public List<OpExpression> Targets = new List<OpExpression>();
        public List<OpExpression> Targeting = new List<OpExpression>();
        public OpExpression Next;
        public OpExpression Prev;
        public List<StackUseDefinition> StackBefore;
        public int? InstructionPopCount;
        public int PushCount;
        public int Position { get { return Prefixes.EndWith(Instruction).Min(i => i.Position); } }

        public List<VariableInfo> StoreLocations = new List<VariableInfo>();

        public IEnumerable<VariableInfo> Arguments
        {
            get
            {
                if (StackBefore == null)
                    return Enumerable.Empty<VariableInfo>();
                else
                {
                    return StackBefore.Skip(StackBefore.Count - GetRealPopCount()).Select(v => v.Variable);
                }
            }
        }

        public int GetRealPopCount()
        {
            return InstructionPopCount ?? StackBefore.Count;
        }

        public OpExpression(OpInstruction op, List<OpInstruction> prefixes, int? popCount, int pushCount)
        {
            this.Instruction = op;
            this.Prefixes = prefixes;
            this.InstructionPopCount = popCount;
            this.PushCount = pushCount;
        }

        public override string ToString()
        {
            return Instruction.ToString() +
                (StackBefore != null ?
                    "  (" + string.Join(",", StackBefore.Select(l => l.Variable == null ? "*" : l.Variable.Name)) + ") " :
                    "  ()") +
                (StoreLocations.Any() ?
                    " -> (" + string.Join(",", StoreLocations.Select(l => l.Name)) + ")" :
                    "");
        }

        public bool IsLabel { get; set; }

        public bool IsHandlerStart { get; set; }

    }

    class VariableInfo : OpNode
    {
        public string Name;
    }

    class ExceptionNode : OpNode
    {
        public List<VariableInfo> StoreLocations = new List<VariableInfo>();
    }

    class StackUseDefinition
    {
        public OpExpression Usage;
        public List<OpNode> Definitions;
        public VariableInfo Variable;
    }

    class OpExpressionBuilder
    {
        public IList<OpExpression> Build(CilMethod method)
        {
            var mtdb = method.ReflectionMethod.GetMethodBody();
            var ex = mtdb != null ? mtdb.ExceptionHandlingClauses : new List<ExceptionHandlingClause>();

            var opInfos = CreateOpInfos(method);

            // Turn stack based OpInstructions into variable based OpExpressions

            // - Flow analysis to determine from which instructions each instruction can get its arguments from
            AnalyzeFlow(method, opInfos);

            // - Introduce variables to replace stack based on flow analysis
            ReplaceStack(method, opInfos);

            opInfos = opInfos
                .Where(o => o.StackBefore != null) // unreachable
                .Where(
                    o => false == (
                            o.Instruction.OpCode.Name == "br.s" &&
                            o.Targeting.Count == 1 && o.Targeting[0] == o.Prev &&
                            o.Targets.Count == 1 && o.Targets[0] == o.Next))
                .ToList();

            // - Split into blocks based on try-catching and recursivly:
            //    - Replace stack loading with variable loading based on flow analysis
            //    - Create OpExpressions from OpInstructions

            return opInfos;
        }

        private static void ReplaceStack(CilMethod method, List<OpExpression> opInfos)
        {
            var counter = 0;

            foreach (var opInfo in opInfos)
            {
                if (opInfo.StackBefore == null)
                    continue;

                foreach (var usage in opInfo.StackBefore.Skip(opInfo.StackBefore.Count() - opInfo.GetRealPopCount()))
                {
                    usage.Variable = new VariableInfo { Name = string.Format("st_{0:X2}", counter++) };

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

        private static void AnalyzeFlow(CilMethod method, List<OpExpression> infos)
        {
            if (infos.Any() == false)
                return;

            var methodBody = method
                .ReflectionMethod
                .GetMethodBody();

            var exceptionHandlers = methodBody == null ?
                Enumerable.Empty<int>() :
                methodBody.ExceptionHandlingClauses.Select(e => e.HandlerOffset);

            infos.First().StackBefore = new List<StackUseDefinition>();

            var processStack = new Stack<OpExpression>();
            processStack.Push(infos.First());

            //foreach (var opInfo in infos)
            while (processStack.Any())
            {
                var opInfo = processStack.Pop();

                //
                // Part I

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
                    newStack.Push(new StackUseDefinition { Definitions = new List<OpNode> { opInfo } });
                }

                //
                // Part II: update branch targets

                foreach (var target in opInfo.Targets)
                {
                    if (target.IsHandlerStart)
                    {
                        newStack.Push(new StackUseDefinition { Definitions = new List<OpNode> { new ExceptionNode() } });
                    }

                    if (UpdateTargetStack(newStack, target))
                        processStack.Push(target);

                    if (target.IsHandlerStart)
                    {
                        newStack.Pop();
                    }
                }
            }


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

        private static List<OpExpression> CreateOpInfos(CilMethod method)
        {
            var ilOps = new OpInstructionReader(method.IlCode, method.Resolver);
            var opInfos = new List<OpExpression>();
            var prefixes = new List<OpInstruction>();

            foreach (var op in ilOps.Process())
            {
                if (op.OpCode.OpCodeType == OpCodeType.Prefix)
                {
                    prefixes.Add(op);
                    continue;
                }

                opInfos.Add(new OpExpression(op, prefixes, GetPopCount(method, op), GetPushCount(method, op)));
                prefixes = new List<OpInstruction>();
            }

            foreach (var pairs in opInfos.Zip(opInfos.Skip(1), (current, next) => new { current, next }))
            {
                pairs.current.Next = pairs.next;
            }

            foreach (var pairs in opInfos.Zip(opInfos.Skip(1), (prev, current) => new { current, prev }))
            {
                pairs.current.Prev = pairs.prev;
            }

            var body = method.ReflectionMethod.GetMethodBody();
            var handlers = body != null ? body.ExceptionHandlingClauses : new List<ExceptionHandlingClause>();

            // Create targets
            foreach (var opInfo in opInfos)
            {
                if (opInfo.Instruction.OpCode.Name == "switch")
                {
                    var i = opInfo.Instruction;
                    var switchEndPosition = 1 + i.Position + i.Size;
                    var target = opInfos.First(p => p.Position == switchEndPosition);
                    opInfo.Targets.Add(target);

                    foreach (var targetOffset in (int[])i.Data)
                    {
                        var targetPosition = 1 + i.Position + i.Size + targetOffset;
                        target = opInfos.First(f2 => f2.Position == targetPosition);
                        opInfo.Targets.Add(target);
                    }
                }
                else if (opInfo.Instruction.OpCode.FlowControl == FlowControl.Branch)
                {
                    var position = GetTargetPosition(opInfo.Instruction);
                    opInfo.Targets = new List<OpExpression>
                    {
                        opInfos.First(i => i.Position == position)
                    };
                }
                else if (opInfo.Instruction.OpCode.FlowControl == FlowControl.Cond_Branch)
                {
                    var position = GetTargetPosition(opInfo.Instruction);
                    opInfo.Targets = new List<OpExpression>
                    {
                        opInfos.First(i => i.Position == position)
                    };

                    if (opInfo.Next != null)
                        opInfo.Targets.Add(opInfo.Next);
                }
                else
                {
                    if (opInfo.Next != null)
                        opInfo.Targets.Add(opInfo.Next);
                }

                if (opInfo.Next != null)
                {
                    foreach (var handler in handlers.Where(t => t.TryOffset == opInfo.Next.Position))
                    {
                        if (handler.Flags != ExceptionHandlingClauseOptions.Clause)
                            continue;

                        var handlerStart = opInfos.First(i => i.Position == handler.HandlerOffset);
                        handlerStart.IsHandlerStart = true;

                        opInfo.Targets.Add(handlerStart);
                    }
                }

                foreach (var target in opInfo.Targets)
                {
                    target.Targeting.Add(opInfo);
                }
            }

            return opInfos;
        }


        public static int GetPushCount(CilMethod method, OpInstruction instruction)
        {
            switch (instruction.OpCode.StackBehaviourPush)
            {
                case StackBehaviour.Push0:
                    return 0;
                case StackBehaviour.Push1:
                case StackBehaviour.Pushi:
                case StackBehaviour.Pushi8:
                case StackBehaviour.Pushr4:
                case StackBehaviour.Pushr8:
                case StackBehaviour.Pushref:
                    return 1;
                case StackBehaviour.Varpush:
                    if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        if (instruction.Data is ConstructorInfo)
                            return 0;

                        var mi = (MethodInfo)instruction.Data;

                        if (mi.ReturnType.FullName == "System.Void")
                            return 0;
                        else
                            return 1;
                    }
                    else
                    {
                        throw new NotImplementedException();
                    }
                case StackBehaviour.Push1_push1:
                    if (instruction.OpCode.Name == "dup")
                    {
                        return 2;
                    }
                    else
                    {
                        throw new NotImplementedException();
                    }
                default:
                    throw new NotImplementedException();
            }
        }

        public static int? GetPopCount(CilMethod method, OpInstruction instruction)
        {
            if (instruction.OpCode.Name.StartsWith("leave"))
                return null; // pops all

            switch (instruction.OpCode.StackBehaviourPop)
            {
                case StackBehaviour.Pop0:
                    return 0;
                case StackBehaviour.Pop1:
                case StackBehaviour.Popi:
                case StackBehaviour.Popref:
                    return 1;
                case StackBehaviour.Pop1_pop1:
                case StackBehaviour.Popi_pop1:
                case StackBehaviour.Popi_popi:
                case StackBehaviour.Popi_popi8:
                case StackBehaviour.Popi_popr4:
                case StackBehaviour.Popi_popr8:
                case StackBehaviour.Popref_pop1:
                case StackBehaviour.Popref_popi:
                    return 2;
                case StackBehaviour.Popi_popi_popi:
                case StackBehaviour.Popref_popi_pop1:
                case StackBehaviour.Popref_popi_popi:
                case StackBehaviour.Popref_popi_popi8:
                case StackBehaviour.Popref_popi_popr4:
                case StackBehaviour.Popref_popi_popr8:
                case StackBehaviour.Popref_popi_popref:
                    return 3;
                case StackBehaviour.Varpop:
                    if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        var callTarget = (MethodBase)instruction.Data;

                        var result = callTarget.GetParameters().Count();

                        if (callTarget.IsStatic == false)
                            result++;

                        return result;
                    }
                    else if (instruction.OpCode.Name == "newobj")
                    {
                        return ((ConstructorInfo)instruction.Data).GetParameters().Count();
                    }
                    else if (instruction.OpCode.Name == "ret")
                    {
                        var mi = method.ReflectionMethod as MethodInfo;

                        if (mi != null && mi.ReturnType.FullName != "System.Void")
                            return 1;
                        else
                            return 0;
                    }
                    else
                    {
                        throw new NotImplementedException();
                    }
                default:
                    throw new NotImplementedException();
            }
        }

        private static int GetTargetPosition(OpInstruction i)
        {
            if (i.Data is byte)
                return (1 + i.Position + i.Size + (sbyte)(byte)i.Data);
            else
                return 1 + i.Position + i.Size + (int)i.Data;
        }

    }

}