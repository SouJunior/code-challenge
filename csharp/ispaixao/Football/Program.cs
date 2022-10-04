using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Football
{
    public class Program
    {
        static void Main(string[] args)
        {
            FootballPoints(0, 0, 1);
            Console.ReadLine();
        }

        static int FootballPoints(int wins, int draws, int losses)
        {
            if (wins >= 0 && draws >= 0 && losses >= 0)
            {
                int resultados;
                resultados = wins * 3 + draws * 1 + losses * 0;
                Console.WriteLine($"Pontos: {resultados}");
                return resultados;
            }
            else
            {
                throw new Exception("Nenhum dos valores podem ser negativos.");
            }

        }
    }

}

