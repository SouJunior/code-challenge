import java.util.Arrays;

public class ReverseAnArray {
    public static void main(String[] args) {

        int[] integerArray = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        System.out.println(Arrays.toString(reversingArray(integerArray)));
        int[] emptyArray = {};
        System.out.println(Arrays.toString(reversingArray(emptyArray)));

    }

    public static int[] reversingArray(int[] originalArray) {
        
        if(originalArray.length <= 1){
            return originalArray;
        }

        int[] reverseArray = new int[originalArray.length];

        for(int i=0 ; i < originalArray.length; i++){  
            reverseArray[i] = originalArray[(originalArray.length-1)-i];
        }  

        return reverseArray;
        
    }
}
