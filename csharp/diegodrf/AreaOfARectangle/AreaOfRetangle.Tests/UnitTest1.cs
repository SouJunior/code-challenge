using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace AreaOfRetangle.Tests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        [DataTestMethod]
        [DataRow(3, 4, 12)]
        [DataRow(10, 11, 110)]
        [DataRow(-1, 5, -1)]
        [DataRow(0, 2, -1)]
        public void TestMethod1(int height, int width, int expectedResult)
        {
            var result = Program.Area(height, width);
            Assert.AreEqual(expectedResult, result);
        }
    }
}