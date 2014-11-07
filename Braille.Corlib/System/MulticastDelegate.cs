using System.Runtime.CompilerServices;
using Braille.Runtime.TranslatorServices;

namespace System
{
    public class MulticastDelegate : Delegate
    {
#pragma warning disable 649
        // internal to avoid name mangling
        internal Delegate[] _invocationList;
#pragma warning restore 649

        [JsImport(@"
            function (list) { 

                var f = function () {
                    var result;
                    var arr = list.jsarr;
                    for (var i=0; i<arr.length; i++) {
                        var delegate = arr[i];
                        var m = delegate._methodPtr;
                        var t = delegate._target;
                        var args = [];
                        if (t != null)
                            args.push(t);
                        for (var j=1; j<arguments.length; j++)
                            args.push(arguments[j]);
                        result = m.apply(null, args)
                    }
                    return result;
                };
                
                var md = new list.jsarr[0].constructor();
                md._methodPtr = f;
                md._invocationList = list;
                return md;
            }
            ")]
        internal static extern Delegate CreateMulticast(Delegate [] a);

        protected override Delegate CombineImpl(Delegate b)
        {
            Delegate[] newList;

            if (_invocationList != null)
            {
                newList = new Delegate[_invocationList.Length + 1];

                for (var i = 0; i < _invocationList.Length; i++)
                    newList[i] = _invocationList[i];

                newList[newList.Length - 1] = b;
            }
            else
            {
                newList = new Delegate[2];
                newList[0] = this;
                newList[1] = b;
            }
            
            return CreateMulticast(newList);
        }

        protected override Delegate RemoveImpl(Delegate b)
        {
            if (_invocationList == null)
            {
                if (b == this)
                    return null;
                else
                    return this;
            }
            else
            {
                var newLen = 0;
                for (var i = 0; i < _invocationList.Length; i++)
                    if (_invocationList[i] != b)
                        newLen++;

                if (newLen == 0)
                    return null;

                if (newLen == 1)
                    for (var i = 0; i < _invocationList.Length; i++)
                        if (_invocationList[i] != b)
                            return _invocationList[i];

                var newList = new Delegate[newLen];

                for (int i = 0, j = 0; i < _invocationList.Length; i++)
                    if (_invocationList[i] != b)
                        newList[j++] = _invocationList[i];

                return CreateMulticast(newList);
            }
        }
    }
}
