using System;


namespace FootballPoints
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite abaixo quantas vitórias o time alcançou:");
            int win = int.Parse(Console.ReadLine());

            Console.WriteLine("Digite abaixo quantas empates o time obteve:");
            int draw = int.Parse(Console.ReadLine());

            Console.WriteLine("Digite abaixo quantas derrotas o time sofreu:");
            int loss = int.Parse(Console.ReadLine());

            Console.ForegroundColor= ConsoleColor.Green;
            Console.WriteLine($"Esse time conquistou um total de {GetPointsCalculated(win, draw, loss)} pontos");
            Console.ReadLine();
        }
        static int GetPointsCalculated(int win, int draw, int loss)
        {
            win = win > 0 ? win * 3 : 0;
            draw = draw > 0 ? draw * 1 : 0;
            loss = loss > 0 ? 0 : 0;
            return win + draw + loss;
        }
    }
}
