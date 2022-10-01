function footballPoints (wins, draws, losses) {
    const winPoints = wins * 3
    const drawPoints = draws * 1
    const losePoints = losses * 0
    return winPoints + drawPoints + losePoints
}

// Examples

testOne = footballPoints(3, 4, 2)
console.log(testOne);

testTwo = footballPoints(5, 0, 2)
console.log(testTwo);

testThree = footballPoints(0, 0, 1)
console.log(testThree);