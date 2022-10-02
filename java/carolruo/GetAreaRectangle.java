public class GetAreaRectangle {

    public static void main(String[] args) {
        System.out.println("Height: 2 Width: 2 \nArea equals: " + getArea(2, 2));
        System.out.println();
        System.out.println("Height: 4 Width: 3 \nArea equals: " + getArea(4, 3));
    }

    public static int getArea(int height, int width) {
        return (height > 0 && width > 0) ? height * width : -1;
    }
}