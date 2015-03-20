using Braille.Runtime.TranslatorServices;

namespace System
{
    public static class Activator 
    {
        public static object CreateInstance(Type type) 
        {
            return CreateInstanceImpl(type);
        }

        public static T CreateInstance<T>()
        {
            return (T)CreateInstance(typeof(T));
        }
 
        [JsReplace("(new ({0}.ctor)())")]
        private extern static object CreateInstanceImpl(Type type);
    }
}
