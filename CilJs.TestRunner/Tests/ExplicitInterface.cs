class Program
{
    static void Main(string[] args)
    {
        X x = new X();
        I<int> i = new C();
        x.F<int>(i);  // string???
    }

    interface I<T> { void M(); }

    class C : I<int>, I<string>
    {
        void I<int>.M()
        {
            TestLog.Log("int");
        }

        void I<string>.M()
        {
            TestLog.Log("string");
        }
    }

    class X
    {
        public void F<T>(I<T> i)
        {
            i.M();
        }
    }
}