using Braille.Ast;
using Braille.Loading;
using Braille.Loading.Model;
using IKVM.Reflection;
using IKVM.Reflection.Emit;
using System;
using System.Collections.Generic;
using System.Linq;
using Type = IKVM.Reflection.Type;

namespace Braille.Analysis
{
    class OpExpressionBuilder
    {
        private Universe universe;

        private Context context;

        public OpExpressionBuilder(Context context)
        {
            this.context = context;
            universe = context.ReflectionUniverse;

        }

        public IList<OpExpression> Build(CilMethod method)
        {
            var mtdb = method.ReflectionMethod.GetMethodBody();

            var opInfos = CreateOpInfos(method);

            return opInfos;
        }

        private List<OpExpression> CreateOpInfos(CilMethod method)
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

                OpExpression opx;

                if (op.OpCode.Name.StartsWith("call"))
                {
                    opx = new CallNode(op, prefixes, GetPopCount(method, op), GetPushCount(method, op), context.LookupMethod((MethodBase)op.Data));
                }
                else if (op.OpCode.Name.StartsWith("ldftn"))
                {
                    opx = new LoadFunctionNode(op, prefixes, GetPopCount(method, op), GetPushCount(method, op), context.LookupMethod((MethodBase)op.Data));
                }
                else
                {
                    opx = new OpExpression(op, prefixes, GetPopCount(method, op), GetPushCount(method, op));
                }

                opInfos.Add(opx);

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
                else if (opInfo.Instruction.OpCode.FlowControl == FlowControl.Throw)
                {
                    // nothing
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
                        if (handler.Flags != ExceptionHandlingClauseOptions.Clause &&
                            handler.Flags != ExceptionHandlingClauseOptions.Finally)
                        {
                            continue;
                        }

                        var handlerStart = opInfos.First(i => i.Position == handler.HandlerOffset);
                        
                        opInfo.Targets.Add(handlerStart);
                    }
                }

                foreach (var target in opInfo.Targets)
                {
                    target.Targeting.Add(opInfo);
                }
            }

            foreach (var handler in handlers)
            {
                if (handler.Flags != ExceptionHandlingClauseOptions.Clause)
                    continue;

                var handlerStart = opInfos.First(i => i.Position == handler.HandlerOffset);
                handlerStart.IsHandlerStart = true;
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