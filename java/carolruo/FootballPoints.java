public class FootballPoints {

    public static void main(String[] args) {
        System.out.println("wins: 1, draws: 2, losses: 3. Total points: " + footballPoints(1, 2, 3));
        System.out.println("wins: 5, draws: 5, losses: 5. Total points: " + footballPoints(5, 5, 5));
        System.out.println("wins: 1, draws: 0, losses: 0. Total points: " + footballPoints(1, 0, 0));
    }

    public static int footballPoints(int wins, int draws, int losses) {
        return (wins * 3 + draws);
    }
}