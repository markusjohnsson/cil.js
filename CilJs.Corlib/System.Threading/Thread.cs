
namespace System.Threading
{
    public class Thread
    {
        private static Thread currentThread = new Thread();

        public static Thread CurrentThread { get { return currentThread; } }

        public bool IsThreadPoolThread { get { return false; } }

        public static void Sleep(long millis)
        {

        }
    }
}
