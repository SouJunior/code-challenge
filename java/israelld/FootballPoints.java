public class FootballPoints {
    public static void main(String[] args) {

        System.out.println(footballPoints(3, 4, 2));

    }

    public static int footballPoints(int wins, int draws, int losses) {

        return (wins * 3) + draws;
        
    }
}
