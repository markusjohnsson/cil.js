using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class Delegate
    {
        // internal to avoid name mangling
        internal object _methodPtr;
        internal object _target;

        public static Delegate Combine(Delegate a, Delegate b)
        {
            if (a == null)
            {
                if (b == null)
                    return null;
                return b;
            }
            else
                if (b == null)
                    return a;

            if (a.GetType() != b.GetType())
                throw new Exception("Incompatible delegate types"); //ArgumentException(Locale.GetText("Incompatible Delegate Types. First is {0} second is {1}.", a.GetType().FullName, b.GetType().FullName));

            return a.CombineImpl(b);
        }

        public static Delegate Remove(Delegate a, Delegate b)
        {
            if (b == null)
                return a;

            if (a.GetType() != b.GetType())
                throw new Exception("Incompatible delegate types"); //ArgumentException(Locale.GetText("Incompatible Delegate Types. First is {0} second is {1}.", a.GetType().FullName, b.GetType().FullName));

            return a.RemoveImpl(b);
        }

        protected virtual Delegate RemoveImpl(Delegate b)
        {
            throw new NotImplementedException();
        }

        protected virtual Delegate CombineImpl(Delegate b)
        {
            throw new NotImplementedException();
        }

        public override bool Equals(object o)
        {
            return this == o as Delegate;
        }

        public static bool operator ==(Delegate a, Delegate b)
        {
            var ma = (MulticastDelegate)a;
            var mb = (MulticastDelegate)b;

            if (ma == null)
                return mb == null;

            if (mb == null)
                return false;

            if (! object.ReferenceEquals(ma._methodPtr, mb._methodPtr))
                return false;

            if (! object.ReferenceEquals(ma._target, mb._target))
                return false;
            
            if (ma._invocationList != null && mb._invocationList != null)
            {
                if (ma._invocationList.Length != mb._invocationList.Length)
                    return false;

                for (var i = 0; i < ma._invocationList.Length; i++)
                {
                    var ia = ma._invocationList[i];
                    var ib = mb._invocationList[i];

                    if (!(ia == ib))
                        return false;
                }

                return true;
            }

            return ma._invocationList == null && mb._invocationList == null;
        }

        public static bool operator !=(Delegate a, Delegate b)
        {
            return !(a == b);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        [JsReplace(@"(
            function () {{ 
                var args = Array.prototype.slice.apply(arguments);
                args.unshift({1});
                return {0}.apply(null, args);
            }})")]
        private static extern object GetJsFunction(object method, object thisObj);

        internal static object GetJsFunction(Delegate d)
        {
            if (d._target != null)
                return GetJsFunction(d._methodPtr, d._target);
            else
                return d._methodPtr;
        }

    }
}
