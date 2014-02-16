using Braille.AssemblyTransform;
using Braille.JSAst;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Braille.MethodTransform
{
    class MethodTransformTask
    {
        private ILToFrameTransform methodTransform;
        private FrameToAstTransform frameTransform;
        private InsertFrameLabelsTask blockTransform;

        public MethodTransformTask()
        {
            methodTransform = new ILToFrameTransform();
            blockTransform = new InsertFrameLabelsTask();
            frameTransform = new FrameToAstTransform();
        }

        public void Process(IEnumerable<CilAssembly> asms)
        {
            foreach (var asm in asms)
            {
                foreach (var type in asm.Types)
                {
                    foreach (var method in type.Methods)
                    {
                        var functionBlock = new List<JSStatement>();

                        var frames = methodTransform.Process(method).ToList();
                        
                        blockTransform.Process(frames);

                        var statements = new List<JSStatement>();

                        functionBlock.Add(new JSStatement { Expression = new JSVariableDelcaration { Name = "__braille_pos__", Value = new JSNumberLiteral { Value = 0 } } });
                        functionBlock.Add(new JSWhileLoopStatement
                        {
                            Condition = new JSBoolLiteral { Value = true },
                            Statements = new List<JSStatement> {
                                new JSSwitchStatement
                                {
                                    Value = new JSIdentifier { Name = "__braille_pos__" },
                                    Statements = statements
                                }
                            }
                        });

                        statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = 0 } });

                        foreach (var frame in frames)
                        {
                            Print(frame);

                            if (frame.IsLabel)
                                statements.Add(new JSSwitchCase { Value = new JSNumberLiteral { Value = frame.Instruction.Position } });
                            statements.AddRange(frameTransform.Process(frame));
                        }

                        functionBlock.Add(new JSStatement { Expression = new JSLineComment { Text = "end switch" } });

                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Body = functionBlock,
                            Name = method.Name,
                            Parameters = Enumerable.Empty<JSFunctionParameter>()
                        };
                    }
                }
            }
        }

        private static void Print(Frame frame, int depth = 0)
        {
            if (frame == null)
                return;

            Console.WriteLine("// {2:x}: {0}{1}\t\t{3:x}", new string(' ', depth), frame.Instruction.ToString(), frame.Instruction.Position, frame.IsLabel);
            foreach (var child in frame.Values)
            {
                Print(child, depth + 1);
            }
        }
    }
}
