public class ReverseAnArray
{

    public static void main(String[] args)
    {
        int[] array = {9, 9, 2, 3, 4};
        int[] arrayInverted = reverseArray(array);

        for (int i = 0; i < arrayInverted.length; i++)
        {
            System.out.print("[" + arrayInverted[i] + "]");
        }
        System.out.print("\n");
    }

    public static int[] reverseArray(int[] array)
    {
        if (array.length <= 1)
        {
            return array;
        }
        else
        {
            int[] arrayInverted = new int[array.length];
            int j = 0;

            for (int i = arrayInverted.length - 1; i >= 0; i--)
            {
                arrayInverted[j] = array[i];
                j++;
            }

            return arrayInverted;
        }
    }

}
