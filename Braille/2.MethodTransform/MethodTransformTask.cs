using Braille.AssemblyTransform;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Text;

namespace Braille.MethodTransform
{
    class MethodTransformTask
    {
        private List<CilAssembly> assemblies = new List<CilAssembly>();

        public void AddAssemblies(IEnumerable<CilAssembly> assemblies)
        {
            this.assemblies.AddRange(assemblies);
        }

        public void Process()
        {
            foreach (var asm in assemblies)
            {
                foreach (var type in asm.Types)
                {
                    foreach (var method in type.Methods)
                    {
                        Console.WriteLine(method.Name);
                        var il = new ILReader(method.IlCode, method.Resolver);
                        foreach (var instruction in il.Process())
                        {
                            //var f = _stack.FirstOrDefault();
                            MethodProcess(method, instruction);
                            //if (_stack.Count == 0 && f != null)
                            //    Print(f);
                        }

                        Print(_stack.FirstOrDefault());

                        if (_stack.Count > 1)
                            throw new InvalidOperationException();

                        if (_stack.Count != 0)
                            Pop();
                    }
                }
            }
        }

        private void Print(Frame frame, int depth = 0)
        {
            if (frame == null)
                return;

            Console.WriteLine("{0}{1}", new string(' ', depth), frame.Instruction.ToString());
            foreach (var child in frame.Values)
            {
                Print(child, depth + 1);
            }
        }

        private Stack<Frame> _stack = new Stack<Frame>();

        class Frame
        {
            public ILInstruction Instruction;
            public List<Frame> Values = new List<Frame>();
        }

        Frame Pop()
        {
            return _stack.Pop();
        }

        void Push(Frame n)
        {
            _stack.Push(n);
        }

        private void MethodProcess(CilMethod method, ILInstruction instruction)
        {
            //Console.WriteLine(instruction.ToString());

            var frame = new Frame() { Instruction = instruction };

            switch (instruction.OpCode.StackBehaviourPop)
            {
                case StackBehaviour.Pop0:
                    break;
                case StackBehaviour.Pop1:
                case StackBehaviour.Popi:
                case StackBehaviour.Popref:
                    frame.Values.Add(Pop());
                    break;
                case StackBehaviour.Pop1_pop1:
                case StackBehaviour.Popi_pop1:
                case StackBehaviour.Popi_popi:
                case StackBehaviour.Popi_popi8:
                case StackBehaviour.Popi_popr4:
                case StackBehaviour.Popi_popr8:
                case StackBehaviour.Popref_pop1:
                case StackBehaviour.Popref_popi:
                    frame.Values.Add(Pop());
                    frame.Values.Add(Pop());
                    break;
                case StackBehaviour.Popi_popi_popi:
                case StackBehaviour.Popref_popi_pop1:
                case StackBehaviour.Popref_popi_popi:
                case StackBehaviour.Popref_popi_popi8:
                case StackBehaviour.Popref_popi_popr4:
                case StackBehaviour.Popref_popi_popr8:
                case StackBehaviour.Popref_popi_popref:
                    frame.Values.Add(Pop());
                    frame.Values.Add(Pop());
                    frame.Values.Add(Pop());
                    break;
                case StackBehaviour.Varpop:
                    if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        var callTarget = (MethodInfo)instruction.Data;

                        if (false == callTarget.IsStatic)
                        {
                            frame.Values.Add(Pop());
                        }

                        foreach (var item in callTarget.GetParameters())
                        {
                            frame.Values.Add(Pop());
                        }
                    }
                    else if (instruction.OpCode.Name == "newobj")
                    {
                        foreach (var item in ((ConstructorInfo)instruction.Data).GetParameters())
                        {
                            frame.Values.Add(Pop());
                        }
                    }
                    else if (instruction.OpCode.Name == "ret")
                    {
                        if (method.ReflectionMethod.ReturnType.FullName != "System.Void")
                            frame.Values.Add(Pop());
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
                    Print(frame);
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
                            Print(frame);
                    }
                    else if (instruction.OpCode.Name.StartsWith("call"))
                    {
                        if (((MethodInfo)instruction.Data).ReturnType.FullName != "System.Void")
                            Push(frame);
                        else
                            Print(frame);
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