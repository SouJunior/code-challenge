public class AreaOfRectangle {
    public static void main(String[] args) {

        System.out.println(rectangleArea(2, 21));
        System.out.println(rectangleArea(-2, 21));
        
    }

    public static int rectangleArea(int length, int width) {
        if(length <=0 || width <= 0){
            return -1;
        }
        return length * width;
    }
}
