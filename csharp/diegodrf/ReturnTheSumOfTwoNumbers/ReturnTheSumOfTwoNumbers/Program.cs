namespace ReturnTheSumOfTwoNumbers;

public class Program
{
    public static void Main(string[] args)
    {
        var num1 = int.Parse(args[0]);
        var num2 = int.Parse(args[1]);
        var total = SumTwoNumbers.Addition(num1, num2);
        Console.WriteLine(total);
    }
}