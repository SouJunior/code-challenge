public class Rectangle {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Argumentos inválidos.");
        } else {
            System.out.println(Area(Integer.parseInt(args[0]), Integer.parseInt(args[1])));
        }
    }
    static int Area(int a, int b) {
        return a * b;
    }
}
