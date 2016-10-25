class Program
{
    static void Main()
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
            System.Console.WriteLine("int");
        }

        void I<string>.M()
        {
            System.Console.WriteLine("string");
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