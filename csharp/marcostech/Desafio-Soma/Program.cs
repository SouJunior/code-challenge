// See https://aka.ms/new-console-template for more information
using System;
using marcostech.Calculadora;

Calculadora calc = new Calculadora();
int numA = 0;
int numB = 0;
bool validNumChecker = false;

Console.WriteLine("Bem vindo ao programa de Adição:");
Console.WriteLine("Insira os número a serem somados:");
Console.WriteLine("Número 1:");
//Loop para aceitar somente um número inteiro
while(!validNumChecker)
{
    validNumChecker = int.TryParse(Console.ReadLine(), out numA);
    if(!validNumChecker) 
    {
        Console.WriteLine("Por favor digite um número inteiro.");
    }
}
//Reseta a flag validador
validNumChecker = false;
Console.WriteLine("Número 2:");
while(!validNumChecker)
{
    validNumChecker = int.TryParse(Console.ReadLine(), out numB);
    if(!validNumChecker) 
    {
        Console.WriteLine("Por favor digite um número inteiro.");
    }
}
Console.WriteLine($"Resultado: {calc.Somar(numA, numB)}");