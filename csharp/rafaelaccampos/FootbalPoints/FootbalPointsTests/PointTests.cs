
using Footbal;

namespace FootbalPointsTests
{
    public class PointTests
    {

        [Test]
        public void ShouldBeAbleToCalculatePointsWhenTeamGotThreeWinsAndFourDrawsAndTwoLosses()
        {
            var point = new Point(3, 4, 2);
            var resultOfPoints = point.CalculateNumberOfPoints();
            Assert.That(resultOfPoints, Is.EqualTo(13));
        }        
        
        [Test]
        public void ShouldBeAbleToCalculatePointsWhenTeamGotFiveWinsAndNoneDrawAndTwoLosses()
        {
            var point = new Point(5, 0, 2);
            var resultOfPoints = point.CalculateNumberOfPoints();
            Assert.That(resultOfPoints, Is.EqualTo(15));
        }        
        
        [Test]
        public void ShouldBeAbleToCalculatePointsWhenTeamGotNoneWinsAndNoneDrawsAndOneLoss()
        {
            var point = new Point(0, 0, 1);
            var resultOfPoints = point.CalculateNumberOfPoints();
            Assert.That(resultOfPoints, Is.EqualTo(0));
        }

        [TestCase(-1, 0, 1)]
        [TestCase(0, -1, 1)]
        [TestCase(0, 1, -1)]
        [TestCase(-1, -1, -1)]
        public void ShouldBeAbleToThrowArgumentExceptionWhenWinsIsNegative(int wins, int draws, int losses)
        {
            var argumentException = Assert.Throws<ArgumentException>(() => new Point(wins, draws, losses));
            StringAssert.Contains("Nenhum dos valores pode ser negativo!", argumentException.Message.ToString());
        }
    }
}