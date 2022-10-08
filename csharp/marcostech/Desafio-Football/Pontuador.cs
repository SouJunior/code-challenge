namespace marcostech.Pontuador
{
    public class Pontuador
    {        
        ///<param name="wins"> número de vitorias </param>
        ///<param name="draws"> número de empates </param>
        ///<param name="losses"> número de derrotas </param>
        ///<returns> Retornar os pontos conquistados </returns>
        public int ContaPontos(uint wins, uint draws, uint losses) {
            int points = 0;
            for(int i = 0; i < wins; i++){
                points += 3;
            }
            for(int i = 0; i < draws; i++){
                points += 1;
            }
            return points;
        }
    }
}