
const totPoint = (wins, draws, losses) => wins * 3 + draws + losses;

console.log(totPoint(3, 2 ,3))  // 11
console.log(totPoint(2, 0 ,3))  // 6 
console.log(totPoint(8, 1 ,3))  // 25