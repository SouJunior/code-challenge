function areaOfRectangle (num1, num2) {
    if (num1 <= 0 || num2 <= 0) {
        return -1
    }else {
        return num1 * num2
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

testThree = areaOfRectangle(-2, -2)
console.log(testThree);