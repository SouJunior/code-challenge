using SumOfTwoNumbers;

    Console.WriteLine("Informe o primeiro número para somar:");
    var firstNumber = decimal.Parse(Console.ReadLine().Replace(".", ","));
    Console.WriteLine("Informe o segundo número para somar:");
    var secondNumber = decimal.Parse(Console.ReadLine().Replace(".", ","));

    var number = new Number(firstNumber, secondNumber);
    var resultOfSum = number.Sum();

    Console.WriteLine("A soma total é: {0}", resultOfSum);