function areaOfRectangle (num1, num2) {
   const area = num1 * num2

   if (area > 0) {
    return area
   }else {
    return -1
   }
}

// Examples

testOne = areaOfRectangle(3, 4)
console.log(testOne);

testTwo = areaOfRectangle(10, 11)
console.log(testTwo);

testThree = areaOfRectangle(-1, 5)
console.log(testThree);

testFour = areaOfRectangle(0, 2)
console.log(testFour);