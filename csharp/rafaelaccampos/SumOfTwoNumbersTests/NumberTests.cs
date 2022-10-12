using SumOfTwoNumbers;

namespace SumOfTwoNumbersTests
{
    public class NumberTests
    {
        [TestCase(3, 2)]
        public void ShouldBeAbleToReturnSumOfTwoNumbersIntegers(decimal number1, decimal number2)
        {
            var number = new Number(number1, number2);

            var sum = number.Sum();

            Assert.That(sum, Is.EqualTo(5));
        }

        [TestCase(3.9, 2.7)]
        public void ShouldBeAbleToReturnSumOfTwoNumbersDecimals(decimal number1, decimal number2)
        {
            var number = new Number(number1, number2);

            var sum = number.Sum();

            Assert.That(sum, Is.EqualTo(6.6));
        }
    }
}