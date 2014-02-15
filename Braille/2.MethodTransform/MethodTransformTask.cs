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
        public void Process(IEnumerable<CilAssembly> asms)
        {
            var methodTransform = new ILToFrameTransform();
            var frameTransform = new FrameToAstTransform();

            foreach (var asm in asms)
            {
                foreach (var type in asm.Types)
                {
                    foreach (var method in type.Methods)
                    {
                        var block = new List<JSStatement>();

                        foreach (var frame in methodTransform.Process(method))
                        {
                            Print(frame);

                            block.Add(frameTransform.Process(frame));
                        }

                        method.JsFunction = new JSFunctionDelcaration
                        {
                            Body = block,
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

            Console.WriteLine("// {0}{1}", new string(' ', depth), frame.Instruction.ToString());
            foreach (var child in frame.Values)
            {
                Print(child, depth + 1);
            }
        }
    }
}
