namespace ReverseAnArray;

public class Program
{
    public static void Main(string[] args)
    {
        Array.Reverse(args);

        foreach (var item in args)
        {
            Console.Write(item + ' ');
        }
        Console.WriteLine();
    }
}
