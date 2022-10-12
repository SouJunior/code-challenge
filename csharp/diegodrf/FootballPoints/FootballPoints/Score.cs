using FootballPoints.Enums;

namespace FootballPoints
{
    public class Score : IScore
    {
        public Score(int win, int draw, int loose)
        {
            Win = win;
            Draw = draw;
            Loose = loose;
        }

        public int Win { get; private set; }
        public int Draw { get; private set; }
        public int Loose { get; private set; }

        public int DrawPoints()
        {
            return Draw * ((int)EPoints.Draw);
        }

        public int LoosePoints()
        {
            return Loose * ((int)EPoints.Loose);
        }

        public int WinPoints()
        {
            return Win * ((int)EPoints.Win);
        }

        public int TotalPoints()
        {
            return WinPoints() + DrawPoints() + LoosePoints();
        }

        
    }
}
