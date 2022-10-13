using Footbal;

Console.WriteLine("Informe o número de wins:");
var wins = int.Parse(Console.ReadLine());
Console.WriteLine("Informe o número de draws:");
var draws = int.Parse(Console.ReadLine());
Console.WriteLine("Informe o número de losses:");
var losses = int.Parse(Console.ReadLine());

var points = new Point(wins, draws, losses);
var resultOfPoints = points.CalculateNumberOfPoints();
Console.WriteLine("A quantidade de pontos do time é: {0}", resultOfPoints);