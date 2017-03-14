using CilJs.Runtime.TranslatorServices;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace System.Reflection
{
    public abstract class MemberInfo : ICustomAttributeProvider
    {
        public abstract object[] GetCustomAttributes(bool inherit);

        public abstract object[] GetCustomAttributes(Type attributeType, bool inherit);

        public virtual IEnumerable<CustomAttributeData> CustomAttributes
        {
            get { return null; }
        }

        public abstract bool IsDefined(Type attributeType, bool inherit);

        [JsImport(@"
            function (ca) {
                ca = ca || [];
                var r = CILJS.new_array(asm0['System.Object'], ca.length);
                for (var i=0; i<ca.length; i++) {
                    var attr_type = ca[i][0];
                    var attr_ctor = ca[i][1];
                    var attr_ctor_args_data = ca[i][2];
                    var attr = new attr_type();
                    var attr_ctor_args = [attr];
                    if (attr_ctor_args_data) {
                        for (var j=0; j<attr_ctor_args_data.length; j++) {
                            var d = attr_ctor_args_data[j];
                            if (typeof d === 'function') {
                                d(); // init type
                                d = asm0.GetReflectionType(d);
                            }
                            attr_ctor_args.push(d);
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
