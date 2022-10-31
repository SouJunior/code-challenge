public class FootballPoints
{

    public static void main(String[] args)
    {
        int wins = 3;
        int draws = 4;
        int losses = 2;

        System.out.println(calcPoints(wins, draws, losses));
    }

    public static int calcPoints(int w, int d, int l)
    {
        int points = (w * 3) + d;
        return points;
    }

}
