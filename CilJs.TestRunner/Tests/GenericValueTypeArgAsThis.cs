class Program {
    public static void M<T>(T p) {
        System.Console.WriteLine(p.GetType().FullName);
    }

    public static void Main() { M(123); }
} 