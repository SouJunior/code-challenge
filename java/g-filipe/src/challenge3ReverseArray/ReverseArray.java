/*
Write a function to reverse an array.

**Examples**
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ []

**Notes**
Don't forget to return the result.

*/
package challenge3ReverseArray;

import java.util.Scanner;

public class ReverseArray {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the length of the array: ");
        int lengthOfArray = sc.nextInt();

        int[] numbers = new int[lengthOfArray];

        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Enter a number: ");
            numbers[i] = sc.nextInt();
        }

        printReverseArray(reverseArray(numbers));

    }

    public static int[] reverseArray(int[] array) {

        int[] reverseArray = new int[array.length];

        for (int i = 0; i < array.length; i++) {
            reverseArray[i] = array[array.length - 1 - i];
        }
        return reverseArray;
    }

    public static void printReverseArray(int[] arr) {

        for (int number : arr) {
            System.out.print(number + " ");
        }
    }
}
