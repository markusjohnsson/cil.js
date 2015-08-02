class Program {
    public static void M<T>(T p) {
        TestLog.Log(p.GetType().FullName);
    }

    public static void Main() { M(123); }
} 