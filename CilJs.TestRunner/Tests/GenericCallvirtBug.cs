
class A<T>
{
    public class B
    {
        A<T> a;

        public B(A<T> a)
        {
            this.a = a;
        }

        public void X()
        {
            a.Y<T>();
        }
    }

    void Y<TResult>()
    {
        TestLog.Log(typeof(TResult).Name);
    }
}

public class Program
{
    public static void Main()
    {
        var b = new A<string>.B(new A<string>());
        b.X();
    }
}