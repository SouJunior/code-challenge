using System;
class AreaRectangle
{
  public static void Main()
  {
    Area(3, 4);
    Area(10, 11);
    Area(-1, 5);
    Area(0, 2);
  }
  static void Area(int b, int h)
  {
    int a;

    a = b * h <= 0 ? -1 : b * h;

    Console.WriteLine(a);
  }
}