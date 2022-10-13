using FootballPoints;
using FootballPoints.Enums;
using Newtonsoft.Json.Linq;

namespace FootballPointsTests
{
    [TestClass]
    public class FootballPointsTests
    {
        [TestMethod]
        public void ShouldReturnThreePointsForWin()
        {
            var point = ((int)EPoints.Win);
            Assert.AreEqual(3, point);
    }

        [TestMethod]
        public void ShouldReturnOnePointForDraw()
        {
            var point = ((int)EPoints.Draw);
            Assert.AreEqual(1, point);
        }
        
        [TestMethod]
        public void ShouldReturnZeroPointForLoose()
        {
            var point = ((int)EPoints.Loose);
            Assert.AreEqual(0, point);
        }

        [TestMethod]
        [DataTestMethod]
        [DataRow(3, 4, 2, 13)]
        [DataRow(5, 0, 2, 15)]
        [DataRow(0, 0, 0, 0)]
        public void ShouldReceiveWinsDrawsAndLoosesAndReturnTheResult(int win, int draw, int loose, int result)
        {
            var score = new Score(win, draw, loose);
            var total = score.TotalPoints();
            Assert.AreEqual(result, total);
        }

        [TestMethod]
        public void ShouldReturnTheTotalPointsOfDraw()
        {
            var score = new Score(5, 10, 20);
            var total = score.DrawPoints();
            Assert.AreEqual(10, total);
        }

        [TestMethod]
        public void ShouldReturnTheTotalPointsOfWin()
        {
            var score = new Score(5, 10, 20);
            var total = score.WinPoints();
            Assert.AreEqual(15, total);
        }

        [TestMethod]
        public void ShouldReturnTheTotalPointsOfLoose()
        {
            var score = new Score(5, 10, 20);
            var total = score.LoosePoints();
            Assert.AreEqual(0, total);
        }
    }
}
