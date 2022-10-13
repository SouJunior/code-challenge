namespace AreaOfRetangle;

public class Program
{
    public static void Main(string[] args)
    {
        var height = int.Parse(args[0]);
        var width = int.Parse(args[1]);

        var area = Area(height, width);
        
        Console.WriteLine(area);
    }

    public static int Area(int height, int width)
    {
        if(height <= 0 || width <= 0)
        {
            return -1;
        }

        return height * width;
    }
}