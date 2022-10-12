namespace FootballPoints;

public class Program
{
    public static void Main(string[] args)
    {
        var win = int.Parse(args[0]);
        var draw = int.Parse(args[1]);
        var loose = int.Parse(args[2]);

        var score = new Score(win, draw, loose);
        var total = score.TotalPoints();
        
        Console.WriteLine(total);
    }
}