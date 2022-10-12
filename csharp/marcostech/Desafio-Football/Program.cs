// See https://aka.ms/new-console-template for more information
using System;
using marcostech.Pontuador;

Pontuador points = new Pontuador();
uint wins = 0;
uint draws = 0;
uint losses = 0;
bool validNumChecker = false;

Console.WriteLine("Bem vindo ao programa de Pontos do Time:");
Console.WriteLine("Insira a quantidade de Vitorias:");
//Loop para aceitar somente um número inteiro
while(!validNumChecker)
{
    validNumChecker = uint.TryParse(Console.ReadLine(), out wins);    
    if(!validNumChecker) 
    {
        Console.WriteLine("Por favor digite um número inteiro e maior que zero.");
    }
}
//Reseta a flag validador
validNumChecker = false;
Console.WriteLine("Insira a quantidade de Empates:");
while(!validNumChecker)
{
    validNumChecker = uint.TryParse(Console.ReadLine(), out draws);
    if(!validNumChecker) 
    {
        Console.WriteLine("Por favor digite um número inteiro e maior que zero.");
    }
}
//Reseta a flag validador
validNumChecker = false;
Console.WriteLine("Insira a quantidade de Derrotas:");
while(!validNumChecker)
{
    validNumChecker = uint.TryParse(Console.ReadLine(), out losses);
    if(!validNumChecker) 
    {
        Console.WriteLine("Por favor digite um número inteiro e maior que zero.");
    }
}
Console.WriteLine($"Pontos totais: {points.ContaPontos(wins, draws, losses)}");