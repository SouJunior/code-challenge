using System;
class ReturnTheSumOfTwoNumbers
{
  public static void Main()
  {
    Sum(-3, -6);
  }
  static void Sum(int x, int y)
  {
    int result;
    result = x + y;

    Console.WriteLine(result);
  }
}