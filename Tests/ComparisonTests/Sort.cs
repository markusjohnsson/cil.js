
// Based on mono's EnumerableTest.cs, licensed under terms of the MIT license.

using System;
using System.Collections.Generic;
class Baz
{
    string name;
    int age;

    public string Name
    {
        get
        {
            if (string.IsNullOrEmpty(name))
                return Age.ToString();

            return name + " (" + Age + ")";
        }
    }

    public int Age
    {
        get { return age + 1; }
    }

    public Baz(string name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public override int GetHashCode()
    {
        return this.Age ^ this.Name.GetHashCode();
    }

    public override bool Equals(object obj)
    {
        Baz b = obj as Baz;
        if (b == null)
            return false;

        return b.Age == this.Age && b.Name == this.Name;
    }

    public override string ToString()
    {
        return this.Name;
    }
}

class ByNameDescending : IComparer<Baz>
{
    public int Compare(Baz x, Baz y)
    {
        var cmp = x.Name.CompareTo(y.Name);
        return -cmp;
    }
}

class ByName : IComparer<Baz>
{
    public int Compare(Baz x, Baz y)
    {
        var cmp = x.Name.CompareTo(y.Name);
        return cmp;
    }
}

public class Program
{
    static Baz[] CreateBazCollection() {
        return new[] {
				new Baz ("jb", 25),
				new Baz ("ana", 20),
				new Baz ("reg", 28),
				new Baz ("ro", 25),
				new Baz ("jb", 7),
			};
    }
    public static void Main()
    {
        System.Console.WriteLine("Ascending");
        var b = CreateBazCollection();
        Array.Sort(b, new ByName());

        for (int i = 0; i < b.Length; i++)
        {
            System.Console.WriteLine(b[i]);
        }

        System.Console.WriteLine("Descending");
        var a = CreateBazCollection();
        Array.Sort(a, new ByNameDescending());

        for (int i = 0; i < a.Length; i++)
        {
            System.Console.WriteLine(a[i]);
        }
    }
}