function footballPoints(wins: number, draws: number, losses: number): number {
  return ((wins * 3) + (draws * 1) + (losses * 0));
}

console.log(footballPoints(14, 11, 4));