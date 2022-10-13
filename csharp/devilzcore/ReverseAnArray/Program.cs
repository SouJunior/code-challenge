using System;
class ReverseAnArray
{
  public static void Main()
  {
    Reverse(new int[] { 1, 2, 3, 4 });
    Reverse(new int[] { 9, 9, 2, 3, 4 });
  }
  static void Reverse(int[] arr)
  {
    int count = arr.Length;
    int[] newArr = { };

    foreach (int reverse in arr)
    {
      if (count-- > 0)
      {
        newArr = newArr.Concat(new int[] { arr[count] }).ToArray();
      }
    }
    Console.WriteLine("Normal: [{0}]", string.Join(", ", arr));
    Console.WriteLine("Reverse: [{0}]", string.Join(", ", newArr));
  }
}


