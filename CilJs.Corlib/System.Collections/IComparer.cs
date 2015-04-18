using System;
using System.Collections.Generic;
using System.Text;

namespace System.Collections
{
    public interface IComparer
    {
        int Compare(object x, object y);
    }
}
