using System;
class ChallengeFootballPoints
{
  public static void Main()
  {
    FootballPoints(3, 4, 2);
    FootballPoints(5, 0, 2);
    FootballPoints(0, 0, 1);
  }
  static void FootballPoints(int wins, int draws, int losses)
  {
    int result;

    result = (wins * 3) + (draws * 1) + (losses - losses);

    Console.WriteLine(result);
  }
}