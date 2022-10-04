package java.thomascouto;

public class Football {
    public static void main(String[] args) {
        Football f = new Football();
        System.out.println(f.footballPoints(3, 4, 2));
    }

    /**
     * takes the number of wins, draws and losses and calculates the number of
     * points
     * 
     * wins get 3 points
     * draws get 1 point
     * losses get 0 points
     * 
     * @param w - wins
     * @param d - draws
     * @param l - losses
     * @return calculates the number of points a football team has obtained so far.
     */
    public int footballPoints(int w, int d, int l) {
        return (w * 3) + d;
    }
}
