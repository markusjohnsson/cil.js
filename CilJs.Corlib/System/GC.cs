
namespace System
{
    public static class GC
    {
        public static void KeepAlive(object o)
        {
            // nop
        }

        public static void SuppressFinalize(object o)
        {
        }
    }
}
