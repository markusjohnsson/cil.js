using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;

namespace CilJs.Loading
{
    public class ByteArrayReader
    {
        private int position;
        private byte[] source;

        public ByteArrayReader(byte[] source, int position)
        {
            this.source = source;
            this.position = position;
        }

        public Byte ReadByte() { return (Byte)source[position++]; }
        public SByte ReadSByte() { return (SByte)ReadByte(); }

        public UInt16 ReadUInt16() { position += 2; return BitConverter.ToUInt16(source, position - 2); }
        public UInt32 ReadUInt32() { position += 4; return BitConverter.ToUInt32(source, position - 4); }
        public UInt64 ReadUInt64() { position += 8; return BitConverter.ToUInt64(source, position - 8); }

        public Int32 ReadInt32() { position += 4; return BitConverter.ToInt32(source, position - 4); }
        public Int64 ReadInt64() { position += 8; return BitConverter.ToInt64(source, position - 8); }

        public Single ReadSingle() { position += 4; return BitConverter.ToSingle(source, position - 4); }
        public Double ReadDouble() { position += 8; return BitConverter.ToDouble(source, position - 8); }

        internal object ReadInt16()
        {
            throw new NotImplementedException();
        }
    }
}
