using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Braille.Loading
{
    class StringExtractor
    {
        public static List<string> ReadAllUserStrings(string assemblyPath)
        {
            using (BinaryReader r = new BinaryReader(new FileStream(assemblyPath, FileMode.Open, FileAccess.Read)))
            {
                while (true)
                {
                    while (r.ReadUInt32() != 0x424A5342)        // seek to magic
                        ;

                    long pos = r.BaseStream.Position;

                    try
                    {
                        return ReadAllUserStringsFromMetadata(r);
                    }
                    catch { }

                    r.BaseStream.Position = pos;
                }
            }
        }

        static List<string> ReadAllUserStringsFromMetadata(BinaryReader r)
        {
            long metadataRootPos = r.BaseStream.Position - 4;

            r.ReadUInt32();                     // Major, Minor Version

            if (r.ReadUInt32() != 0)            // Reserved
                throw new Exception();

            uint length = r.ReadUInt32();       // Length

            r.BaseStream.Position += length;    // skip Version string

            if (r.ReadUInt16() != 0)            // Flags, Reserved
                throw new Exception();

            int streams = r.ReadUInt16();       // Streams

            while (streams > 0)                 // StreamHeaders
            {
                streams--;

                uint offset, size;

                if (ReadStreamHeader(r, out offset, out size) == "#US")
                {
                    r.BaseStream.Position = metadataRootPos + offset;
                    long endPos = metadataRootPos + offset + size;

                    if (ReadUserString(r) != null)
                        throw new Exception();

                    List<string> lst = new List<string>();

                    while (r.BaseStream.Position < endPos)
                    {
                        string str = ReadUserString(r);

                        if (str != null)
                            lst.Add(str);
                    }

                    return lst;
                }
            }

            throw new Exception();
        }

        static string ReadStreamHeader(BinaryReader r, out uint offset, out uint size)
        {
            offset = r.ReadUInt32();
            size = r.ReadUInt32();

            int cc = 0;
            string name = "";

            while (true)
            {
                byte b = r.ReadByte();
                cc++;

                if (b == 0)
                {
                    while (cc % 4 != 0)
                    {
                        if (r.ReadByte() != 0)
                            throw new Exception();

                        cc++;
                    }

                    if (cc > 32)
                        throw new Exception();

                    return name;
                }

                name += (char)b;
            }
        }

        static string ReadUserString(BinaryReader r)
        {
            int b = r.ReadByte();

            int size;

            if ((b & 0x80) == 0)
            {
                size = b;
            }
            else if ((b & 0xC0) == 0x80)
            {
                int x = r.ReadByte();

                size = ((b & ~0xC0) << 8) | x;
            }
            else if ((b & 0xE0) == 0xC0)
            {
                int x = r.ReadByte();
                int y = r.ReadByte();
                int z = r.ReadByte();

                size = ((b & ~0xE0) << 24) | (x << 16) | (y << 8) | z;
            }
            else
                throw new Exception();

            if (size == 0)
                return null;

            if (size % 2 != 1)
                throw new Exception();

            int charCnt = size / 2;

            StringBuilder sb = new StringBuilder(charCnt);

            for (int i = 0; i < charCnt; i++)
            {
                sb.Append((char)r.ReadUInt16());
            }

            byte finalByte = r.ReadByte();

            if ((finalByte != 0) && (finalByte != 1))
                throw new Exception();

            return sb.ToString();
        }
    }

}
