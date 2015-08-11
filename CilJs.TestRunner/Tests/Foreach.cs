

public class A
{
    public Iter GetEnumerator()
    {
        var nums = new int[5];
        nums[0] = 0;
        nums[1] = 1;
        nums[2] = 2;
        nums[3] = 4;
        nums[4] = 8;
        return new Iter(nums);
    }
}

public class Iter
{
    private int i = -1;
    private int[] nums;

    public Iter(int[] nums)
    {
        this.nums = nums;
    }

    public bool MoveNext() { return ++i < nums.Length; }
    public int Current { get { return nums[i]; } }
}

class Program
{
    public static void Main()
    {
        var a = new A();
        foreach (var x in a)
        {
            System.Console.WriteLine(x);
        }
    }
}
