import java.util.Scanner;

public class FootballPoints {
    public static void main(String[] args) {
        if (args.length != 3) {
            System.out.println("Número de argumentos inválidos.");
        } else {
            System.out.println(footballPoints(
                    Integer.parseInt(args[0]),
                    Integer.parseInt(args[1]),
                    Integer.parseInt(args[2])));
        }
    }

    static int footballPoints(int wins, int draws, int losses) {
        return wins * 3 + draws * 1 + losses * 0;
    }
}