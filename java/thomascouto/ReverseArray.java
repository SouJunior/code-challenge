package java.thomascouto;

import java.util.Arrays;

public class ReverseArray {
    public static void main(String[] args) {
        ReverseArray r = new ReverseArray();

        int[] x = { 9, 9, 2, 3, 4 };
        System.out.println(Arrays.toString(r.reverse(x)));
    }

    /**
     * Function to reverse an array.
     * 
     * @param arr - original array.
     * @return - reversed array
     */
    public int[] reverse(int[] arr) {
        if (arr.length == 0 || arr.length == 1)
            return arr;

        int[] newArr = new int[arr.length];

        for (int i = arr.length - 1; i >= 0; i--)
            newArr[newArr.length - i - 1] = arr[i];

        return newArr;
    }
}
