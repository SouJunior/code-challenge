namespace Footbal
{
    public class Point
    {
        private const int WINS_POINTS_WORTHY = 3; 
        private const int DRAWS_POINTS_WORTHY = 1; 
        private const int LOSSES_POINTS_WORTHY = 0;
        
        public Point(int wins, int draws, int losses)
        {
            ValidateIfPointHasNegativeValues(wins, draws, losses);
            Wins = wins;
            Draws = draws;
            Losses = losses;
        }

        public int Wins { get; private set; }
        public int Draws { get; private set; }
        public int Losses { get; private set; }

        private void ValidateIfPointHasNegativeValues(int wins, int draws, int losses)
        {
            if(wins < 0 || draws < 0 || losses < 0)
            {
                throw new ArgumentException("Nenhum dos valores pode ser negativo!");
            }
        }
        public int CalculateNumberOfPoints()
        {
            var countWins = Wins * WINS_POINTS_WORTHY;
            var countDraws = Draws * DRAWS_POINTS_WORTHY;
            var countLosses = Losses * LOSSES_POINTS_WORTHY;

            return countWins + countDraws + countLosses;
        }
    }
}
