function footballPoints(wins, draws, losses) {
  return wins * 3 + draws;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));
