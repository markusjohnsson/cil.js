
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using CilJs.Ast;

namespace CilJs.Loading
{
    public struct SequencePoint
    {
        public int IlOffset;
        public int StartLine;
        public int EndLine;
        public int StartColumn;
        public int EndColumn;
    }

    class DebugInfoLoader
    {
        private readonly MetadataReader pdbReader;

        public DebugInfoLoader(Stream pdbStream)
        {
            var pdb = MetadataReaderProvider.FromPortablePdbStream(pdbStream);
            pdbReader = pdb.GetMetadataReader();
        }

        public void ReadDebugInfo(CilAssembly asm)
        {
            foreach (var type in asm.Types)
            {
                foreach (var method in type.Methods)
                {
                    var debugtoken = 0x31000000 | (method.MetadataToken & 0x00ffffff);
                    var handle = (MethodDebugInformationHandle)MetadataTokens.Handle(debugtoken);
                    var mdi = pdbReader.GetMethodDebugInformation(handle);
                    method.SequencePoints = ReadSequencePoints(mdi)
                        .ToLookup(sp => sp.IlOffset)
                        ;
                    method.DocumentName = ReadDocumentName(mdi);
                }
            }
        }

        private string ReadDocumentName(MethodDebugInformation mdi)
        {
            if (mdi.Document.IsNil)
            {
                return null;
            }
            var doc = pdbReader.GetDocument(mdi.Document);
            var nameReader = pdbReader.GetBlobReader(doc.Name);

            var separator = nameReader.ReadUTF8(1);
            nameReader.ReadUTF8(1); // throw away

            var parts = new List<string>();

            int next;

            if (nameReader.TryReadCompressedInteger(out next) == false)
            {
                return "";
            }

            var partHandle = MetadataTokens.BlobHandle(next);
            do
            {
                var partReader = pdbReader.GetBlobReader(partHandle); // needed?
                parts.Add(Encoding.UTF8.GetString(pdbReader.GetBlobBytes(partHandle)));
                if (nameReader.TryReadCompressedInteger(out next))
                {
                    partHandle = MetadataTokens.BlobHandle(next);
                }
                else
                {
                    break;
                }
            } while (partHandle.IsNil == false);

            var documentname = separator + string.Join(separator, parts);
            return documentname;
        }

        private IEnumerable<SequencePoint> ReadSequencePoints(MethodDebugInformation mdi)
        {
            if (mdi.SequencePointsBlob.IsNil)
            {
                return Enumerable.Empty<SequencePoint>();
            }

            var spReader = pdbReader.GetBlobReader(mdi.SequencePointsBlob);

            // header
            var localSignature = spReader.ReadCompressedInteger();
            if (mdi.Document.IsNil)
            {
                var initialDocument = spReader.ReadCompressedInteger();
            }

            // sequence point record
            var sequence = new List<SequencePoint>();
            SequencePoint? previous = null;
            do
            {
                var ilOffset = spReader.ReadCompressedInteger();
                var deltaLines = spReader.ReadCompressedInteger();
                var deltaColumns = spReader.ReadCompressedInteger();

                if (deltaLines == 0 && deltaColumns == 0)
                {
                    if (previous != null)
                    {
                        var x = previous.Value;
                        x.IlOffset += ilOffset;
                        previous = x;
                    }
                    continue;
                }

                var startLine = previous == null ? spReader.ReadCompressedInteger() : spReader.ReadCompressedSignedInteger();
                var startColumn = previous == null ? spReader.ReadCompressedInteger() : spReader.ReadCompressedSignedInteger();

                if (previous == null)
                {
                    previous = new SequencePoint
                    {
                        IlOffset = ilOffset,
                        StartLine = startLine,
                        EndLine = startLine + deltaLines,
                        StartColumn = startColumn,
                        EndColumn = startColumn + deltaColumns
                    };
                }
                else
                {
                    previous = new SequencePoint
                    {
                        IlOffset = previous.Value.IlOffset + ilOffset,
                        StartLine = previous.Value.StartLine + startLine,
                        EndLine = previous.Value.StartLine + startLine + deltaLines,
                        StartColumn = previous.Value.StartColumn + startColumn,
                        EndColumn = previous.Value.StartColumn + startColumn + deltaColumns
                    };
                }

                sequence.Add(previous.Value);

            } while (spReader.Offset < spReader.Length);
            return sequence;
        }

    }
}