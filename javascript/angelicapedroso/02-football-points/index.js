const footballPoints = (wins, draws, losses) => (wins * 3) + draws + (losses * 0);

console.log(footballPoints(5, 0, 2));