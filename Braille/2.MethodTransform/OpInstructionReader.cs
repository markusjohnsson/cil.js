using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace Braille.MethodTransform
{
    class OpInstructionReader
    {
        #region Static initialization
        static OpCode[] OneByteOpCodes = new OpCode[0x100];
        static OpCode[] TwoByteOpCodes = new OpCode[0x100];

        static OpInstructionReader()
        {
            foreach (var fi in typeof(OpCodes).GetFields(BindingFlags.Public | BindingFlags.Static))
            {
                var opCode = (OpCode)fi.GetValue(null);
                var value = (UInt16)opCode.Value;

                if (value < 0x100)
                    OneByteOpCodes[value] = opCode;
                else if ((value & 0xff00) == 0xfe00)
                    TwoByteOpCodes[value & 0xff] = opCode;

            }

            //File.Delete("out.js");

            //var sb = new List<string>();
            //foreach (var item in OneByteOpCodes.OrderBy(o => (UInt16)o.Value).Where(o => o.Name != null))
            //{
            //    sb.Add(string.Format("case 0x{0:x}: // {1} (0x{2:x})", (UInt16)item.Value, item.Name, item.Value, MethodTransformTask.GetLength(null, item.Name)));
            //    sb.Add("    break;");
            //}

            //sb.Add("two bytes from here");


            //foreach (var item in TwoByteOpCodes.OrderBy(o => (UInt16)o.Value).Where(o => o.Name != null))
            //{
            //    sb.Add(string.Format("case 0x{0:x}: // {1} (0x{2:x}) ({3})", ((UInt16)item.Value) & 0xff, item.Name, item.Value, MethodTransformTask.GetLength(null, item.Name)));
            //    sb.Add("    break;");
            //}

            //File.WriteAllLines("out.js", sb.ToArray());
        }
        #endregion

        byte[] ilCode;
        int position = 0;
        ModuleILResolver resolver;

        public OpInstructionReader(byte[] il, ModuleILResolver resolver)
        {
            ilCode = il;
            this.resolver = resolver;
        }

        public IEnumerable<OpInstruction> Process()
        {
            var offset = 0;
            while (position < ilCode.Length)
            {
                OpCode opCode;

                var p = position;

                var code = ilCode[p];
                if (code != 0xFE)
                {
                    opCode = OneByteOpCodes[code];
                }
                else
                {
                    position++;
                    code = ilCode[++p];
                    opCode = TwoByteOpCodes[code];
                }

                position++;
                var size = GetSize(opCode.OperandType);
                position += size;

                var data = GetData(opCode, new ByteArrayReader(ilCode, p + 1));

                if (opCode.Name.EndsWith("."))
                    p -= 1;

                if (opCode.Name == "switch")
                {
                    var targetCount = (int)data;
                    var data2 = new int[targetCount];
                    for (int i = 0; i < targetCount; i++)
                    {
                        data2[i] = BitConverter.ToInt32(ilCode, position + 4 * i);
                    }
                    data = data2;
                    size += 4 * targetCount;
                    position = position + 4 * targetCount;
                }

                yield return new OpInstruction
                {
                    OpCode = opCode,
                    Data = data,
                    Position = p,
                    Size = size
                };

                offset++;
            }
        }

        private static int GetSize(OperandType operandType)
        {
            switch (operandType)
            {
                case OperandType.InlineNone:
                    return 0;
                case OperandType.ShortInlineBrTarget:
                case OperandType.ShortInlineI:
                case OperandType.ShortInlineVar:
                    return 1;
                case OperandType.InlineVar:
                    return 2;
                case OperandType.InlineBrTarget:
                case OperandType.InlineField:
                case OperandType.InlineI:
                case OperandType.InlineMethod:
                case OperandType.InlineSig:
                case OperandType.InlineString:
                case OperandType.InlineSwitch:
                case OperandType.InlineTok:
                case OperandType.InlineType:
                case OperandType.ShortInlineR:
                    return 4;
                case OperandType.InlineI8:
                case OperandType.InlineR:
                    return 8;
                default:
                    return 0;
            }
        }

        private object GetData(OpCode code, ByteArrayReader reader)
        {
            object data = null;
            switch (code.OperandType)
            {
                case OperandType.InlineField:
                    data = resolver.ResolveField(reader.ReadInt32());
                    break;
                case OperandType.InlineSwitch:
                    data = reader.ReadInt32();
                    break;
                case OperandType.InlineBrTarget:
                case OperandType.InlineI:
                    data = reader.ReadInt32();
                    break;
                case OperandType.InlineI8:
                    data = reader.ReadInt64();
                    break;
                case OperandType.InlineMethod:
                    data = resolver.ResolveMethod(reader.ReadInt32());
                    break;
                case OperandType.InlineR:
                    data = reader.ReadDouble();
                    break;
                case OperandType.InlineSig:
                    data = resolver.ResolveSignature(reader.ReadInt32());
                    break;
                case OperandType.InlineString:
                    data = resolver.ResolveString(reader.ReadInt32());
                    break;
                case OperandType.InlineTok:
                case OperandType.InlineType:
                    data = resolver.ResolveType(reader.ReadInt32());
                    break;
                case OperandType.InlineVar:
                    data = reader.ReadInt16();
                    break;
                case OperandType.ShortInlineVar:
                case OperandType.ShortInlineI:
                case OperandType.ShortInlineBrTarget:
                    data = reader.ReadByte();
                    break;
                case OperandType.ShortInlineR:
                    data = reader.ReadSingle();
                    break;
            }

            return data;
        }
    }

    internal class ModuleILResolver
    {
        private Module module;
        private Type type;
        private MethodBase method;

        public ModuleILResolver(MethodBase method)
        {
            this.module = method.Module;
            this.type = method.DeclaringType;
            this.method = method;
        }

        public FieldInfo ResolveField(int metadataToken)
        {
            return this.module.ResolveField(metadataToken,
                type.IsGenericType ? type.GetGenericArguments() : null, method.IsGenericMethod ? method.GetGenericArguments() : null);
        }

        public MemberInfo ResolveMember(int metadataToken)
        {
            return this.module.ResolveMember(metadataToken);
        }

        public MethodBase ResolveMethod(int metadataToken)
        {
            return this.module.ResolveMethod(metadataToken,
                type.IsGenericType ? type.GetGenericArguments() : null, method.IsGenericMethod ? method.GetGenericArguments() : null);
        }

        public byte[] ResolveSignature(int metadataToken)
        {
            return this.module.ResolveSignature(metadataToken);
        }

        public string ResolveString(int metadataToken)
        {
            try
            {
                return this.module.ResolveString(metadataToken);
            }
            catch
            {
                return "ERROR: Unresolvable string";
            }
        }

        public Type ResolveType(int metadataToken)
        {
            return this.module.ResolveType(metadataToken,
                type.IsGenericType ? type.GetGenericArguments() : null, method.IsGenericMethod ? method.GetGenericArguments() : null);
        }
    }

    enum MetadataType
    {
        Module = 0x00000000,
        TypeRef = 0x01000000,
        TypeDef = 0x02000000,
        FieldDef = 0x04000000,
        MethodDef = 0x06000000,
        ParamDef = 0x08000000,
        InterfaceImpl = 0x09000000,
        MemberRef = 0x0a000000,
        CustomAttribute = 0x0c000000,
        Permission = 0x0e000000,
        Signature = 0x11000000,
        Event = 0x14000000,
        Property = 0x17000000,
        ModuleRef = 0x1a000000,
        TypeSpec = 0x1b000000,
        Assembly = 0x20000000,
        AssemblyRef = 0x23000000,
        File = 0x26000000,
        ExportedType = 0x27000000,
        ManifestResource = 0x28000000,
        GenericParam = 0x2a000000,
        MethodSpec = 0x2b000000,
        GenericParamConstraint = 0x2c000000,
        String = 0x70000000,
        Name = 0x71000000,
        BaseType = 0x72000000
    }
}
