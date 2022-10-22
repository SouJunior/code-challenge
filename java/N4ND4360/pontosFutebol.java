public class pontosFutebol {
    public static void main(String[] args) {

        System.out.println("Pontuação do time = " + footballPoints(3, 6, 1));

    }
    public static int footballPoints(int wins, int draws, int losses) {

        return (wins * 3) + draws;
        
    }
}
