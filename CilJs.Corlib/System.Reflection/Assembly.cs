
namespace System.Reflection
{
    public class Assembly
    {
        internal class jsAsm
        {
            internal object FullName;
            internal Assembly ManagedInstance;
        }

        jsAsm rawAsm;

        private Assembly(jsAsm raw)
        {
            this.rawAsm = raw;
        }

        internal static Assembly GetInstance(jsAsm ctor)
        {
            if (CilJs.JavaScript.Object.IsUndefined(ctor.ManagedInstance))
                ctor.ManagedInstance = new Assembly(ctor);

            return ctor.ManagedInstance;
        }

        public string FullName
        {
            get
            {
                return string.FromJsString(rawAsm.FullName);
            }
        }

    }
}
