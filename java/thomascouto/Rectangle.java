package java.thomascouto;

public class Rectangle {
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        System.out.println(r.area(3, 4));
    }

    public int area(int a, int b) {
        return a * b;
    }
}
