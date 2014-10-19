using IKVM.Reflection;
using Type = IKVM.Reflection.Type;

namespace Braille.Loading.Model
{
    class SystemTypes
    {
        public readonly Type Sbyte;
        public readonly Type IntPtr;
        public readonly Type Int16;
        public readonly Type Int32;
        public readonly Type Int64;
        
        public readonly Type Byte;
        public readonly Type UIntPtr;
        public readonly Type UInt16;
        public readonly Type UInt32;
        public readonly Type UInt64;

        public readonly Type Single;
        public readonly Type Double;
        public readonly Type Object;
        public readonly Type Boolean;
        public readonly Type Char;

        public readonly Type Null;
        public readonly Type String;
        public readonly Type ManagedPointer;
        public readonly Type Type;

        public SystemTypes(Universe universe)
        {
            
            Null = universe.GetType("System.Null");
            Boolean = universe.GetType("System.Boolean");
            Char = universe.GetType("System.Char");
            Byte = universe.GetType("System.Byte");
            Sbyte = universe.GetType("System.SByte");
            Int16 = universe.GetType("System.Int16");
            Int32 = universe.GetType("System.Int32");
            Int64 = universe.GetType("System.Int64");
            IntPtr = universe.GetType("System.IntPtr");
            UInt16 = universe.GetType("System.UInt16");
            UInt32 = universe.GetType("System.UInt32");
            UInt64 = universe.GetType("System.UInt64");
            UIntPtr = universe.GetType("System.UIntPtr");
            Single = universe.GetType("System.Single");
            Double = universe.GetType("System.Double");
            Object = universe.GetType("System.Object");
            String = universe.GetType("System.String");
            ManagedPointer = universe.GetType("Braille.Runtime.ManagedPointer`1");
            Type = universe.GetType("System.Type");
        }
    }
}
