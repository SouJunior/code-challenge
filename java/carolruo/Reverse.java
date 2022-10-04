import java.util.Arrays;

public class Reverse {

    public static void main(String[] args) {
        int[] arr1 = new int[]{1, 2, 3, 4, 5};
        int[] arr2 = new int[]{7, 3, 9, 2, 6};
        int[] reverse1 = reverse(arr1);
        int[] reverse2 = reverse(arr2);

        System.out.println("Array [1, 2, 3, 4, 5] reverse: ");
        print(reverse1);
        System.out.println("Array [7, 3, 9, 2, 6] reverse: ");
        print(reverse2);
    }

    public static int[] reverse(int[] arr) {
        int[] newArr = new int[arr.length];
        int count = 0;
        for (int i = arr.length - 1; i >= 0; i--) {
            newArr[count] = arr[i];
            count++;
        }
        return newArr;
    }

    public static void print(int[] arr) {
        Arrays.stream(arr).forEach(x -> System.out.printf("%d ", x));
        System.out.println();
    }

}