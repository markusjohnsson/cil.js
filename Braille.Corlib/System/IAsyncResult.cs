using Braille.Runtime.TranslatorServices;
using System;
using System.Threading;

namespace System
{
    public interface IAsyncResult
    {
        bool IsCompleted { get; }
        WaitHandle AsyncWaitHandle { get; }
        object AsyncState { get; }
        bool CompletedSynchronously { get; }
    }

    class AsyncResult: IAsyncResult
    {
        [JsAssemblyStatic]
        internal static IAsyncResult CreateAsyncResult()
        {
            return new AsyncResult();
        }

        // accessed from Runtime.js
        internal object asyncState;
        internal object result;

        public bool IsCompleted
        {
            get { return true; }
        }

        public WaitHandle AsyncWaitHandle
        {
            get { return null; }
        }

        public object AsyncState
        {
            get { return asyncState; }
        }

        public bool CompletedSynchronously
        {
            get { return true; }
        }
    }
}