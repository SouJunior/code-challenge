public class areaRetangulo{
    public static void main(String[] args){
        System.out.println("Área do retângulo = " + getArea(23, 45));
    }
    public static int getArea(int h, int w) {
        if(h <=0 || w <= 0){
            return -1;
        }
        return h * w;
    }
}
