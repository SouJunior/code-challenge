import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        printArray(reverse(args));
    }

    static String[] reverse(String[] array) {
        String[] reverse = new String[array.length];

        for (int i = 0; i < array.length; i++) {
            reverse[i] = array[array.length - 1 - i];
        }
        return reverse;
    }

    static void printArray(String[] array) {
        if (isArrayEmpty(array)){
            System.out.println("Array vazio.");
        } else {
            Arrays.stream(array).forEach(a -> System.out.print(a + " "));
            System.out.println("");
        }
    }

    static boolean isArrayEmpty(String[] array) {
        if (array.length == 0 || array == null) {
            return true;
        } else {
            return false;
        }
    }
}
