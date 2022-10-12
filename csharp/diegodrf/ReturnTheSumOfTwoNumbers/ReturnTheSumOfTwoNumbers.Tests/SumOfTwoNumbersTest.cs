namespace ReturnTheSumOfTwoNumbers.Tests;

[TestClass]
public class SumOfTwoNumbersTest
{
    [TestMethod]
    [DataTestMethod]
    [DataRow(3, 2)]
    [DataRow(-3, -6)]
    [DataRow(7, 3)]
    public void ShouldReturnAnIntThatCorrespondsWithTheSumOfTheTwoNumbers(int num1, int num2)
    {
        var total = SumTwoNumbers.Addition(num1, num2);
        var expectedValue = num1 + num2;
        Assert.AreEqual(expectedValue, total);
    }
}