using Braille.Runtime.TranslatorServices;
using System.Runtime.CompilerServices;

namespace System.Reflection
{
    public abstract class MemberInfo : ICustomAttributeProvider
    {
        public abstract object[] GetCustomAttributes(bool inherit);

        public abstract object[] GetCustomAttributes(Type attributeType, bool inherit);

        public abstract bool IsDefined(Type attributeType, bool inherit);

        [JsImport(@"
            function (ca) {
                var r = new_array(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    if (attr_ctor_args_data) {
                        for (var j=0; j<attr_ctor_args_data.length; j++) {
                            attr_ctor_args.push(attr_ctor_args_data[j]);
                        }
                    }
                    attr_ctor.apply(null, attr_ctor_args);
                    r.jsarr[i] = attr;
                }
                return r;
            }
            ")]
        protected static extern object[] GetCustomAttributesImpl(object ca);

        public abstract string Name
        {
            get;
        }

    }
}
