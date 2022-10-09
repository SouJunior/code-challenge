using System;
using System.Linq;

namespace Reverse_an_Array
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ArrayReverter();
        }

        static void ArrayReverter()
        {
            Console.WriteLine("Digite os números do Array separado por vírgula:");
            string Array = Console.ReadLine();
            Array.Split(',').Reverse().ToList().ForEach(x=> Console.Write($"{x} "));
            Console.ReadLine();
        }
    }
}
