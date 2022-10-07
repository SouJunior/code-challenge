const getTotalPoints = (wins, draws, losses) => wins * 3 + draws + losses;

console.log(getTotalPoints(3, 4, 2)) // 13
console.log(getTotalPoints(5, 0, 2)) // 15
console.log(getTotalPoints(0, 0, 1)) // 0