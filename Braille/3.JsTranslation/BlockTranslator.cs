using Braille.Ast;
using Braille.JSAst;
using Braille.Loading.Model;
using System.Collections.Generic;
using System.Linq;

namespace Braille.JsTranslation
{
    class BlockTranslator : AbstractTranslator
    {
        private CilType type;
        private CilMethod method;
        private JSExpression this_;
        private OpTranslator opTranslator;

        public BlockTranslator(Context context, CilAssembly assembly, CilType type, CilMethod method, JSExpression this_)
            : base(context)
        {
            this.type = type;
            this.method = method;
            this.this_ = this_;
            this.opTranslator = new OpTranslator(context, assembly, type, method);
        }

        public List<JSStatement> Transform(Block block)
        {
            return CreateJsBlock(block, 0).Build().ToList();
        }

        private BlockBuilder CreateJsBlock(Block block, int depth)
        {
            var builder = new BlockBuilder(depth);

            foreach (var node in block.Ast)
            {
                var subBlock = node as Block;
                var label = node as JumpLabel;
                var expr = node as OpExpression;

                if (subBlock != null)
                {
                    JSExpression catchType = null;

                    var catchBlock = subBlock as CatchBlock;
                    if (catchBlock != null)
                        catchType = GetTypeIdentifier(catchBlock.CatchType, method.ReflectionMethod, type.ReflectionType, this_);

                    builder.InsertBlock(CreateJsBlock(subBlock, depth + 1), subBlock.Kind, catchType);
                }
                else if (label != null)
                {
                    builder.InsertLabel(label.Position);
                }
                else if (expr != null)
                {
                    builder.InsertStatements(opTranslator.Process(expr));
                }
            }

            return builder;
        }
    }
}
