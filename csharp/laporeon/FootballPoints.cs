// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Informe a quantidade de vitorias do seu time:");
        int wins = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Informe a quantidade de empates do seu time:");
        int draws = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Informe a quantidade de derrotas do seu time:");
        int losses = Convert.ToInt32(Console.ReadLine());
        int teamPoints = (wins * 3) + (draws * 1) + (losses * 0);
        Console.WriteLine("===================");
        Console.WriteLine("Seu time possui {0} pontos.", teamPoints);
        Console.WriteLine("===================");
    }
}