using System;
using marcostech.Inversora;

int[] array = { 2, 4, 6, 8 };
Console.WriteLine("Array original: " + String.Join(",",array));

array = Inversora.InverterArray(array);
        
Console.WriteLine("Array invertido: " + String.Join(",",array));