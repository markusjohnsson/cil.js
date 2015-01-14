using Braille.JsTranslation;
using System.Collections.Generic;
using System.Linq;

namespace Braille.Ast
{
    class OpExpression : Node
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

        private IEnumerable<Node> arguments;
        public IEnumerable<Node> Arguments
        {
            set 
            {
                arguments = value;
            }
            get
            {
                if (arguments != null)
                    return arguments;

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

        // FIXME: this is only an appropriate string representation before expression aggregation.. perhaps we should have different classes entierly before and after
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


        public IEnumerable<OpInstruction> PrefixTraversal()
        {
            yield return Instruction;
            foreach (var subnode in Arguments.OfType<OpExpression>().SelectMany(n => n.PrefixTraversal()))
                yield return subnode;
        }


        public List<IKVM.Reflection.Type> RequireFieldInitTypes { get; set; }
    }
}
