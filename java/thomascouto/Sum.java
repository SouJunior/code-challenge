package java.thomascouto;

public class Sum {
    public static void main(String[] args) {
        Sum s = new Sum();
        System.out.println(s.sum(1, 2));
    }

    /**
     * Return the Sum of Two Numbers
     * 
     * @param a - 1st number
     * @param b - 2nd number
     * @return returns their sum
     */
    public int sum(int a, int b) {
        return a + b;
    }
}