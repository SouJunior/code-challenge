import java.util.Arrays;
public class arrayReverse{
    public static void main(String[] args) {

        int[] integerArray = {15, 16, 17, 18, 19, 20, 21, 22, 23};
        System.out.println(Arrays.toString(reverse(integerArray)));
        int[] printArray = {};
        System.out.println(Arrays.toString(reverse(printArray)));

    }

    public static int[] reverse(int[] arr) {
        
        if(arr.length <= 1){
            return arr;
        }

        int[] reverseArray = new int[arr.length];

        for(int i=0 ; i < arr.length; i++){  
            reverseArray[i] = arr[(arr.length-1)-i];
        }  

        return reverseArray;
        
    }
}


    