using Braille.AssemblyTransform;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace Braille.MethodTransform
{
    class ILToFrameTransform
    {
        public IEnumerable<Frame> Process(CilMethod method)
        {
            var ex = method.ReflectionMethod.GetMethodBody().ExceptionHandlingClauses;

            var il = new ILReader(method.IlCode, method.Resolver);
            foreach (var instruction in il.Process())
            {
                foreach (var frame in ProcessInstruction(method, instruction, ex))
                {
                    yield return frame;
                }
            }

            if (_stack.Count == 0)
                yield break;

            if (_stack.Count != 1)
                throw new InvalidOperationException();

            yield return _stack.Pop();
        }

        private Stack<Frame> _stack = new Stack<Frame>();

        Frame Pop()
        {
            return _stack.Pop();
        }

        void Push(Frame n)
        {
            _stack.Push(n);
        }

        private IEnumerable<Frame> ProcessInstruction(CilMethod method, ILInstruction instruction, IEnumerable<ExceptionHandlingClause> ex)
        {
            var handler = ex.FirstOrDefault(e => e.HandlerOffset == instruction.Position && e.Flags == ExceptionHandlingClauseOptions.Clause);
            if (handler != null)
            {
                // A catch-block will pop an exception off the stack, so we need to push something 
                Push(new Frame { Instruction = null, Handler = handler });
            }

            var frame = new Frame() { Instruction = instruction };

            switch (instruction.OpCode.StackBehaviourPop)
            {
                case StackBehaviour.Pop0:
                    break;
                case StackBehaviour.Pop1:
                case StackBehaviour.Popi:
                case StackBehaviour.Popref:
                    frame.Values.Insert(0, Pop());
                    break;
                case StackBehaviour.Pop1_pop1:
                case StackBehaviour.Popi_pop1:
                case StackBehaviour.Popi_popi:
                case StackBehaviour.Popi_popi8:
                case StackBehaviour.Popi_popr4:
                case StackBehaviour.Popi_popr8:
                case StackBehaviour.Popref_pop1:
                case StackBehaviour.Popref_popi:
                    frame.Values.Insert(0, Pop());
                    frame.Values.Insert(0, Pop());
                    break;
                case StackBehaviour.Popi_popi_popi:
                case StackBehaviour.Popref_popi_pop1:
                case StackBehaviour.Popref_popi_popi:
                case StackBehaviour.Popref_popi_popi8:
                case StackBehaviour.Popref_popi_popr4:
                case StackBehaviour.Popref_popi_popr8:
                case StackBehaviour.Popref_popi_popref:
                    frame.Values.Insert(0, Pop());
                    frame.Values.Insert(0, Pop());
                    frame.Values.Insert(0, Pop());
                    break;
                case StackBehaviour.Varpop:
                    if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        var callTarget = (MethodInfo)instruction.Data;

                        if (false == callTarget.IsStatic)
                        {
                            frame.Values.Insert(0, Pop());
                        }

                        foreach (var item in callTarget.GetParameters())
                        {
                            frame.Values.Insert(0, Pop());
                        }
                    }
                    else if (instruction.OpCode.Name == "newobj")
                    {
                        foreach (var item in ((ConstructorInfo)instruction.Data).GetParameters())
                        {
                            frame.Values.Insert(0, Pop());
                        }
                    }
                    else if (instruction.OpCode.Name == "ret")
                    {
                        if (method.ReflectionMethod.ReturnType.FullName != "System.Void")
                            frame.Values.Insert(0, Pop());
                    }
                    else
                    {
                        throw new NotImplementedException();
                    }
                    break;
                default:
                    break;
            }

            switch (instruction.OpCode.StackBehaviourPush)
            {
                case StackBehaviour.Push0:
                    yield return frame;
                    break;
                case StackBehaviour.Push1:
                case StackBehaviour.Pushi:
                case StackBehaviour.Pushi8:
                case StackBehaviour.Pushr4:
                case StackBehaviour.Pushr8:
                case StackBehaviour.Pushref:
                    Push(frame);
                    break;
                case StackBehaviour.Varpush:
                    if (instruction.OpCode.Name == "ret")
                    {
                        if (method.ReflectionMethod.ReturnType.FullName != "System.Void")
                            Push(frame);
                        else
                            yield return frame;
                    }
                    else if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        if (((MethodInfo)instruction.Data).ReturnType.FullName != "System.Void")
                            Push(frame);
                        else
                            yield return frame;
                    }
                    break;
                case StackBehaviour.Push1_push1:
                    if (instruction.OpCode.Name == "dup")
                    {
                        var p = Pop();
                        Push(p);
                        Push(p);
                    }
                    else
                    {
                        throw new NotImplementedException();
                    }
                    break;
                default:
                    throw new NotImplementedException();
            }



        }


    }
}