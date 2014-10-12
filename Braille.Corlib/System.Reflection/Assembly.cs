using System;
using System.Collections.Generic;
using System.Text;

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
            if (!UnsafeCast<bool>(ctor.ManagedInstance))
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
